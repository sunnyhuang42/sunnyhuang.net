import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { allPosts, Post } from 'contentlayer/generated';

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
      <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </article>
  );
};

export default PostPage;
