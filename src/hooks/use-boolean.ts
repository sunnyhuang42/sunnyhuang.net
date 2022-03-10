import { useState, useMemo } from 'react';

type Action = {
  toggle: (value?: boolean) => void;
  setTrue: () => void;
  setFalse: () => void;
};

function useBoolean(defaultValue?: boolean): [boolean, Action] {
  const [state, setState] = useState(!!defaultValue);

  const actions = useMemo(() => {
    const toggle = (value?: boolean) => {
      setState((s) => (typeof value === 'undefined' ? !s : value));
    };

    const setTrue = () => {
      setState(true);
    };

    const setFalse = () => {
      setState(false);
    };

    return {
      toggle,
      setTrue,
      setFalse,
    };
  }, [defaultValue]);

  return [state, actions];
}

export default useBoolean;
