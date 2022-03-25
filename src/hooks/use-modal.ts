import { useState } from 'react';

export type UseModal = {
  visible: boolean;
  toggle: (value?: boolean) => void;
  open: () => void;
  close: () => void;
};

function useModal(defaultValue?: boolean): UseModal {
  const [visible, setState] = useState(!!defaultValue);
  return {
    visible,
    toggle: (value?: boolean) => {
      setState((s) => (typeof value === 'undefined' ? !s : value));
    },
    open: () => setState(true),
    close: () => setState(false),
  };
}

export default useModal;
