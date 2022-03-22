import type { Plugin, PluggableList } from 'unified';
import { visit } from 'unist-util-visit';
import { hasProperty } from 'hast-util-has-property';
import { headingRank } from 'hast-util-heading-rank';
import { toString } from 'hast-util-to-string';
import remarkGfm from 'remark-gfm';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// https://github.com/docsifyjs/docsify/blob/develop/src/core/render/utils.js
export function getAndRemoveConfig(str = '') {
  const config: Record<string, any> = {};

  if (str) {
    str = str
      .replace(/^('|")/, '')
      .replace(/('|")$/, '')
      .replace(/(?:^|\s):([\w-]+:?)=?([\w-%]+)?/g, (m, key, value) => {
        if (key.indexOf(':') === -1) {
          config[key] = (value && value.replace(/&quot;/g, '')) || true;
          return '';
        }

        return m;
      })
      .trim();
  }

  return { str, config };
}

export const remarkRemoveFootnotesTitle: Plugin<any, any> = () => (tree) => {
  visit(tree, 'heading', (node, index, parent) => {
    if (toString(node).match(/footnote/gi) && parent?.children?.length) {
      parent?.children?.splice(index, 1);
    }
  });
};

// https://docsify.js.org/#/zh-cn/helpers
export const rehypeDocsify: Plugin<any, any> = () => (tree) => {
  let toc = 0;
  visit(tree, 'element', (node) => {
    switch (true) {
      // add slug
      case !!(
        headingRank(node) &&
        node.properties &&
        node?.children?.length &&
        !hasProperty(node, 'id')
      ): {
        toc += 1;
        const { str, config } = getAndRemoveConfig(toString(node));
        node.children[0].value = str;
        node.properties.id = config.id || `t${toc}`;
        break;
      }
      // image size
      case node.tagName === 'img' && hasProperty(node, 'title'): {
        const { config } = getAndRemoveConfig(node.properties.title);
        if (config.size) {
          delete node.properties.title;
          node.properties.width = config.size;
        }
        break;
      }
      // iframe
      case node.tagName === 'a' && hasProperty(node, 'title'): {
        const { str, config } = getAndRemoveConfig(node.properties.title);
        if (config.include && config.type === 'iframe') {
          node.tagName = 'iframe';
          node.properties.src = node.properties.href;
          str.split(' ').forEach((i) => {
            const [key, value] = i.split('=');
            node.properties[key] = value;
          });

          delete node.properties.href;
          delete node.properties.title;
        }
        break;
      }
      //  ?>
      case node.tagName === 'p' &&
        toString(node).startsWith('?> ') &&
        !!node?.children?.length: {
        node.children[0].value = toString(node).slice(3);
        node.properties.class = 'info';
        break;
      }
      //  !>
      case node.tagName === 'p' &&
        toString(node).startsWith('!> ') &&
        !!node?.children?.length: {
        node.children[0].value = toString(node).slice(3);
        node.properties.class = 'warning';
        break;
      }
      default: {
        //
      }
    }
  });
};

export const remarkPlugins: PluggableList = [
  remarkRemoveFootnotesTitle,
  remarkGfm,
];

export const rehypePlugins: PluggableList = [
  rehypeDocsify,
  [
    rehypeAutolinkHeadings,
    {
      behavior: 'wrap',
      properties: {
        className: ['anchor'],
      },
    },
  ],
];
