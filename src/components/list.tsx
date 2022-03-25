import Link from 'next/link';
import { Post } from '@/data';
import { ArrowRight } from '@/icons';

type Props = {
  title: string;
  hasMore?: boolean;
  data: Pick<Post, 'slug' | 'title' | 'date'>[];
};

export default function List({ title, data, hasMore }: Props) {
  return (
    <div className="mb-6">
      <div className="mb-4 flex justify-between border-b py-2">
        <h2 className="text-2xl font-bold">{title}</h2>
        {hasMore && (
          <Link href="/blog">
            <a className="text-sm hover:text-accent">
              <div className="flex items-center">
                查看更多
                <ArrowRight className="ml-1 inline-block w-4" />
              </div>
            </a>
          </Link>
        )}
      </div>
      {data.map((post) => (
        <Link key={post.slug} href={post.slug}>
          <a
            key={post.title}
            className="mb-2 flex items-center justify-between rounded-md p-1.5 hover:bg-secondary md:mb-0 md:px-3"
          >
            <h3 className="flex-1">{post.title}</h3>
            <time className="pl-8 text-sm text-secondary">{post.date}</time>
          </a>
        </Link>
      ))}
    </div>
  );
}
