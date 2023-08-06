import LoginHeader from "@/components/atoms/Home/LoginHeader";
import SocialMediaBtn from "@/components/atoms/Home/SocialMediaBtn";
import { getGoogleAuthUrl } from "@/utils";

const LoginOptions = () => {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <LoginHeader />

      <SocialMediaBtn
        containerExtraStyles="mt-16 border-2 border-indi"
        imgHeight={25}
        imgWidth={25}
        socialMediaPlatform="google"
        socialMediaUrl={getGoogleAuthUrl}
        text="Continuar con Google"
        textExtraStyles="text-black text-opacity-50"
      />

      <SocialMediaBtn
        containerExtraStyles="mt-7 bg-[rgba(24,119,242)]"
        imgHeight={26}
        imgWidth={26}
        socialMediaPlatform="facebook"
        socialMediaUrl={() => ""}
        text="Continuar con Facebook"
        textExtraStyles="text-white"
      />

      <SocialMediaBtn
        containerExtraStyles="mt-7 bg-black"
        imgHeight={28}
        imgWidth={28}
        socialMediaPlatform="tiktok"
        socialMediaUrl={() => ""}
        text="Continuar con TikTok"
        textExtraStyles="text-white"
      />

      <SocialMediaBtn
        containerExtraStyles="mt-7 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
        imgHeight={29}
        imgWidth={29}
        socialMediaPlatform="instagram"
        socialMediaUrl={() => ""}
        text="Continuar con Instagram"
        textExtraStyles="text-white"
      />
    </div>
  );
};

export default LoginOptions;
