import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import { parse } from 'node-html-parser';
import readingTime from 'reading-time';
import { remarkPlugins, rehypePlugins } from './src/utils/markdown';

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
      resolve: (post) => `/${post._raw.flattenedPath.replace(/\/?README/, '')}`,
    },
    flattenedPath: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath,
    },
    words: {
      type: 'number',
      resolve: (post) => readingTime(post.body.raw).words,
    },
    headings: {
      type: 'json',
      resolve: (post) =>
        parse(post.body.html)
          .querySelectorAll('[id]')
          .filter((node) => node.tagName.includes('H'))
          .map(({ id, tagName, text }) => ({
            id,
            text,
            depth: Number(tagName.replace('H', '')),
          })),
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
