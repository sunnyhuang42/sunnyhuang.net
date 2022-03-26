import cls from 'clsx';
import { useMemo } from 'react';
import { useDrawer, usePage } from '@/context';
import { Drawer } from '@/components';

const Toc = () => {
  const { toc } = useDrawer();
  const { title, headings } = usePage();
  const depth = useMemo(
    () => headings.map((i) => i.depth).sort((a, b) => a - b)?.[0] || 1,
    [headings],
  );

  return (
    <Drawer
      title="本文目录"
      visible={toc.visible}
      onClose={toc.close}
      className="right-0 max-h-[calc(90vh-3.5rem)] min-h-[50vh] w-full xl:sticky xl:top-14 xl:z-0 xl:h-full xl:max-h-full xl:w-72 xl:flex-shrink-0 xl:transform-none xl:transition-none"
    >
      <div className="h-full w-full overflow-y-scroll p-4 lg:pr-0">
        <div className="mb-4 hidden font-medium md:block">{title}</div>
        <ul className="text-sm">
          {headings.map((heading) => (
            <li
              key={heading.id}
              style={{
                marginLeft: `${heading.depth - depth}rem`,
              }}
            >
              <a
                className={cls(
                  'mb-2 block hover:text-accent',
                  heading.depth === depth ? 'font-medium' : '',
                )}
                href={`#${heading.id}`}
                onClick={toc.close}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Drawer>
  );
};

export default Toc;
