import Image from "next/image";
import { FC } from "react";

interface Props {
  socialMediaUrl: () => string;
  containerExtraStyles: string;
  socialMediaPlatform: string;
  imgWidth: number;
  imgHeight: number;
  text: string;
}

const SocialMediaBtn: FC<Props> = ({
  socialMediaUrl,
  containerExtraStyles,
  socialMediaPlatform,
  imgHeight,
  imgWidth,
  text,
}) => {
  return (
    <a
      href={socialMediaUrl()}
      className={`w-[52%] h-12 rounded-lg flex flex-row items-center cursor-pointer transition-all hover:scale-105 ${containerExtraStyles}`}
    >
      <Image
        src={`/login/${socialMediaPlatform}.svg`}
        alt={`${socialMediaPlatform} log in`}
        className="ml-4"
        width={imgHeight}
        height={imgWidth}
      />
      <span className={`ml-4 font-medium text-white`}>{text}</span>
    </a>
  );
};

export default SocialMediaBtn;
