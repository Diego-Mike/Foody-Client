import Image from "next/image";
import { FC } from "react";

interface Props {
  foodImg: string;
}

const ReservationFoodImg: FC<Props> = ({ foodImg }) => {
  return (
    <div className="w-20 h-20 rounded-full bg-[rgba(255,255,255,0.7)] absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer">
      {/* TODO: add component that show full img width height */}
      <Image
        src={foodImg}
        alt="food img"
        fill
        sizes="100%"
        className="object-cover rounded-full"
      />
    </div>
  );
};

export default ReservationFoodImg;
