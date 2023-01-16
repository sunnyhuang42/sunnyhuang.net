import type { FC } from 'react';
import cn from 'clsx';
import Link from 'next/link';
import { PrevNextItem } from '@/config';
import { ArrowRight } from '@/icons';

type Props = {
  type?: 'prev' | 'next';
} & PrevNextItem['next'];

const PrevNextLink: FC<Props> = ({ type, link, text }) => {
  const isNext = type === 'next';
  return (
    <div className={cn('group min-w-0 flex-1 text-sm', isNext && 'text-right')}>
      <Link href={link}>
        <a className="inline-block">
          <div
            className={cn(
              'mb-1 flex items-center text-secondary',
              isNext && 'justify-end',
            )}
          >
            {!isNext && <ArrowRight className="mr-1 w-3 rotate-180" />}
            <span>{isNext ? '下' : '上'}一篇</span>
            {isNext && <ArrowRight className="ml-1 w-3" />}
          </div>
          <div className="flex items-center font-medium text-accent transition-colors line-clamp-2 group-hover:opacity-75">
            {text}
          </div>
        </a>
      </Link>
    </div>
  );
};

const PrevNext: FC<Omit<PrevNextItem, 'id'>> = ({ prev, next }) => {
  return (
    <div className="flex flex-row justify-between border-t py-6 md:py-10">
      {prev && <PrevNextLink type="prev" {...prev} />}
      {prev && next && <div className="w-2 flex-shrink-0 md:w-10" />}
      {next && <PrevNextLink type="next" {...next} />}
    </div>
  );
};

export default PrevNext;
