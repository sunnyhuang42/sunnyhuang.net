import { useContext, createContext, FC } from 'react';
import { useModal, UseModal } from '@/hooks';

type Value = {
  toc: UseModal;
  menu: UseModal;
};

const itemValues = {
  visible: false,
  open: () => {},
  close: () => {},
  toggle: () => {},
};

export const DrawerContext = createContext<Value>({
  toc: itemValues,
  menu: itemValues,
});

export const DrawerProvider: FC = ({ children }) => {
  const toc = useModal();
  const menu = useModal();
  return (
    <DrawerContext.Provider value={{ toc, menu }}>
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawer = () => useContext(DrawerContext);
