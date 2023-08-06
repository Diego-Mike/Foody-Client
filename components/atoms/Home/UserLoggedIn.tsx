import { BellIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { FC } from "react";

interface Props {
  picture: string;
}

const UserLoggedIn: FC<Props> = ({ picture }) => {
  return (
    <>
      <BellIcon className="w-5 h-5 text-[#444750]" />
      <Image
        loading="lazy"
        src={picture}
        alt="user picture"
        quality={100}
        width={35}
        height={35}
        className="ml-4 mr-2 rounded-full"
      />
    </>
  );
};

export default UserLoggedIn;
