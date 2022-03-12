import { license, copyright } from 'config';
import Actions from './actions';

const Footer = () => (
  <footer className="py-4 md:py-6 border-t">
    <div className="max-w-6xl mx-auto text-center">
      <Actions className="mb-2 md:hidden" />
      <div className="text-sm">
        {`遵循 `}
        <a className="hover:text-accent" target="_blank" href={license.link}>
          {license.text}
        </a>
        <div className="mt-1">{copyright}</div>
      </div>
    </div>
  </footer>
);

export default Footer;
