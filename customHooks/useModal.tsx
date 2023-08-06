import { useState } from "react";

export const useModal = (
  initMode: boolean
): { isShowing: boolean; toggle: () => void } => {
  const [isShowing, setIsShowing] = useState<boolean>(initMode);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return { isShowing, toggle };
};
