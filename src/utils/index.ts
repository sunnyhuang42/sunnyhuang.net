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
