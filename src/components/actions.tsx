import { FC } from 'react';
import Link from 'next/link';
import { socialLinks } from 'config';
import { Github, Moon, Rss, Sun } from '@/components/icon';
import { useTheme } from 'next-themes';
import { useCallback } from 'react';

const iconMap = {
  rss: Rss,
  github: Github,
};

const Actions: FC<{ className?: string }> = ({ className }) => {
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
    <div className={`flex justify-center space-x-1 ${className}`}>
      <div
        className="p-2 rounded-full lg:hover:bg-secondary"
        onClick={changeTheme}
      >
        {isDark ? <Sun /> : <Moon />}
      </div>
      {socialLinks.map(({ icon, link }) => {
        const Icon = iconMap[icon];
        return (
          <Link key={link} href={link}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-secondary"
            >
              <Icon />
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default Actions;
