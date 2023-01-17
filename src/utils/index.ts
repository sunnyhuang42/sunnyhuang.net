import { LinkItem, Sidebar, PostPrevNextMap } from '@/config';

export const isUrl = (str: any) => {
  let protocol;

  try {
    ({ protocol } = new URL(str));
  } catch (_) {
    return false;
  }

  return ['http:', 'https:'].includes(protocol);
};

export const getFlatSidebar = (data: Sidebar, parent?: string) => {
  let flatSidebar: LinkItem[] = [];
  let openKeyMap: Record<string, boolean> = {};
  data.forEach((item, index) => {
    item.id = `${parent ? parent + '-' : ''}${index}`;
    if (item.items) {
      openKeyMap[item.id] = true;
      const result = getFlatSidebar(item.items, item.id);
      flatSidebar.push(...result.flatSidebar);
      openKeyMap = { ...openKeyMap, ...result.openKeyMap };
    } else if (item.link) {
      const { id, text, link } = item;
      flatSidebar.push({
        id,
        text,
        link,
      });
    }
  });

  return {
    openKeyMap,
    flatSidebar,
  };
};

export const getPrevNextMap = (data: LinkItem[]) => {
  const result: PostPrevNextMap = {};
  data.forEach((item, index) => {
    const { id, link } = item;
    const prev = data[index - 1];
    const next = data[index + 1];
    result[link] = [
      ...(result?.[link] || []),
      {
        id,
        ...(prev && prev.link
          ? {
              prev: {
                text: prev.text,
                link: prev.link,
              },
            }
          : {}),
        ...(next && next.link
          ? {
              next: {
                text: next.text,
                link: next.link,
              },
            }
          : {}),
      },
    ];
  });

  return result;
};

export const getCollapsedMap = (id: string = '') => {
  const collapsedMap: Record<string, boolean> = {};
  const ids = id.split('-');
  ids.pop();
  let parent = '';
  ids.forEach((item: string) => {
    const current = `${parent ? `${parent}-` : ''}${item}`;
    collapsedMap[current] = true;
    parent = current;
  });

  return collapsedMap;
};

export const throttleDebounce = (fn: () => void, delay = 100) => {
  let timeout: NodeJS.Timeout;
  let called = false;

  return () => {
    if (timeout) {
      clearTimeout(timeout);
    }

    if (!called) {
      fn();
      called = true;
      setTimeout(() => {
        called = false;
      }, delay);
    } else {
      timeout = setTimeout(fn, delay);
    }
  };
};

// ref: https://stackoverflow.com/questions/54424729/ios-show-keyboard-on-input-focus/55425845#55425845
export function focusAndOpenKeyboard(
  el: HTMLInputElement | null,
  timeout = 100,
) {
  if (el) {
    // Align temp input element approx. to be where the input element is
    const __tempEl__ = document.createElement('input');
    __tempEl__.style.position = 'absolute';
    __tempEl__.style.top = el.offsetTop + 7 + 'px';
    __tempEl__.style.left = el.offsetLeft + 'px';
    __tempEl__.style.height = '0';
    __tempEl__.style.opacity = '0';
    // Put this temp element as a child of the page <body> and focus on it
    document.body.appendChild(__tempEl__);
    __tempEl__.focus();

    // The keyboard is open. Now do a delayed focus on the target element
    setTimeout(function () {
      el?.focus();
      el?.click();
      // Remove the temp element
      document.body.removeChild(__tempEl__);
    }, timeout);
  }
}
