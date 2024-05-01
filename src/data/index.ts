import { parse } from 'node-html-parser';
import type { Post as PostGenerated } from 'contentlayer/generated';
import { allPosts as allPostsGenerated } from 'contentlayer/generated';
import { isProduction } from '@/config'

export type Post = Omit<PostGenerated, '_id' | '_raw' | 'type' | 'body'> & {
  minutes: number;
  html: string;
  summary: string;
  changelog?: string;
};

const moreSplit = '<!-- more -->';
const getTime = (date?: string) => new Date(date || 0).getTime();

export const allPosts: Post[] = allPostsGenerated
  .filter((post) => !(post.hide && isProduction))
  .sort((a, b) => getTime(b.date) - getTime(a.date))
  .map((post) => {
    const {
      _id,
      _raw,
      type,
      date,
      updated,
      body: { html },
      ...rest
    } = post;
    const match = html.match(/<h2 id="changelog"([\s\S]*)<\/ul>/g);
    const summary =
      rest.description ||
      (html.includes(moreSplit) ? html.split(moreSplit)[0] : '');

    return {
      ...rest,
      summary,
      date: (date || '').slice(0, 10),
      updated: (updated || '').slice(0, 10),
      minutes: Math.ceil(post.words / 400),
      html: match ? html.replace(match[0], '') : html,
      description: parse(summary).rawText,
      changelog: match ? match[0].match(/<ul>([\s\S]*)<\/ul>/g)?.[0] : '',
    };
  });
