import Navbar from "@/components/organisms/home/Navbar";
import UserFeed from "@/components/organisms/home/UserFeed";

const Loading = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-[rgba(252,237,227,0.40)] via-[rgba(255,246,216,0.40)] to-[rgba(255,246,216,0.42)]">
      <Navbar loading={true} loggedIn={false} />
      <UserFeed loading={true} />
    </section>
  );
};

export default Loading;
