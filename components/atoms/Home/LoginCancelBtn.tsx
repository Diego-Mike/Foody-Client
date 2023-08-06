import { XMarkIcon } from "@heroicons/react/24/solid";
import { FC } from "react";

interface Props {
  toggle: () => void;
}

const LoginCancelBtn: FC<Props> = ({ toggle }) => {
  return (
    <div
      className="flex items-center justify-center mt-3 mr-3 bg-gray-100 rounded-full cursor-pointer w-11 h-11"
      onClick={toggle}
    >
      <XMarkIcon className="font-extrabold w-7 h-7" />
    </div>
  );
};

export default LoginCancelBtn;
