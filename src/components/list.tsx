import cn from 'clsx';
import { Fragment } from 'react';
import Link from 'next/link';
import { Post } from '@/data';
import { ArrowRight, ArrowUpRight } from '@/icons';
import { isUrl } from '@/utils';

type Item = Partial<
  Pick<Post, 'slug' | 'title' | 'description' | 'date' | 'link'>
>;

type Props = {
  title: string;
  hasMore?: boolean;
  mode?: 'simple' | 'details';
  data: Item[];
};

const SimpleItem = ({ slug, title, date }: Item) => (
  <Link href={slug || ''}>
    <a
      key={title}
      className="mb-2 flex items-center justify-between rounded-md p-1.5 hover:bg-secondary md:mb-0 md:px-3"
    >
      <h3 className="flex-1">{title}</h3>
      <time className="pl-8 text-sm text-secondary">{date}</time>
    </a>
  </Link>
);

const DetailsItem = ({ slug, title, date, link, description }: Item) => {
  return (
    <div className="mb-10 border-b pb-10 last-of-type:border-0">
      <Link href={link || slug || ''}>
        <a {...(link ? { target: '_blank', rel: 'noreferrer' } : {})}>
          <div className="group">
            <div className="mb-2 flex text-xl font-medium">
              <time className="pr-3">{date}</time>
              <h3 className="flex-1 text-accent transition-colors group-hover:opacity-80">
                {title}
                {link && (
                  <ArrowUpRight className="ml-1 mb-1.5 inline-block w-4 text-secondary" />
                )}
              </h3>
            </div>
            {description && (
              <div
                className="prose max-w-full"
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
              />
            )}
          </div>
        </a>
      </Link>
    </div>
  );
};

export default function List({ title, mode, data, hasMore }: Props) {
  const isDetails = mode === 'details';
  return (
    <div className="mb-6">
      <div className={cn('mb-4 flex justify-between border-b py-2')}>
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
        <Fragment key={post.slug}>
          {isDetails ? <DetailsItem {...post} /> : <SimpleItem {...post} />}
        </Fragment>
      ))}
    </div>
  );
}
