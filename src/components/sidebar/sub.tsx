import { FC } from 'react';
import { ArrowUp } from '@/components/icon';

type Props = {
  text: string;
  open: boolean;
  onClick: (text: string) => void;
};

const SubMenu: FC<Props> = ({ open, text, onClick }) => {
  return (
    <div
      className="flex items-center justify-between mb-1 p-2 text-sm font-medium rounded-md hover:bg-secondary"
      onClick={() => onClick(text)}
    >
      <span dangerouslySetInnerHTML={{ __html: text }} />
      <ArrowUp
        className={`w-5 h-5 mr-2 text-secondary ${
          open ? 'transform rotate-180' : ''
        }`}
      />
    </div>
  );
};

export default SubMenu;
