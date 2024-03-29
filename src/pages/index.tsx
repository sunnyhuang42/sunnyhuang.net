import { InferGetStaticPropsType } from 'next';
import { allPosts } from '@/data';
import { ad, highlights } from '@/config';
import SEO from '@/components/seo';
import List from '@/components/list';

export default function Home({
  about,
  latestPosts,
  highlightPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="mx-auto max-w-2xl py-6">
      <SEO />
      <div className="prose mb-6" dangerouslySetInnerHTML={{ __html: about }} />
      {ad?.home && (
        <div
          className="mt-6 mb-12"
          dangerouslySetInnerHTML={{
            __html: ad.home,
          }}
        />
      )}
      <List hasMore title="最新内容" data={latestPosts} />
      <List hasMore title="推荐内容" data={highlightPosts} />
    </div>
  );
}

export const getStaticProps = async () => {
  const post = allPosts.find((post) => post.slug === '/');
  const latestPosts = allPosts.slice(0, 5).map(({ slug, title, date }) => ({
    slug,
    title,
    date: date?.slice(5, 10),
  }));

  const highlightPosts = allPosts
    .filter((i) => highlights.includes(i.slug))
    .map(({ slug, title, date }) => ({
      slug,
      title,
      date: date?.slice(0, 4),
    }));

  return {
    props: {
      about: post?.html || '',
      latestPosts,
      highlightPosts,
    },
  };
};
