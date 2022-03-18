import { allPosts } from 'contentlayer/generated';
export { allPosts } from 'contentlayer/generated';
export type { Post } from 'contentlayer/generated';

export const allSortPosts = allPosts
  .filter((post) => post.date)
  .sort(
    (a, b) =>
      Number(new Date(b.date as string)) - Number(new Date(a.date as string)),
  );
