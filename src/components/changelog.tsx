import cn from 'clsx';
import { useEffect } from 'react';
import { Collapse } from '@/components/index';
import { useModal } from '@/hooks';

const Changelog = ({ html }: { html: string }) => {
  const { visible, close, toggle } = useModal();

  useEffect(close, [html]);

  return (
    <>
      <h2
        className="flex cursor-pointer items-center"
        id="changelog"
        onClick={() => toggle()}
      >
        <span
          className={cn(
            'mr-2 inline-block text-base transition-transform motion-reduce:transition-none',
            visible && 'rotate-90',
          )}
        >
          ▶
        </span>
        CHANGELOG
      </h2>
      <Collapse visible={visible}>
        <div
          className="prose"
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
      </Collapse>
    </>
  );
};

export default Changelog;
