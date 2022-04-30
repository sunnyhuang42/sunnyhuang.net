import type { Post as PostGenerated } from 'contentlayer/generated';
import { allPosts as allPostsGenerated } from 'contentlayer/generated';

export type Post = Omit<PostGenerated, '_id' | '_raw' | 'type' | 'body'> & {
  minutes: number;
  html: string;
  changelog?: string;
};

const moreSplit = '<!-- more -->';
export const allPosts: Post[] = allPostsGenerated
  .sort(
    (a, b) =>
      Number(new Date(b.date as string)) - Number(new Date(a.date as string)),
  )
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
    const description =
      rest.description ||
      (html.includes(moreSplit) ? html.split(moreSplit)[0] : '');

    return {
      ...rest,
      description,
      date: (date || '').slice(0, 10),
      updated: (updated || '').slice(0, 10),
      minutes: Math.ceil(post.words / 400),
      html: match ? html.replace(match[0], '') : html,
      changelog: match ? match[0].match(/<ul>([\s\S]*)<\/ul>/g)?.[0] : '',
    };
  });
