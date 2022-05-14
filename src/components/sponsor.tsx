import cn from 'clsx';
import { Config } from '@/config';
import { Heart } from '@/icons';
import { useModal } from '@/hooks';

const Sponsor = (props: { className?: string } & Config['sponsor']) => {
  const { className, text, img, tips } = props;
  const { visible, open, close, toggle } = useModal();
  return (
    <div className={cn('relative', className)}>
      <button
        className="mx-auto block flex h-10 w-32 items-center justify-center rounded-xl bg-orange-500 text-center font-semibold tracking-widest text-white dark:opacity-80"
        onTouchStart={() => toggle()}
        onMouseEnter={open}
        onMouseLeave={close}
      >
        <Heart className="mr-2" />
        <div>{text}</div>
      </button>
      <div
        className={cn(
          'absolute left-[50%] bottom-[130%] -ml-[5.5rem] flex h-52 w-44 flex-col items-center justify-center rounded-md border shadow-md transition-all duration-300 ease-in-out bg-primary',
          {
            'z--10 opacity-0': !visible,
            'opacity-100': visible,
          },
          visible ? 'visible' : 'invisible',
        )}
      >
        <img className="m-0 w-32" src={img} alt="award" />
        <div className="mt-3 text-sm font-normal text-primary">{tips}</div>
      </div>
    </div>
  );
};

export default Sponsor;
