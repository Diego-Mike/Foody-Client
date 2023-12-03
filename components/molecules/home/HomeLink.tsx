import { Lobster_Two } from "next/font/google";

const exclusiveFont = Lobster_Two({ subsets: ["latin"], weight: ["400"] });

const HomeLink = () => {
  return (
    <div className="w-full cursor-pointer">
      <span className={`${exclusiveFont.className} text-3xl text-white pl-2`}>
        Foody
      </span>
    </div>
  );
};

export default HomeLink;
