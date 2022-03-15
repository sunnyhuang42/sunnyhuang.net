import { useState } from 'react';
import { useRouter } from 'next/router';
import { Transition } from '@headlessui/react';
import { sidebar } from 'config';
import SubMenu from './sub';
import Item from './item';

const Sidebar = () => {
  const { asPath } = useRouter();
  const [openMap, setOpenMap] = useState<Record<string, boolean>>(() =>
    (asPath === '/'
      ? sidebar.filter((i) => i.collapsed)
      : sidebar.filter(
          (i) => i.items?.filter((ii) => ii.link === asPath)?.length,
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
        <div key={i.text} className="mb-1">
          {i.items ? (
            <>
              <SubMenu
                open={openMap[i.text]}
                text={i.text}
                onClick={onToggle}
              />
              <Transition
                show={openMap[i.text] || false}
                className="flex flex-col space-y-1"
              >
                {i.items.map((ii) => (
                  <Item
                    key={ii.link}
                    text={ii.text}
                    link={ii.link}
                    className="pl-4"
                  />
                ))}
              </Transition>
            </>
          ) : (
            <Item text={i.text} link={i.link} className="font-medium" />
          )}
        </div>
      ))}
    </>
  );
};

export default Sidebar;
