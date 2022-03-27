import { GetServerSidePropsContext } from 'next';
import { Feed } from 'feed';
import { allPosts } from '@/data';
import { title, description, url, copyright } from '@/config';

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const feed = new Feed({
    title,
    description,
    copyright,
    id: url,
    link: url,
    language: 'zh-CN',
  });

  const posts = allPosts.slice(0, 20);

  posts.forEach((post) => {
    feed.addItem({
      id: `${url}${post.slug}`,
      link: `${url}${post.slug}`,
      title: post.title || '',
      description: post.description,
      content: post.html,
      date: new Date(post.date || ''),
    });
  });

  const { res } = ctx;

  if (res) {
    res.setHeader('Content-Type', 'application/xml');
    res.write(feed.rss2());
    res.end();
  }

  return {
    props: {},
  };
}

export default function Page() {
  return null;
}
