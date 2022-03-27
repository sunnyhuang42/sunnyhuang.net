import { InferGetStaticPropsType } from 'next';
import { allPosts, Post } from '@/data';
import SEO from '@/components/seo';
import List from '@/components/list';

const Blog = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { years, postsByYear } = props;
  return (
    <div className="mx-auto max-w-3xl py-6">
      <SEO title="博客" />
      {years.map((year) => (
        <List key={year} title={year} data={postsByYear[year]} />
      ))}
    </div>
  );
};

type PostsByYear = Record<string, Pick<Post, 'slug' | 'title' | 'date'>[]>;

export const getStaticProps = async () => {
  const postsByYear: PostsByYear = {};
  allPosts.forEach((post) => {
    const { slug, title, date } = post;
    const year = date?.split('-')[0];
    if (year) {
      postsByYear[year] = [
        ...(postsByYear[year] || []),
        {
          slug,
          title,
          date: date?.slice(5, 10),
        },
      ];
    }
  });

  const years = Object.keys(postsByYear).reverse();

  return { props: { years, postsByYear } };
};

export default Blog;
