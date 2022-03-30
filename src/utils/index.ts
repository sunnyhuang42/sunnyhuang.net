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
  const result: LinkItem[] = [];
  data.forEach((item, index) => {
    item.id = `${parent ? parent + '-' : ''}${index}`;
    if (item.items) {
      result.push(...getFlatSidebar(item.items, item.id));
    } else if (item.link) {
      const { id, text, link } = item;
      result.push({
        id,
        text,
        link,
      });
    }
  });

  return result;
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
