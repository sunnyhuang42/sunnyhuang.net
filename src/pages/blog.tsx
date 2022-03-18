import { InferGetStaticPropsType } from 'next';
import { allPosts, Post } from 'contentlayer/generated';
import SEO from '@/components/seo';
import List from '@/components/list';

const Blog = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { years, postsByYear } = props;
  return (
    <>
      <SEO title="博客" />
      {years.map((year) => (
        <List key={year} title={year} data={postsByYear[year]} />
      ))}
    </>
  );
};

type PostsByYear = Record<string, Pick<Post, 'slug' | 'title' | 'date'>[]>;

export const getStaticProps = async () => {
  const postsByYear: PostsByYear = {};
  allPosts
    .filter((post) => post.date)
    .sort(
      (a, b) =>
        Number(new Date(b.date as string)) - Number(new Date(a.date as string)),
    )
    .forEach((post) => {
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
