import { useCallback, FC } from 'react';
import Link from 'next/link';
import { social } from '@/config';
import { Github, Moon, Rss, Sun } from '@/icons';
import { useTheme } from 'next-themes';

const Social: FC<{ className?: string }> = ({ className }) => {
  const { resolvedTheme, systemTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  const changeTheme = useCallback(() => {
    if (resolvedTheme === systemTheme) {
      setTheme(isDark ? 'light' : 'dark');
    } else {
      setTheme('system');
    }
  }, [resolvedTheme, systemTheme]);

  return (
    <div
      className={`flex justify-center space-x-4 text-secondary ${className}`}
    >
      <div
        className="rounded-full p-2 lg:hover:text-primary"
        onClick={changeTheme}
      >
        {isDark ? <Sun /> : <Moon />}
      </div>
      {social.github && (
        <a
          className="rounded-full p-2 lg:hover:text-primary"
          href={social.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </a>
      )}
      <Link href="/feed">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full p-2 hover:text-primary"
        >
          <Rss />
        </a>
      </Link>
    </div>
  );
};

export default Social;
