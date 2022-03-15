import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import readingTime from 'reading-time';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
// import rehypeToc from '@jsdevtools/rehype-toc';
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
  },
}));

export default makeSource({
  contentDirPath: 'docs',
  documentTypes: [Post],
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      // rehypeToc,
      rehypeCodeTitles,
      rehypePrism,
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
