import cn from 'clsx';
import {
  useState,
  useEffect,
  useRef,
  useCallback,
  FC,
  TouchEvent,
  ReactNode,
  MutableRefObject,
} from 'react';
import { ChevronDown } from '@/icons';

type Props = {
  title?: string;
  visible?: boolean;
  extra?: ReactNode;
  className?: string;
  onClose?: () => void;
};

let startY = 0;
let hideHeight = 0;

const getDistance = (
  e: TouchEvent<HTMLDivElement>,
  ref: MutableRefObject<any>,
) => {
  const { clientY, target } = e.changedTouches[0];
  const distance = clientY - startY;
  // @ts-ignore
  const scrollTop = target?.className?.includes?.('drawer-header')
    ? 0
    : ref.current?.nextSibling?.scrollTop || 0;

  return scrollTop > 0 || distance < 0 ? 0 : distance;
};

const Drawer: FC<Props> = (props) => {
  const { title, visible, className, extra, children, onClose } = props;
  const [distance, setDistance] = useState(0);

  const topRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (visible) {
      document.body.classList.add('overflow-hidden', 'md:overflow-auto');
    } else {
      document.body.classList.remove('overflow-hidden', 'md:overflow-auto');
    }
  }, [visible]);

  const onTouchStart = useCallback((e: TouchEvent<HTMLDivElement>) => {
    startY = e.touches[0].clientY;
    // @ts-ignore
    hideHeight = (containerRef.current?.offsetHeight || 0) / 3;
  }, []);

  const onTouchMove = useCallback((e: TouchEvent<HTMLDivElement>) => {
    setDistance(getDistance(e, topRef));
  }, []);

  const onTouchEnd = useCallback((e: TouchEvent<HTMLDivElement>) => {
    if (getDistance(e, topRef) > hideHeight) {
      onClose?.();
    }
    setDistance(0);
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        onTouchStart={visible ? onTouchStart : undefined}
        onTouchMove={visible ? onTouchMove : undefined}
        onTouchEnd={visible ? onTouchEnd : undefined}
        style={
          visible && distance
            ? {
                transform: `translateY(${distance}px)`,
                transition: 'transform 0.3s',
              }
            : {}
        }
        className={cn(
          'fixed left-0 bottom-0 z-50 flex w-full flex-col rounded-tl-xl rounded-tr-xl transition-transform duration-300 bg-primary motion-reduce:transition-none',
          visible ? 'translate-y-0' : 'translate-y-full',
          className,
        )}
      >
        {visible && title && (
          <div className="drawer-header relative flex h-14 flex-shrink-0 items-center justify-center border-b px-4">
            <ChevronDown
              className="absolute left-4 w-6 rounded-full p-0.5 text-sm font-medium bg-secondary"
              onClick={onClose}
            />
            <div className="drawer-header font-medium">{title}</div>
            <div className="drawer-header absolute right-4">{extra}</div>
          </div>
        )}
        <div className="h-0" ref={topRef} />
        {children}
      </div>
      <div
        className={cn(
          'fixed top-0 left-0 right-0 bottom-0 z-40 bg-black bg-opacity-60 opacity-100 transition-opacity duration-300',
          visible ? 'visible' : 'invisible',
        )}
        onClick={onClose}
      />
    </>
  );
};

export default Drawer;
