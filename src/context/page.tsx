import { useState, useContext, createContext, FC, useEffect } from 'react';
import { useRouter } from 'next/router';

export type Heading = {
  id: string;
  text: string;
  depth: number;
};

type State = {
  id?: string;
  title?: string;
  headings: Heading[];
};

type Value = State & {
  setPage: (value: State) => void;
};

const excludes = ['/', '/404', '/old-blog'];

export const PageContext = createContext<Value>({
  id: '',
  title: '',
  headings: [],
  setPage: () => {},
});

export const PageProvider: FC = ({ children }) => {
  const { pathname } = useRouter();
  const [page, setPage] = useState<State>({
    id: '',
    title: '',
    headings: [],
  });

  useEffect(() => {
    if (excludes.includes(pathname)) {
      setPage({
        headings: [],
      });
    }
  }, [pathname]);

  return (
    <PageContext.Provider value={{ ...page, setPage }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePage = () => useContext(PageContext);
