import React, { FC } from "react";

interface Props {
  children: JSX.Element;
}
// TODO: make this as global atom component
const InputIconWrapper: FC<Props> = ({ children }) => {
  return (
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      {children}
    </div>
  );
};

export default InputIconWrapper;
