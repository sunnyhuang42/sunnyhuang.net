import cn from 'clsx';
import { useEffect, useMemo } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import {
  isClient,
  ad,
  sponsor,
  editLink,
  postPrevNextMap,
  PrevNextItem,
} from '@/config';
import { allPosts, Post } from '@/data';
import { Edit } from '@/icons';
import { isUrl } from '@/utils';
import { usePage } from '@/context/page';
import { SEO } from '@/components';
import Sponsor from '@/components/sponsor';
import Changelog from '@/components/changelog';
import PrevNext from '@/components/prev-next';

const Comment = dynamic(() => import('@/components/comment'), { ssr: false });

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
    image,
    date,
    updated,
    words,
    minutes,
    link,
    headings,
    html,
    changelog,
    sourceFilePath,
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
    <article className="mx-auto max-w-2xl pt-6 xl:px-6 2xl:px-0">
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        image={image}
      />
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
      <div id="prose" className="prose">
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
      {ad?.post && (
        <div
          className="mt-6"
          dangerouslySetInnerHTML={{
            __html: ad.post,
          }}
        />
      )}
      {sponsor && <Sponsor {...sponsor} className="my-10 md:my-12" />}
      {editLink?.text && (
        <Link
          href={`https://github.com/${editLink.repo}/edit/master/docs/${sourceFilePath}`}
        >
          <a
            className="my-8 flex text-sm font-medium text-accent"
            target="_blank"
            rel="noreferrer"
          >
            <Edit className="mr-2" />
            {editLink.text}
          </a>
        </Link>
      )}
      {(prev || next) && <PrevNext prev={prev} next={next} />}
      <Comment />
    </article>
  );
};

const excludes = ['/', '/404'];
export const getStaticPaths = () => {
  const paths = allPosts
    .filter(({ slug, hide }) => !excludes.includes(slug))
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
