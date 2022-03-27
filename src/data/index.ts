import type { Post as PostGenerated } from 'contentlayer/generated';
import { allPosts as allPostsGenerated } from 'contentlayer/generated';

export type Post = Omit<
  PostGenerated,
  '_id' | '_raw' | 'type' | 'body' | 'flattenedPath'
> & {
  minutes: number;
  html: string;
};

// TODO: description
export const allPosts: Post[] = allPostsGenerated
  .sort(
    (a, b) =>
      Number(new Date(b.date as string)) - Number(new Date(a.date as string)),
  )
  .map((post) => {
    const { _id, _raw, type, body, flattenedPath, date, updated, ...rest } =
      post;
    return {
      ...rest,
      date: (date || '').slice(0, 10),
      updated: (updated || '').slice(0, 10),
      minutes: Math.ceil(post.words / 400),
      html: body.html,
    };
  });
