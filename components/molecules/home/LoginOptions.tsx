import LoginHeader from "@/components/atoms/home/LoginHeader";
import SocialMediaBtn from "@/components/atoms/home/SocialMediaBtn";
import { getFacebookAuthUrl, getGoogleAuthUrl } from "@/utils";

const LoginOptions = () => {
  // FIXME: when making the request, inhabilitate to select other options

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
      />

      <SocialMediaBtn
        containerExtraStyles="mt-7 bg-[rgba(24,119,242)]"
        imgHeight={26}
        imgWidth={26}
        socialMediaPlatform="facebook"
        socialMediaUrl={getFacebookAuthUrl}
        text="Continuar con Facebook"
      />

      <SocialMediaBtn
        containerExtraStyles="mt-7 bg-black opacity-40 pointer-events-none"
        imgHeight={28}
        imgWidth={28}
        socialMediaPlatform="tiktok"
        socialMediaUrl={() => ""}
        text="Continuar con TikTok"
      />

      <SocialMediaBtn
        containerExtraStyles="mt-7 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 opacity-40 pointer-events-none"
        imgHeight={29}
        imgWidth={29}
        socialMediaPlatform="instagram"
        socialMediaUrl={() => ""}
        text="Continuar con Instagram"
      />
    </div>
  );
};

export default LoginOptions;
