import Image from "next/image";
import { FC } from "react";

interface Props {
  picture: string;
  name: string;
}

const UserLoggedIn: FC<Props> = ({ picture, name }) => {
  return (
    <div className="relative flex items-center w-full ml-3 overflow-hidden">
      <Image
        src={picture}
        alt="user picture"
        quality={100}
        width={30}
        height={30}
        className="rounded-full"
      />
      <span className="text-[#ABBBC2] pl-3 text-ellipsis whitespace-nowrap overflow-hidden">
        {name} shadhs
      </span>
    </div>
  );
};

export default UserLoggedIn;
