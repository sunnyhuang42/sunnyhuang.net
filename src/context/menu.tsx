import { useContext, createContext, FC } from 'react';
import useBoolean, { Action } from '@/hooks/use-boolean';

type Value = [boolean, Action];

export const MenuContext = createContext<Value>([
  false,
  {
    setFalse: () => {},
    setTrue: () => {},
    toggle: () => {},
  },
]);

export const MenuProvider: FC = ({ children }) => {
  const [state, actions] = useBoolean();
  return (
    <MenuContext.Provider value={[state, actions]}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
