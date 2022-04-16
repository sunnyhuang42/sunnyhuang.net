import cn from 'clsx';
import { useEffect, useMemo } from 'react';
import { isClient, ad, sponsor, postPrevNextMap, PrevNextItem } from '@/config';
import { allPosts, Post } from '@/data';
import { isUrl } from '@/utils';
import { usePage } from '@/context/page';
import { SEO } from '@/components';
import TOC from '@/components/toc';
import Sponsor from '@/components/sponsor';
import Changelog from '@/components/changelog';
import PrevNext from '@/components/prev-next';

const PostPage = ({
  post,
  pages = [],
}: {
  post: Post;
  pages: PrevNextItem[];
}) => {
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
    changelog,
  } = post;
  const hasUpdated = date !== updated && updated;
  const { setPage } = usePage();

  const { id, prev, next } = useMemo(
    () =>
      isClient
        ? pages.find((item) => item.id === window.sessionStorage.sidebarId) ||
          pages?.[0] ||
          {}
        : { id: '', prev: undefined, next: undefined },
    [pages],
  );

  useEffect(() => {
    setPage({
      id,
      title,
      headings: headings,
    });
  }, [id, slug]);

  return (
      <article className="mx-auto max-w-prose pt-6 xl:px-6 2xl:px-0">
        <SEO title={title} description={description} keywords={keywords} />
        <h1 className="mt-4 text-4xl font-extrabold md:mt-6">{title}</h1>
        <div
            className={cn(
                'my-8 flex  justify-between space-y-1 text-secondary',
                hasUpdated && 'flex-col space-y-1',
                'md:flex-row md:space-y-0',
            )}
        >
          <div>
            {hasUpdated ? `${updated} 更新 • ` : ''}
            {date ? `${date} 发布` : ''}
          </div>
          <div>
            {words} 字 • {minutes} 分钟
          </div>
        </div>
        <div className="prose">
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
          {changelog && <Changelog html={changelog} />}
        </div>
        {ad?.postBottom && (
            <div
                dangerouslySetInnerHTML={{
                  __html: ad.postBottom,
                }}
            />
        )}
        {sponsor && <Sponsor {...sponsor} className="my-10 md:my-16" />}
        {(prev || next) && <PrevNext prev={prev} next={next} />}
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
      pages: postPrevNextMap[slug] || [],
    },
  };
};

export default PostPage;
