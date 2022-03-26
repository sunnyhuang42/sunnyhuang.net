import cn from 'clsx';
import { useRef, useEffect, FC } from 'react';

// ref: https://github.com/shuding/nextra/blob/core/packages/nextra-theme-docs/src/collapse.tsx

type Props = {
  visible: boolean;
  className?: string;
};

const Collapse: FC<Props> = (props) => {
  const { children, visible, className } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<NodeJS.Timeout>();
  const initialRender = useRef(true);
  const initialState = useRef(visible);

  useEffect(() => {
    if (initialRender.current) return;

    if (animationRef.current) {
      clearTimeout(animationRef.current);
    }
    if (visible) {
      const container = containerRef.current;
      const inner = innerRef.current;
      if (container && inner) {
        const contentHeight = innerRef.current.clientHeight;
        container.style.maxHeight = contentHeight + 'px';
        container.classList.remove('duration-500');
        container.classList.add('duration-300');

        inner.style.opacity = '1';
        animationRef.current = setTimeout(() => {
          const container = containerRef.current;
          if (container) {
            container.style.removeProperty('max-height');
          }
        }, 300);
      }
    } else {
      const container = containerRef.current;
      const inner = innerRef.current;
      if (container && inner) {
        const contentHeight = innerRef.current.clientHeight;
        container.style.maxHeight = contentHeight + 'px';
        container.classList.remove('duration-300');
        container.classList.add('duration-500');

        inner.style.opacity = '0';
        setTimeout(() => {
          const container = containerRef.current;
          if (container) {
            container.style.maxHeight = '0px';
          }
        });
      }
    }
  }, [visible]);

  useEffect(() => {
    initialRender.current = false;
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        'transform-gpu overflow-hidden transition-all duration-300 ease-in-out motion-reduce:transition-none',
        className,
      )}
      style={{
        maxHeight: initialState.current ? undefined : 0,
      }}
    >
      <div
        ref={innerRef}
        className="transform-gpu overflow-hidden transition-opacity duration-500 ease-in-out motion-reduce:transition-none"
        style={{
          opacity: initialState.current ? 1 : 0,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapse;
