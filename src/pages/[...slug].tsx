import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { allPosts, Post } from 'contentlayer/generated';
import SEO from '@/components/seo';

const excludes = ['/'];

export const getStaticPaths: GetStaticPaths = () => {
  const paths = allPosts
    .map((post) => post.slug)
    .filter((slug) => !excludes.includes(slug));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{}, { slug: string[] }> = ({
  params,
}) => {
  const post = allPosts.find(
    (post) => post.slug === `/${params?.slug?.join('/')}`,
  );
  return {
    props: {
      post,
    },
  };
};

const PostPage: NextPage<{ post: Post }> = (props) => {
  const { post } = props;

  return (
    <article className="prose">
      <SEO
        title={post.title}
        description={post.description}
        keywords={post.keywords}
      />
      <h1>{post.title}</h1>
      <div>创建时间：{post.date}</div>
      <div>更新时间：{post.updated}</div>
      <div>阅读时间{post.readingTime.text}</div>
      <div>文章字数{post.readingTime.words}</div>
      <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </article>
  );
};

export default PostPage;
