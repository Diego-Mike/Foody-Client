import { Lobster_Two } from "next/font/google";
import Image from "next/image";

const exclusiveFont = Lobster_Two({ subsets: ["latin"], weight: ["400"] });

const LeftSideNavbar = () => {
  return (
    <div className="flex flex-row items-center pl-2">
      <Image
        src={"/corporative_logo.svg"}
        alt="Corporative logo"
        width={58}
        height={58}
      />
      <span className={`${exclusiveFont.className} pl-2 text-2xl`}>Foody</span>
    </div>
  );
};

export default LeftSideNavbar;
