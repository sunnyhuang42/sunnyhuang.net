import { InferGetStaticPropsType } from 'next';
import { allSortPosts } from '@/data';
import { highlights } from 'config';
import SEO from '@/components/seo';
import List from '@/components/list';

export default function Home({
  post,
  latestPosts,
  highlightPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="mx-auto max-w-3xl py-6">
      <SEO />
      <div
        className="prose mb-6"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
      <List hasMore title="最新内容" data={latestPosts} />
      <List hasMore title="推荐内容" data={highlightPosts} />
    </div>
  );
}

export const getStaticProps = async () => {
  const post = allSortPosts.find((post) => post.slug === '/');
  const latestPosts = allSortPosts.slice(0, 5).map(({ slug, title, date }) => ({
    slug,
    title,
    date: date?.slice(5, 10),
  }));

  const highlightPosts = allSortPosts
    .filter((i) => highlights.includes(i.slug))
    .map(({ slug, title, date }) => ({
      slug,
      title,
      date: date?.slice(0, 4),
    }));

  return {
    props: {
      post: post || { body: { html: '' } },
      latestPosts,
      highlightPosts,
    },
  };
};
