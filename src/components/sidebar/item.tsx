import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ArrowRightUp } from '@/components/icon';
import { isUrl } from '@/utils';
import { useMenu } from '@/context/menu';

type Props = {
  text: string;
  link?: string;
  className?: string;
};

const Item: FC<Props> = ({ className, text, link = '' }) => {
  const { asPath } = useRouter();
  const [, { setFalse }] = useMenu();
  const isExternal = isUrl(link);
  const selected = asPath === link;
  return (
    <Link href={link}>
      <a
        {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
        className={`block p-2 text-sm rounded-md ${
          selected ? 'bg-secondary text-primary' : 'hover:bg-secondary'
        } ${className}`}
        onClick={setFalse}
      >
        <span
          className={`${selected && 'text-accent'}`}
          dangerouslySetInnerHTML={{ __html: text }}
        />
        {isExternal && (
          <ArrowRightUp className="inline-block ml-1 text-secondary" />
        )}
      </a>
    </Link>
  );
};

export default Item;
