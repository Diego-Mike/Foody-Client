import { useEffect, useState } from "react";

// FIXME: update atomic test
export const useModal = (
  initMode: boolean
): { isShowing: boolean; toggle: () => void } => {
  const [isShowing, setIsShowing] = useState<boolean>(initMode);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  useEffect(() => {
    if (isShowing === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isShowing]);

  return { isShowing, toggle };
};
