import { allPosts, Post } from '@/data';
import SEO from '@/components/seo';

export default function Custom404({ post }: { post: Post }) {
  return (
    <article className="prose mx-auto py-6">
      <SEO title={post.title} />
      <h1 className="mt-4 md:mt-6">{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </article>
  );
}

export const getStaticProps = () => {
  const post = allPosts.find((post) => post.slug === '/404');
  return {
    props: {
      post: post || { body: {} },
    },
  };
};
