import cn from 'clsx';
import { useEffect, FC, ReactNode } from 'react';
import { ChevronDown } from '@/icons';

type Props = {
  title?: string;
  visible?: boolean;
  placement?: 'top' | 'bottom';
  extra?: ReactNode;
  className?: string;
  onClose?: () => void;
};

const Drawer: FC<Props> = (props) => {
  const {
    placement = 'bottom',
    title,
    visible,
    className,
    extra,
    children,
    onClose,
  } = props;

  useEffect(() => {
    if (visible) {
      document.body.classList.add('overflow-hidden', 'md:overflow-auto');
    } else {
      document.body.classList.remove('overflow-hidden', 'md:overflow-auto');
    }
  }, [visible]);

  return (
    <>
      <div
        className={cn(
          'fixed left-0 z-50 flex w-full flex-col rounded-tl-xl rounded-tr-xl transition-transform duration-300 bg-primary motion-reduce:transition-none',
          {
            ['top-0']: placement === 'top',
            ['bottom-0']: placement === 'bottom',
            ['translate-y-0']: visible,
            ['-translate-y-full']: !visible && placement === 'top',
            ['translate-y-full']: !visible && placement === 'bottom',
          },
          className,
        )}
      >
        {visible && title && (
          <div className="relative flex h-14 flex-shrink-0 items-center justify-center border-b px-4">
            <ChevronDown
              className="absolute left-4 w-6 rounded-full p-0.5 text-sm font-medium bg-secondary"
              onClick={onClose}
            />
            <div className="font-medium">{title}</div>
            <div className="absolute right-4">{extra}</div>
          </div>
        )}
        {children}
      </div>
      {visible && (
        <div
          className={cn(
            'fixed top-0 left-0 right-0 bottom-0 z-40 bg-black bg-opacity-60 opacity-100 transition-opacity duration-300',
          )}
          onClick={onClose}
        />
      )}
    </>
  );
};

export default Drawer;
