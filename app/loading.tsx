import Leftbar from "@/components/organisms/home/Leftbar";
import RightsideBar from "@/components/organisms/home/RightsideBar";
import UserFeed from "@/components/organisms/home/UserFeed";

const Loading = () => {
  return (
    <section className="flex flex-col items-center w-full min-h-screen">
      <Leftbar loading={true} loggedIn={false} />
      <UserFeed loading={true} />
      <RightsideBar />
    </section>
  );
};

export default Loading;
