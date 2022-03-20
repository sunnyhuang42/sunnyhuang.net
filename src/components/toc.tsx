import cls from 'clsx';
import { usePage } from '@/context/page';
import { useMenu } from '@/context/menu';

const Toc = () => {
  const { title, headings } = usePage();
  const [, { setFalse }] = useMenu();
  return (
    <div>
      <div className="mb-4 font-medium">{title}</div>
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
    </div>
  );
};

export default Toc;
