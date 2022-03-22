import { useState, Fragment, FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Transition } from '@headlessui/react';
import { sidebar } from 'config';
import { SideItem } from 'config/types';
import { ArrowRightUp, ArrowRight } from '@/components/icon';
import { useMenu } from '@/context/menu';
import { isUrl } from '@/utils';

const File: FC<SideItem> = ({ text, link = '' }) => {
  const { asPath } = useRouter();
  const [, { setFalse }] = useMenu();
  const isExternal = isUrl(link);
  const selected = asPath.split('#')[0] === link;
  return (
    <Link href={link}>
      <a
        {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
        className={`block p-2 mb-1 text-sm rounded-md ${
          selected ? 'bg-secondary text-primary' : 'hover:bg-secondary'
        }`}
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

type FolderProps = SideItem & {
  openMap: Record<string, boolean>;
  onClick: (text: string) => void;
};

const Folder: FC<FolderProps> = (props) => {
  const { text, items, openMap, onClick } = props;
  const open = openMap[text] || false;
  return (
    <>
      <div
        className="flex items-center mb-1 p-2 text-sm rounded-md hover:bg-secondary"
        onClick={() => onClick(text)}
      >
        <ArrowRight
          className={`w-5 h-5 mr-1 text-secondary ${
            open ? 'transform rotate-90' : ''
          }`}
        />
        <span dangerouslySetInnerHTML={{ __html: text }} />
      </div>
      <Transition show={open} className="pl-4">
        {items?.map((i) => (
          <Fragment key={i.text}>
            {i?.items ? (
              <>
                <Folder
                  text={i.text}
                  items={i.items}
                  openMap={openMap}
                  onClick={onClick}
                />
              </>
            ) : (
              <File key={i.link} {...i} />
            )}
          </Fragment>
        ))}
      </Transition>
    </>
  );
};

const Sidebar = () => {
  const { asPath } = useRouter();
  const pathname = asPath.split('#')[0];
  const [openMap, setOpenMap] = useState<Record<string, boolean>>(() =>
    (pathname === '/'
      ? sidebar.filter((i) => i.collapsed)
      : sidebar.filter(
          (i) => i.items?.filter((ii) => ii.link === pathname)?.length,
        )
    ).reduce((acc, cur) => ({ ...acc, [cur.text]: true }), {}),
  );

  const onToggle = (key: string) => {
    setOpenMap({
      ...openMap,
      [key]: !openMap[key],
    });
  };

  return (
    <>
      {sidebar.map((i) => (
        <Fragment key={i.text}>
          {i.items ? (
            <>
              <Folder
                text={i.text}
                items={i.items}
                openMap={openMap}
                onClick={onToggle}
              />
            </>
          ) : (
            <div className="ml-2">
              <File key={i.link} {...i} />
            </div>
          )}
        </Fragment>
      ))}
    </>
  );
};

export default Sidebar;
