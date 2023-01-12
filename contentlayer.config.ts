import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import { parse } from 'node-html-parser';
import readingTime from 'reading-time';
import { addSearchData } from './src/utils/search.mjs';
import { remarkPlugins, rehypePlugins } from './src/utils/markdown';
import type { Heading } from './src/context/page';

const headingTags = ['H2', 'H3', 'H4', 'H5', 'H6'];
const cleanup = (content: string) =>
  content
    .trim()
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .join('\n');

const getSlug = (post: any) =>
  `/${post._raw.flattenedPath.replace(/\/?README/, '')}`;

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: false },
    keywords: { type: 'json', required: false },
    description: { type: 'string', required: false },
    date: { type: 'string', required: false },
    updated: { type: 'string', required: false },
    link: { type: 'string', required: false },
    tags: { type: 'json', required: false },
    toc: { type: 'number', required: false },
    hide: { type: 'boolean', required: false },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: getSlug,
    },
    sourceFilePath: {
      type: 'string',
      resolve: (post) => post._raw.sourceFilePath,
    },
    words: {
      type: 'number',
      resolve: (post) => readingTime(post.body.raw).words,
    },
    headings: {
      type: 'json',
      resolve: (post) => {
        let slug = '';
        let content = '';
        let skip = false;
        const data: Record<string, string> = {};
        const headings: Heading[] = [];
        const nodes = parse(post.body.html).getElementsByTagName('*');
        const lastIndex = nodes.length - 1;

        nodes.forEach((node, index) => {
          const { id, text, tagName } = node;
          if (headingTags.includes(tagName)) {
            data[slug] = cleanup(content);
            content = '';
            slug = `${id}#${text}`;
            skip = true;

            if (id) {
              headings.push({
                id,
                text,
                depth: Number(tagName.replace('H', '')),
              });
            }
          } else if (skip) {
            skip = false;
          } else {
            content += `${text}\n`;
          }

          if (index === lastIndex) {
            data[slug] = cleanup(content);
          }
        });

        const logIndex = headings.findIndex((i) => i.id === 'changelog');

        if (logIndex > -1) {
          headings.push(headings.splice(logIndex, 1)[0]);
        }

        addSearchData({
          data,
          slug: getSlug(post),
          title: post.title || '',
        });

        return headings;
      },
    },
  },
}));

export default makeSource({
  contentDirPath: 'docs',
  documentTypes: [Post],
  markdown: {
    remarkPlugins,
    rehypePlugins,
  },
});
