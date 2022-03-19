import cls from 'clsx';
import { usePage } from '@/context/page';

const Toc = () => {
  const { headings } = usePage();
  return (
    <ul className="text-sm">
      {headings.map((heading) => (
        <li
          key={heading.id}
          style={{
            marginLeft: `${heading.depth - 2}rem`,
          }}
        >
          <a
            className={cls(
              'block hover:text-accent mb-2',
              heading.depth === 2 ? 'font-medium' : '',
            )}
            href={`#${heading.id}`}
          >
            {heading.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Toc;
