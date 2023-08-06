import { AnimatePresence } from "framer-motion";
import { FC } from "react";

import { useModal } from "@/customHooks";
import LogginBtn from "@/components/atoms/Home/LogginBtn";
import { User } from "@/apiCalls/users";
import UserLoggedIn from "@/components/atoms/Home/UserLoggedIn";
import UserLoading from "@/components/atoms/Home/UserLoading";
import Login from "@/components/organisms/home/Login";

interface props {
  loggedIn: boolean;
  user?: User;
  loading: boolean;
}

const RightSideNavbar: FC<props> = ({ loggedIn, user, loading }) => {
  const { isShowing, toggle } = useModal(false);

  return (
    <div className="flex flex-row items-center pr-3">
      {loading ? (
        <UserLoading />
      ) : (
        <>
          {loggedIn ? (
            <>
              <UserLoggedIn picture={user!.picture} />
            </>
          ) : (
            <>
              <LogginBtn toggle={toggle} />
              <AnimatePresence>
                {isShowing && <Login toggle={toggle} />}
              </AnimatePresence>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default RightSideNavbar;
