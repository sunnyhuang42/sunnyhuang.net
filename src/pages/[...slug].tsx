import { allPosts, Post } from '@/data';
import SEO from '@/components/seo';

const PostPage = (props: { post: Post & { readingTips: string } }) => {
  const { post } = props;

  return (
    <article className="prose">
      <SEO
        title={post?.title}
        description={post?.description}
        keywords={post?.keywords}
      />
      <h1 className="mt-4 md:mt-6">{post.title}</h1>
      <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 justify-between text-sm text-secondary">
        <div>{post.date}</div>
        <div>{post.readingTips}</div>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: post.body.html.replace('footnotes', ''),
        }}
      />
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
  const {
    date,
    updated,
    readingTime: { minutes, words },
    ...rest
  }: Post = allPosts.find((post) => post.slug === slug) as Post;

  const hasUpdate = updated && date !== updated;

  return {
    props: {
      post: {
        date: `${hasUpdate ? `${updated.slice(0, 10)} 更新 • ` : ''}${
          date ? `${date?.slice(0, 10)} 发布` : ''
        }`,
        readingTips: `${words} 字 • ${Math.ceil(minutes)} 分钟`,
        ...rest,
      },
    },
  };
};

export default PostPage;
