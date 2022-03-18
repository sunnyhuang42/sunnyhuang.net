import cls from 'clsx';
import { Tab } from '@headlessui/react';
import { useRouter } from 'next/router';
import { useMenu } from '@/context/menu';
import Sidebar from './sidebar';
import Toc from './toc';

const Aside = () => {
  const [visible] = useMenu();
  const { pathname } = useRouter();
  const isPost = pathname === '/[...slug]';

  return (
    <>
      <div className="flex-shrink-0 w-72 pt-6 hidden lg:block lg:border-r">
        <div
          className={cls(
            'sticky top-12 lg:top-14 px-4 lg:pr-8 h-main overflow-y-scroll',
            visible && 'lg:top-0',
          )}
        >
          <Sidebar />
        </div>
      </div>
      <div
        className={cls(
          'flex-shrink-0 order-2 w-72 h-full hidden bg-primary',
          visible ? 'w-80 lg:block lg:fixed lg:top-14 lg:right-0 lg:z-50' : '',
          'xl:block xl:pl-8 xl:border-l',
        )}
      >
        {isPost && <Toc />}
      </div>
      <div
        className={cls(
          'fixed top-12 left-0 z-50 h-screen w-screen bg-primary lg:hidden',
          visible ? 'block' : 'hidden',
        )}
      >
        <Tab.Group as="div" className="h-full overflow-y-scroll">
          <Tab.List className="sticky top-0 flex justify-center bg-primary py-2 space-x-6 text-sm">
            {[...(isPost ? ['文章目录'] : []), '站点目录'].map((text) => (
              <Tab
                key={text}
                className={({ selected }) =>
                  `pb-1 mb-2 border-b border-b-2 ${
                    selected
                      ? 'text-accent border-b-accent'
                      : 'border-transparent'
                  }`
                }
              >
                {text}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="px-2">
            {isPost && (
              <Tab.Panel>
                <Toc />
              </Tab.Panel>
            )}
            <Tab.Panel>
              <Sidebar />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
};

export default Aside;
