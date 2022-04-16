import cn from 'clsx';
import { useState, useEffect } from 'react';
import { InferGetStaticPropsType } from 'next';
import { isClient } from '@/config';
import { allPosts, Post } from '@/data';
import SEO from '@/components/seo';
import List from '@/components/list';
import { usePage } from '@/context';

const modes = [
  {
    mode: 'simple',
    text: '简单模式',
  },
  {
    mode: 'details',
    text: '摘要模式',
  },
];

const Blog = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { years, headings, postsByYear } = props;
  const { setPage } = usePage();
  const [mode, setMode] = useState('');

  const handleMode = (mode: string) => {
    setMode(mode);
    localStorage.postsMode = mode;
  };

  useEffect(() => {
    setPage({
      headings,
      title: '博客导览',
    });
    setMode((isClient ? localStorage.postsMode : '') || 'simple');
  }, []);

  return (
    <div className="mx-auto max-w-2xl py-6 xl:px-6 2xl:px-0">
      <SEO title="博客" />
      {mode && (
        <>
          <div className="mb-1.5 flex justify-center space-x-4 text-sm md:my-2">
            {modes.map((item) => (
              <div
                key={item.mode}
                className={cn(
                  'cursor-pointer rounded-md px-3 py-1.5 transition-colors bg-secondary',
                  item.mode === mode ? 'text-accent' : 'hover:text-accent',
                )}
                onClick={() => handleMode(item.mode)}
              >
                {item.text}
              </div>
            ))}
          </div>
          <div>
            {years.map((year) => (
              <List
                id={year}
                mode={mode as any}
                key={year}
                title={year}
                data={postsByYear[year]}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

type PostsByYear = Record<
  string,
  Partial<Pick<Post, 'slug' | 'title' | 'description' | 'date' | 'link'>>[]
>;

export const getStaticProps = async () => {
  const postsByYear: PostsByYear = {};
  allPosts.forEach((post) => {
    const { slug, title, description, date, link, html } = post;
    const year = date?.split('-')[0];
    if (year) {
      postsByYear[year] = [
        ...(postsByYear[year] || []),
        {
          slug,
          title,
          date: date?.slice(5, 10),
          ...(link
            ? { link, description: html }
            : { description: description || '' }),
        },
      ];
    }
  });

  const years = Object.keys(postsByYear).reverse();
  const headings = years.map((year) => ({
    id: year,
    text: `${year}（${postsByYear[year].length} 篇）`,
    depth: 2,
  }));

  return { props: { years, headings, postsByYear } };
};

export default Blog;
