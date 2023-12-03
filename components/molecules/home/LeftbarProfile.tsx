import { User } from "@/apiCalls/types";
import LogginBtn from "@/components/atoms/home/LogginBtn";
import UserLoading from "@/components/atoms/home/UserLoading";
import Login from "@/components/organisms/home/Login";
import { AnimatePresence } from "framer-motion";
import React, { FC } from "react";
import UserLoggedIn from "./UserLoggedIn";
import { useSearchParams } from "next/navigation";

interface Props {
  loggedIn: boolean;
  user?: User;
  loading: boolean;
}

const LeftbarProfile: FC<Props> = ({ loading, loggedIn, user }) => {
  const searchParams = useSearchParams();
  const loginView = searchParams.get("view") === "login";

  return (
    <div className="flex w-full mt-20 h-[45px]">
      {loading ? (
        <UserLoading />
      ) : (
        <>
          {loggedIn ? (
            <UserLoggedIn picture={user!.picture} name={user!.username} />
          ) : (
            <>
              <LogginBtn />
              <AnimatePresence>{loginView && <Login />}</AnimatePresence>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default LeftbarProfile;
