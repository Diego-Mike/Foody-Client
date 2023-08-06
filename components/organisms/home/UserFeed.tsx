import UserWelcome from "@/components/molecules/home/UserWelcome";
import { FC } from "react";

interface Props {
  loading: boolean;
}

const UserFeed: FC<Props> = ({ loading }) => {
  return (
    <section className="w-[98%] m-auto mt-3 min-h-screen">
      {/* user card, welcome ! */}
      <UserWelcome loading={loading} />
    </section>
  );
};

export default UserFeed;
