import type { NextPage } from 'next';
import { allPosts } from 'contentlayer/generated';

export async function getStaticProps() {
  return { props: { posts: allPosts } };
}

const Home: NextPage = (props) => {
  return <div>233</div>;
};

export default Home;
