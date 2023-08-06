"use client";
import { FC, useEffect } from "react";

import LeftSideNavbar from "@/components/molecules/home/LeftSideNavbar";
import RightSideNavbar from "@/components/molecules/home/RightSideNavbar";
import { User } from "@/apiCalls/users";
import { useStore } from "@/globalState";

interface Props {
  loading: boolean;
  loggedIn: boolean;
  user?: User;
  accessToken?: string;
}

const Navbar: FC<Props> = ({ loggedIn, user, accessToken, loading }) => {
  const [updateUser, updateAccessToken] = useStore((state) => [
    state.updateUser,
    state.updateAccessToken,
  ]);

  useEffect(() => {
    if (loggedIn) {
      updateUser(user!);
      updateAccessToken(accessToken!);
    }
  }, []);

  return (
    <section className="flex items-center justify-center w-full h-[95px]">
      <div className="w-[98%] h-16 bg-white rounded-lg flex justify-between items-center shadow-lg">
        <LeftSideNavbar />
        <RightSideNavbar loading={loading} loggedIn={loggedIn} user={user} />
      </div>
    </section>
  );
};

export default Navbar;
