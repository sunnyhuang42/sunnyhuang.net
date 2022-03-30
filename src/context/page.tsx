import { useState, useContext, createContext, FC } from 'react';

type Heading = {
  id: string;
  text: string;
  depth: number;
};

type State = {
  id: string;
  title?: string;
  headings: Heading[];
};

type Value = State & {
  setPage: (value: State) => void;
};

export const PageContext = createContext<Value>({
  id: '',
  title: '',
  headings: [],
  setPage: () => {},
});

export const PageProvider: FC = ({ children }) => {
  const [page, setPage] = useState<State>({
    id: '',
    title: '',
    headings: [],
  });

  return (
    <PageContext.Provider value={{ ...page, setPage }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePage = () => useContext(PageContext);
