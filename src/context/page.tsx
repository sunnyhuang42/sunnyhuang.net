import { useState, useContext, createContext, FC } from 'react';

type Heading = {
  id: string;
  text: string;
  depth: number;
};

type State = {
  headings: Heading[];
};

type Value = State & {
  setPage: (value: State) => void;
};

export const PageContext = createContext<Value>({
  headings: [],
  setPage: () => {},
});

export const MenuProvider: FC = ({ children }) => {
  const [page, setPage] = useState<State>({
    headings: [],
  });

  return (
    <PageContext.Provider value={{ ...page, setPage }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePage = () => useContext(PageContext);
