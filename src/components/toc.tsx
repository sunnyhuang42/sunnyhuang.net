import cls from 'clsx';
import { useMemo } from 'react';
import { usePage } from '@/context/page';
import { useMenu } from '@/context/menu';

const Toc = () => {
  const { title, headings } = usePage();
  const [, { setFalse }] = useMenu();
  const depth = useMemo(
    () => headings.map((i) => i.depth).sort((a, b) => a - b)?.[0] || 1,
    [headings],
  );

  return (
    <div>
      <div className="mb-4 font-medium">{title}</div>
      <ul className="text-sm mb-10">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{
              marginLeft: `${heading.depth - depth}rem`,
            }}
          >
            <a
              className={cls(
                'block hover:text-accent mb-2',
                heading.depth === depth ? 'font-medium' : '',
              )}
              href={`#${heading.id}`}
              onClick={setFalse}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Toc;
