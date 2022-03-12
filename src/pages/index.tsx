import type { NextPage, GetStaticProps } from 'next';
import { allPosts, Post } from 'contentlayer/generated';

export const getStaticProps: GetStaticProps = () => {
  const post = allPosts.find((post) => post.slug === '/');
  return {
    props: {
      post: post || { body: {} },
    },
  };
};

const Home: NextPage<{ post: Post }> = (props) => {
  const { post } = props;
  return (
    <div>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </div>
  );
};

export default Home;
