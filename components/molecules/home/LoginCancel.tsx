import { FC } from "react";

import LoginCancelBtn from "@/components/atoms/Home/LoginCancelBtn";

interface Props {
  toggle: () => void;
}

const LoginCancel: FC<Props> = ({ toggle }) => {
  return (
    <div className="w-full h-[10%] flex items-center justify-end">
      <LoginCancelBtn toggle={toggle} />
    </div>
  );
};

export default LoginCancel;
