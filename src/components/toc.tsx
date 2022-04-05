import cls from 'clsx';
import { useMemo, useEffect } from 'react';
import { useDrawer, usePage } from '@/context';
import { Drawer } from '@/components';
import { throttleDebounce } from '@/utils';

const getAnchorTop = (anchor: HTMLAnchorElement): number =>
  anchor.parentElement!.offsetTop - 100;

let prevActiveAnchor: HTMLAnchorElement | null;

const activateAnchor = (hash: string | null) => {
  if (prevActiveAnchor) {
    prevActiveAnchor.classList.remove('text-accent');
  }

  const activeAnchor = document.querySelector(
    `.toc a[href="${hash}"]`,
  ) as HTMLAnchorElement;

  prevActiveAnchor = activeAnchor;

  if (activeAnchor) {
    activeAnchor.classList.add('text-accent');
  }
};

const setActiveAnchor = () => {
  const anchors = Array.from(
    document.querySelectorAll(
      '.prose .anchor',
    ) as NodeListOf<HTMLAnchorElement>,
  ).filter((i) => i.hash);

  const { scrollY, innerHeight } = window;

  if (anchors.length && scrollY + innerHeight === document.body.offsetHeight) {
    activateAnchor(anchors[anchors.length - 1].hash);
    return;
  }

  for (let i = 0; i < anchors.length; i++) {
    let hash = null;
    let isActive = false;
    const anchor = anchors[i];
    const nextAnchor = anchors[i + 1];

    if (i === 0 && scrollY === 0) {
      isActive = true;
    }

    if (!nextAnchor || scrollY < getAnchorTop(nextAnchor)) {
      isActive = true;
      ({ hash } = anchor);
    }

    if (isActive) {
      activateAnchor(hash);
      return;
    }
  }
};

const Toc = () => {
  const { toc } = useDrawer();
  const { id, title, headings } = usePage();
  const depth = useMemo(
    () => headings.map((i) => i.depth).sort((a, b) => a - b)?.[0] || 1,
    [headings],
  );

  useEffect(() => {
    activateAnchor(window.location.hash);
  }, [id]);

  useEffect(() => {
    requestAnimationFrame(setActiveAnchor);

    const onScroll = throttleDebounce(setActiveAnchor, 100);

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <Drawer
      title="本文目录"
      visible={toc.visible}
      onClose={toc.close}
      className="right-0 max-h-[calc(90vh-3.5rem)] min-h-[50vh] w-full xl:sticky xl:top-14 xl:z-0 xl:h-full xl:max-h-full xl:w-72 xl:flex-shrink-0 xl:transform-none xl:transition-none"
    >
      <div className="h-full w-full overflow-y-scroll p-4 lg:pr-0">
        <div className="mb-4 hidden font-medium md:block">{title}</div>
        <ul className="toc text-sm">
          {headings.map((heading) => (
            <li
              key={heading.id}
              style={{
                marginLeft: `${heading.depth - depth}rem`,
              }}
            >
              <a
                className={cls(
                  'mb-2 block transition-colors hover:text-accent',
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
