import cn from 'clsx';
import { Heart } from '@/icons';
import { useModal } from '@/hooks';

const Sponsor = ({ className }: { className?: string }) => {
  const { visible, open, close, toggle } = useModal();
  return (
    <div className={cn('relative', className)}>
      <button
        className="mx-auto block flex h-12 w-44 items-center justify-center rounded-xl bg-red-500 text-center font-semibold tracking-widest text-white dark:opacity-80"
        onTouchStart={() => toggle()}
        onMouseEnter={open}
        onMouseLeave={close}
      >
        <Heart className="mr-2" />
        <div>赠酸奶</div>
      </button>
      <div
        className={cn(
          'absolute left-[50%] bottom-[130%] -ml-[5.5rem] flex h-52 w-44 flex-col items-center justify-center rounded-md border shadow-md transition-all duration-300 ease-in-out bg-primary',
          {
            'z--10 opacity-0': !visible,
            'opacity-100': visible,
          },
          visible ? 'visible' : 'invisible',
          // visible ? 'block' : 'hidden',
        )}
      >
        <img
          className="m-0 w-32"
          src="https://cdn.chunschen.com/u/1648571434.jpg"
          alt="award"
        />
        <div className="mt-3 text-sm font-normal text-primary">
          微信扫一扫赞赏作者
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
