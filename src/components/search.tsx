// ref: https://github.com/shuding/nextra/blob/main/packages/nextra-theme-docs/src/components/search.tsx

import React, {
  ReactElement,
  KeyboardEvent,
  Fragment,
  useCallback,
  useState,
  useEffect,
  useRef,
} from 'react';
import cn from 'clsx';
import { Transition } from '@headlessui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Spinner } from '@/icons';
import { SearchResult } from '@/types';

type SearchProps = {
  className?: string;
  overlayClassName?: string;
  value: string;
  onChange: (newValue: string) => void;
  onActive?: (active: boolean) => void;
  onFinish?: () => void;
  loading?: boolean;
  results: SearchResult[];
};

const INPUTS = ['input', 'select', 'button', 'textarea'];

function useMounted(): boolean {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}

export function Search({
  className,
  overlayClassName,
  value,
  onChange,
  onActive,
  onFinish,
  loading,
  results,
}: SearchProps): ReactElement {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(0);
  const router = useRouter();
  const input = useRef<HTMLInputElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setActive(0);
  }, [value]);

  useEffect(() => {
    onActive && onActive(show);
  }, [show]);

  useEffect(() => {
    const down = (e: globalThis.KeyboardEvent): void => {
      const tagName = document.activeElement?.tagName.toLowerCase();
      if (!input.current || !tagName || INPUTS.includes(tagName)) return;
      if (
        e.key === '/' ||
        (e.key === 'k' &&
          (e.metaKey /* for Mac */ || /* for non-Mac */ e.ctrlKey))
      ) {
        e.preventDefault();
        input.current.focus();
      } else if (e.key === 'Escape') {
        setShow(false);
        input.current.blur();
      }
    };

    window.addEventListener('keydown', down);
    return () => {
      window.removeEventListener('keydown', down);
    };
  }, []);

  const handleKeyDown = useCallback(
    function <T>(e: KeyboardEvent<T>) {
      switch (e.key) {
        case 'ArrowDown': {
          if (active + 1 < results.length) {
            const el = ulRef.current?.querySelector<HTMLAnchorElement>(
              `li:nth-of-type(${active + 2}) > a`,
            );
            if (el) {
              e.preventDefault();
              handleActive({ currentTarget: el });
              el.focus();
            }
          }
          break;
        }
        case 'ArrowUp': {
          if (active - 1 >= 0) {
            const el = ulRef.current?.querySelector<HTMLAnchorElement>(
              `li:nth-of-type(${active}) > a`,
            );
            if (el) {
              e.preventDefault();
              handleActive({ currentTarget: el });
              el.focus();
            }
          }
          break;
        }
        case 'Enter': {
          const result = results[active];
          if (result) {
            void router.push(result.route);
            finishSearch();
          }
          break;
        }
        case 'Escape': {
          setShow(false);
          input.current?.blur();
          break;
        }
      }
    },
    [active, results, router],
  );

  const finishSearch = () => {
    input.current?.blur();
    onChange('');
    setShow(false);
    onFinish?.();
  };

  const mounted = useMounted();
  const renderList = show && Boolean(value);

  const icon = (
    <Transition
      show={mounted && (!show || Boolean(value))}
      as={React.Fragment}
      enter="transition-opacity"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <kbd
        className={cn(
          'absolute right-1.5 my-1.5 select-none border',
          'h-5 rounded px-1.5 font-mono text-[10px] font-medium text-secondary bg-primary',
          'items-center gap-1 transition-opacity',
          value
            ? 'z-20 flex cursor-pointer hover:opacity-70'
            : 'pointer-events-none hidden sm:flex',
        )}
        title={value ? 'Clear' : undefined}
        onClick={() => {
          onChange('');
        }}
      >
        {value
          ? 'ESC'
          : mounted &&
            (navigator.userAgent.includes('Macintosh') ? (
              <>
                <span className="text-xs">⌘</span>K
              </>
            ) : (
              'CTRL K'
            ))}
      </kbd>
    </Transition>
  );

  const handleActive = useCallback(
    (e: { currentTarget: { dataset: DOMStringMap } }) => {
      const { index } = e.currentTarget.dataset;
      setActive(Number(index));
    },
    [],
  );

  return (
    <div className={cn('search relative md:w-48 lg:w-64', className)}>
      {renderList && (
        <div className="fixed inset-0 z-10" onClick={() => setShow(false)} />
      )}

      <div className="relative flex items-center text-primary">
        <input
          ref={input}
          spellCheck={false}
          className="block w-full appearance-none rounded-lg px-3 py-2 text-base leading-tight outline-accent transition-colors bg-secondary placeholder:text-secondary focus:bg-primary md:text-sm"
          value={value}
          onChange={(e) => {
            const { value } = e.target;
            onChange(value);
            setShow(Boolean(value));
          }}
          type="search"
          placeholder="搜索"
          onKeyDown={handleKeyDown}
        />
        {icon}
      </div>
      <Transition
        show={renderList}
        // Transition.Child is required here, otherwise popup will be still present in DOM after focus out
        as={Transition.Child}
        leave="transition-opacity duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <ul
          className={cn(
            'scrollbar',
            // Using bg-white as background-color when the browser didn't support backdrop-filter
            'border text-secondary bg-primary',
            'absolute top-full z-20 mt-2 overflow-auto overscroll-contain rounded-xl py-2.5 shadow-xl',
            'max-h-[min(calc(50vh-11rem-env(safe-area-inset-bottom)),400px)]',
            'md:max-h-[min(calc(100vh-5rem-env(safe-area-inset-bottom)),400px)]',
            'inset-x-0 md:left-auto',
            overlayClassName,
          )}
          ref={ulRef}
          style={{
            transition: 'max-height .2s ease', // don't work with tailwindcss
          }}
        >
          {loading ? (
            <span className="flex select-none justify-center gap-2 p-8 text-center text-sm text-secondary">
              <Spinner className="h-5 w-5 animate-spin" />
              加载中...
            </span>
          ) : results.length > 0 ? (
            results.map(({ route, prefix, children, id }, i) => (
              <Fragment key={id}>
                {prefix}
                <li
                  className={cn(
                    'mx-2.5 break-words rounded-md text-primary',
                    i === active ? 'active bg-accent' : '',
                  )}
                >
                  <Link passHref href={route}>
                    <a
                      className="block scroll-m-12 px-2.5 py-2"
                      href={route}
                      data-index={i}
                      onFocus={handleActive}
                      onMouseMove={handleActive}
                      onClick={finishSearch}
                      onKeyDown={handleKeyDown}
                    >
                      {children}
                    </a>
                  </Link>
                </li>
              </Fragment>
            ))
          ) : (
            <span className="block select-none p-8 text-center text-sm text-secondary">
              未找到内容
            </span>
          )}
        </ul>
      </Transition>
    </div>
  );
}
