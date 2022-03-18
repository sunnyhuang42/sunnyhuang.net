import Link from 'next/link';
import { Post } from 'contentlayer/generated';
import { ArrowRight } from '@/components/icon';

type Props = {
  title: string;
  hasMore?: boolean;
  data: Pick<Post, 'slug' | 'title' | 'date'>[];
};

export default function List({ title, data, hasMore }: Props) {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-4 py-2 border-b">
        <h2 className="text-2xl font-bold">{title}</h2>
        {hasMore && (
          <Link href="/blog">
            <a className="text-sm hover:text-accent">
              <div className="flex items-center">
                查看更多
                <ArrowRight className="inline-block ml-1" />
              </div>
            </a>
          </Link>
        )}
      </div>
      {data.map((post) => (
        <Link key={post.slug} href={post.slug}>
          <a
            key={post.title}
            className="flex justify-between items-center mb-2 md:mb-0 p-1.5 md:px-3 rounded-md hover:bg-secondary"
          >
            <h3 className="flex-1">{post.title}</h3>
            <time className="pl-8 text-secondary text-sm">{post.date}</time>
          </a>
        </Link>
      ))}
    </div>
  );
}
