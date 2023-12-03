import { FC } from "react";

import LoginCancelBtn from "@/components/atoms/home/LoginCancelBtn";

interface Props {}

const LoginCancel: FC<Props> = () => {
  return (
    <div className="w-full h-[10%] flex items-center justify-end">
      <LoginCancelBtn />
    </div>
  );
};

export default LoginCancel;
