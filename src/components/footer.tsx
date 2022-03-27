import { license, copyright } from '@/config';
import { Social } from '@/components';

const Footer = () => (
  <footer className="flex h-32 flex-col items-center justify-center border-t lg:h-24">
    <Social className="mb-2 md:hidden" />
    <div className="text-center text-sm">
      {`遵循 `}
      <a
        target="_blank"
        rel="noreferrer"
        href={license.link}
        className="hover:text-accent"
      >
        {license.text}
      </a>
      <div className="mt-1">{copyright}</div>
    </div>
  </footer>
);

export default Footer;
