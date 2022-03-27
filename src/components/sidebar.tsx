import { useState, Fragment, FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { sidebar } from '@/config';
import { SideItem } from 'config/types';
import { useDrawer } from '@/context';
import { ArrowRight, ArrowUpRight } from '@/icons';
import { Drawer, Collapse } from '@/components';
import { isUrl } from '@/utils';

const File: FC<SideItem> = ({ text, link = '' }) => {
  const { asPath } = useRouter();
  const { menu } = useDrawer();
  const isExternal = isUrl(link);
  const selected = asPath.split('#')[0] === link;
  return (
    <Link href={link}>
      <a
        {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
        className={`mb-1 block rounded-md p-2 text-sm ${
          selected ? 'text-primary bg-secondary' : 'hover:bg-secondary'
        }`}
        onClick={menu.close}
      >
        <span
          className={`${selected && 'text-accent'}`}
          dangerouslySetInnerHTML={{ __html: text }}
        />
        {isExternal && (
          <ArrowUpRight className="ml-1 inline-block w-4 text-secondary" />
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
        className="mb-1 flex items-center rounded-md p-2 text-sm hover:bg-secondary"
        onClick={() => onClick(text)}
      >
        <ArrowRight
          className={`mr-1 h-4 w-4 text-secondary ${
            open ? 'rotate-90 transform' : ''
          }`}
        />
        <span dangerouslySetInnerHTML={{ __html: text }} />
      </div>
      <Collapse visible={open} className="pl-4">
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
      </Collapse>
    </>
  );
};

const Sidebar = () => {
  const { menu } = useDrawer();
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
    <Drawer
      title="站点目录"
      visible={menu.visible}
      onClose={menu.close}
      className="h-[calc(90vh-3.5rem)] w-full lg:sticky lg:top-14 lg:z-0 lg:h-[calc(100vh-3.5rem)] lg:w-72 lg:flex-shrink-0 lg:transform-none lg:rounded-none lg:border-r lg:transition-none"
    >
      <aside className="h-full w-full select-none overflow-y-scroll p-4 lg:pl-0">
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
      </aside>
    </Drawer>
  );
};

export default Sidebar;
