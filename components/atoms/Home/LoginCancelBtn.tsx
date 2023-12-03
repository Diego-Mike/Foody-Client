import { XMarkIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface Props {}

const LoginCancelBtn: FC<Props> = () => {
  const router = useRouter();

  return (
    <div
      className="flex items-center justify-center mt-3 mr-3 rounded-full cursor-pointer w-11 h-11"
      onClick={() => router.push("/")}
    >
      <XMarkIcon className="font-extrabold text-white w-7 h-7" />
    </div>
  );
};

export default LoginCancelBtn;
