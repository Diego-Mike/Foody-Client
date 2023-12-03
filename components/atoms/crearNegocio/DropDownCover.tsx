import { FC } from "react";

interface Props {
  onClickFn: () => void;
}

const DropDownCover: FC<Props> = ({ onClickFn }) => {
  return <div className="fixed inset-0 z-40 max-h-full" onClick={onClickFn} />;
};

export default DropDownCover;
