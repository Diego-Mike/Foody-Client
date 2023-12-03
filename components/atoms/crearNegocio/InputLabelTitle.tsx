import { FC } from "react";

interface Props {
  title: string;
}

const InputLabelTitle: FC<Props> = ({ title }) => {
  return (
    <label className={"block mb-3 text-base font-normal text-white"}>
      {title}
    </label>
  );
};

export default InputLabelTitle;
