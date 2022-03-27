import { useEffect } from 'react';
import { allPosts, Post } from '@/data';
import { isUrl } from '@/utils';
import { usePage } from '@/context/page';
import { TOC, SEO } from '@/components';

const PostPage = ({ post }: { post: Post }) => {
  const { setPage } = usePage();
  const {
    slug,
    title,
    description,
    keywords,
    date,
    updated,
    words,
    minutes,
    link,
    headings,
    html,
  } = post;

  useEffect(() => {
    setPage({
      title,
      headings: headings,
    });
  }, [slug]);

  return (
    <article className="flex w-full justify-between">
      <main className="prose mx-auto max-w-2xl py-6 xl:px-6 2xl:px-0">
        <SEO title={title} description={description} keywords={keywords} />
        <h1 className="mt-4 md:mt-6">{title}</h1>
        <div className="my-8 flex flex-col justify-between space-y-1 text-sm text-secondary md:flex-row md:space-y-0">
          <div>
            {date !== updated && updated ? `${updated} 更新 • ` : ''}
            {date ? `${date} 发布` : ''}
          </div>
          <div>
            {words} 字 • {minutes} 分钟
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
        {isUrl(link) && (
          <div>
            具体请见：
            <a href={link} target="_blank" rel="noreferrer">
              {link}
            </a>
          </div>
        )}
      </main>
      <TOC />
    </article>
  );
};

const excludes = ['/', '/404'];
export const getStaticPaths = () => {
  const isProduction = process.env.NODE_ENV === 'production';
  const paths = allPosts
    .filter(
      ({ slug, hide }) => !(excludes.includes(slug) || (isProduction && hide)),
    )
    .map((post) => post.slug);

  return {
    paths,
    fallback: false,
  };
};

type Params = {
  params: {
    slug: string[];
  };
};

export const getStaticProps = async ({ params, ...r }: Params) => {
  const slug = `/${params?.slug?.join('/')}`;
  const post: Post = allPosts.find((post) => post.slug === slug) as Post;

  return {
    props: {
      post,
    },
  };
};

export default PostPage;
