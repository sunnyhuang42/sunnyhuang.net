import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import { parse } from 'node-html-parser';
import readingTime from 'reading-time';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug-custom-id';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: false },
    keywords: { type: 'string', required: false },
    description: { type: 'string', required: false },
    date: { type: 'string', required: false },
    updated: { type: 'string', required: false },
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
    readingTime: {
      type: 'json',
      resolve: (post) => readingTime(post.body.raw),
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
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeCodeTitles,
      rehypePrism,
      [
        rehypeSlug,
        {
          maintainCase: true,
          removeAccents: true,
          enableCustomId: true,
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
});
