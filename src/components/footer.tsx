import { license, copyright } from 'config';
import Actions from './actions';

const Footer = () => (
  <footer className="flex flex-col justify-center items-center h-32 lg:h-24 border-t">
    <Actions className="mb-2 md:hidden" />
    <div className="text-sm text-center">
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
