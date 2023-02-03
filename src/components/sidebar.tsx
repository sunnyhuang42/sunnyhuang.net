import { useState, useEffect, useMemo, Fragment, FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { isClient, sidebar, openKeyMap, SideItem } from '@/config';
import { useDrawer, usePage } from '@/context';
import {
  ArrowRight,
  ArrowUpRight,
  Collapse as CollapseIcon,
  Expand as ExpandIcon,
} from '@/icons';
import { Drawer, Collapse } from '@/components';
import { isUrl, getCollapsedMap } from '@/utils';

type ExpandProps = {
  className?: string;
  isExpand: boolean;
  onClick?: () => void;
};

const Expand = ({ className, isExpand, onClick }: ExpandProps) => {
  const Icon = isExpand ? CollapseIcon : ExpandIcon;
  return <Icon className={className} onClick={onClick} />;
};

const File: FC<SideItem> = ({ id, text, link = '' }) => {
  const { asPath } = useRouter();
  const { menu } = useDrawer();
  const isExternal = isUrl(link);
  const selected = asPath.split('#')[0] === link;
  return (
    <div className="flex items-center">
      <div className="w-6 flex-shrink-0">
        <div className="ml-1 h-1 w-1 rounded-full bg-gray-500 bg-opacity-60" />
      </div>
      <Link href={link}>
        <a
          {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
          className={`block rounded-md text-sm transition-colors ${
            selected ? 'text-primary' : 'hover:text-accent'
          }`}
          onClick={() => {
            menu.close();
            window.sessionStorage.sidebarId = id;
          }}
        >
          <span
            className={`${selected && 'text-accent'}`}
            dangerouslySetInnerHTML={{ __html: text }}
          />
          {isExternal && (
            <ArrowUpRight className="ml-1 inline-block w-3.5 text-tertiary" />
          )}
        </a>
      </Link>
    </div>
  );
};

type FolderProps = SideItem & {
  openMap: Record<string, boolean>;
  onClick: (text: string) => void;
};

const Folder: FC<FolderProps> = (props) => {
  const { id, text, items, openMap, onClick } = props;
  const open = openMap[id] || false;
  return (
    <div>
      <div
        className="flex cursor-pointer items-center rounded-md text-sm"
        onClick={() => onClick(id)}
      >
        <div className="w-6 flex-shrink-0">
          <ArrowRight
            className={`h-3.5 w-3.5 transition-transform text-tertiary motion-reduce:transition-none ${
              open ? 'rotate-90' : ''
            }`}
          />
        </div>
        <span dangerouslySetInnerHTML={{ __html: text }} />
      </div>
      <Collapse visible={open}>
        <div className="ml-2 mt-4 flex flex-col space-y-4 border-l pl-2">
          {items?.map((i) => (
            <Fragment key={i.id}>
              {i?.items ? (
                <Folder {...i} openMap={openMap} onClick={onClick} />
              ) : (
                <File {...i} />
              )}
            </Fragment>
          ))}
        </div>
      </Collapse>
    </div>
  );
};

const Sidebar = () => {
  const { id } = usePage();
  const { menu } = useDrawer();
  const [openMap, setOpenMap] = useState<Record<string, boolean>>(() =>
    sidebar
      .filter((i) => i.collapsed)
      .reduce((acc, cur) => ({ ...acc, [cur.id]: true }), {}),
  );

  console.log(openMap);
  const isExpand = useMemo(
    () =>
      Object.values(openMap).filter((i) => i).length ===
      Object.keys(openKeyMap).length,
    [openMap],
  );

  const onToggle = (key: string) => {
    setOpenMap({
      ...openMap,
      [key]: !openMap[key],
    });
  };

  const onExpand = () => {
    setOpenMap(isExpand ? {} : openKeyMap);
  };

  useEffect(() => {
    if (isClient) {
      setOpenMap((map) => ({
        ...map,
        ...getCollapsedMap(id),
      }));
    }
  }, [id]);

  return (
    <Drawer
      title="站点目录"
      visible={menu.visible}
      onClose={menu.close}
      className="h-[calc(90vh-3.5rem)] w-full lg:sticky lg:top-14 lg:z-0 lg:h-[calc(100vh-3.5rem)] lg:w-72 lg:flex-shrink-0 lg:transform-none lg:rounded-none lg:border-r lg:transition-none"
      extra={<Expand isExpand={isExpand} onClick={onExpand} />}
    >
      <aside className="flex h-full w-full select-none flex-col space-y-4 overflow-y-scroll p-4 lg:pl-0">
        <div
          className="mb-1 hidden cursor-pointer justify-between pl-1 font-medium  lg:flex"
          onClick={onExpand}
        >
          <div className="text-sm">站点目录</div>
          <Expand className="w-5" isExpand={isExpand} />
        </div>
        {sidebar.map((i) => (
          <Fragment key={i.id}>
            {i.items ? (
              <Folder {...i} openMap={openMap} onClick={onToggle} />
            ) : (
              <File key={i.link} {...i} />
            )}
          </Fragment>
        ))}
      </aside>
    </Drawer>
  );
};

export default Sidebar;
