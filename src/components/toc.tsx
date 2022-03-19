import cls from 'clsx';
import { usePage } from '@/context/page';
import { useMenu } from '@/context/menu';

const Toc = () => {
  const { headings } = usePage();
  const [, { setFalse }] = useMenu();
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
            onClick={setFalse}
          >
            {heading.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Toc;
