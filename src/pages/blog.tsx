import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { allPosts, Post } from 'contentlayer/generated';

const Blog = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { years, postsByYear } = props;
  return (
    <>
      {years.map((year) => (
        <div key={year} className="mb-6">
          <h2 className="mb-4 py-2 text-3xl font-bold border-b">{year}</h2>
          {postsByYear[year].map((post) => (
            <Link key={post.slug} href={post.slug}>
              <a
                key={post.title}
                className="flex justify-between items-center mb-2 md:mb-0 p-1.5 md:px-3 rounded-md hover:bg-secondary"
              >
                <h3 className="flex-1">{post.title}</h3>
                <time className="pl-8 text-secondary text-sm">{post.date}</time>
              </a>
            </Link>
          ))}
        </div>
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
