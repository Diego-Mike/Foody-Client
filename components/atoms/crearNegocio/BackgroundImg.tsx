import Image from "next/image";

const BackgroundImg = () => {
  return (
    <Image
      src={"/createBusiness/background.svg"}
      alt="street food background"
      width={700}
      height={700}
      className="fixed bottom-0 right-0"
    />
  );
};

export default BackgroundImg;
