import { FC } from 'react';
import Link from 'next/link';
import { socialLinks } from 'config';
import { Github, Moon, Rss, Sun } from '@/icons';
import { useTheme } from 'next-themes';
import { useCallback } from 'react';

const iconMap = {
  rss: Rss,
  github: Github,
};

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
    <div className={`flex justify-center space-x-4 ${className}`}>
      <div
        className="rounded-full p-2 lg:hover:bg-secondary"
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
              className="rounded-full p-2 hover:bg-secondary"
            >
              <Icon />
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
