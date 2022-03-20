import { useEffect } from 'react';
import { allPosts, Post } from '@/data';
import SEO from '@/components/seo';
import { isUrl } from '@/utils';
import { usePage } from '@/context/page';

const PostPage = (props: { post: Post & { readingTips: string } }) => {
  const { post } = props;
  const { slug, title, description, keywords, date, readingTips, body, link } =
    post;
  const { setPage } = usePage();

  useEffect(() => {
    setPage({
      title,
      headings: post.headings,
    });
  }, [slug]);

  return (
    <article className="prose">
      <SEO title={title} description={description} keywords={keywords} />
      <h1 className="mt-4 md:mt-6">{post.title}</h1>
      <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 justify-between text-sm text-secondary">
        <div>{date}</div>
        <div>{readingTips}</div>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: body.html,
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
    </article>
  );
};

const excludes = ['/', '/404'];
export const getStaticPaths = () => {
  const paths = allPosts
    .map((post) => post.slug)
    .filter((slug) => !excludes.includes(slug));
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

export const getStaticProps = async ({ params }: Params) => {
  const slug = `/${params?.slug?.join('/')}`;
  const { date, updated, words, ...rest }: Post = allPosts.find(
    (post) => post.slug === slug,
  ) as Post;

  const hasUpdate = updated && date !== updated;

  return {
    props: {
      post: {
        date: `${hasUpdate ? `${updated.slice(0, 10)} 更新 • ` : ''}${
          date ? `${date?.slice(0, 10)} 发布` : ''
        }`,
        readingTips: `${words} 字 • ${Math.ceil(words / 400)} 分钟`,
        ...rest,
      },
    },
  };
};

export default PostPage;
