import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import { parse } from 'node-html-parser';
import readingTime from 'reading-time';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug-custom-id';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeRewrite, { RehypeRewriteOptions } from 'rehype-rewrite';
import rehypePrism from 'rehype-prism-plus';

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: false },
    keywords: { type: 'string', required: false },
    description: { type: 'string', required: false },
    date: { type: 'date', required: false },
    updated: { type: 'date', required: false },
    link: { type: 'string', required: false },
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

export const rewrite: RehypeRewriteOptions['rewrite'] = (node) => {
  if (node.type === 'element' && node.tagName == 'img') {
    const { properties } = node;
    const [src, attributesString] = properties?.src?.split('#') || [];
    const attributes = (attributesString || '')
      .split('&')
      .reduce((attrs: string[], attr: string) => {
        const [key, val] = attr.split('=');
        if (!val || !key) return attrs;
        return {
          ...attrs,
          [key]: val,
        };
      }, {});
    node.properties = {
      ...node.properties,
      src,
      ...attributes,
    };
  }
};

export default makeSource({
  contentDirPath: 'docs',
  documentTypes: [Post],
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeCodeTitles,
      rehypePrism,
      [
        rehypeRewrite,
        {
          rewrite,
        },
      ],
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
