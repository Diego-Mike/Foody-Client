import { ReserveFood } from "@/apiCalls/types";
import ReservationFoodAmount from "@/components/atoms/home/ReservationFoodAmount";
import ReservationFoodImg from "@/components/atoms/home/ReservationFoodImg";
import ReservationFoodPrice from "@/components/atoms/home/ReservationFoodPrice";
import ReservationFoodTitle from "@/components/atoms/home/ReservationFoodTitle";
import { useStore } from "@/globalState";
import { TrashIcon } from "@heroicons/react/24/outline";
import React, { FC } from "react";

interface Props {
  reservationFood: ReserveFood;
  i: number;
}

const ReservationFood: FC<Props> = ({
  reservationFood: {
    amount,
    food_id,
    food_img,
    food_price: { prettify },
    food_title,
  },
  i,
}) => {
  const removeFoodFromReservation = useStore(
    (state) => state.removeFoodFromReservation
  );

  return (
    <div
      className={`w-full h-[75px] rounded-3xl relative flex bg-[#1F1D2B] items-center  ${
        i === 0 ? "mt-3" : "mt-7"
      }`}
      key={food_id}
    >
      {/* food img */}
      <ReservationFoodImg foodImg={food_img} />

      <div className="w-[75%] pl-[90px] h-[80%] overflow-hidden flex flex-col justify-between">
        {/* food name */}
        <ReservationFoodTitle foodTitle={food_title} />
        {/* amount */}
        <ReservationFoodAmount amount={amount} />
      </div>

      <div className="w-[25%] h-[80%] flex flex-col justify-between items-end pr-4 overflow-hidden">
        {/* remove food */}
        <TrashIcon
          className="w-5 h-10 text-[#E60A0A] cursor-pointer"
          onClick={() => removeFoodFromReservation(food_id)}
        />
        {/* food price */}
        <ReservationFoodPrice prettyCash={prettify} />
      </div>
    </div>
  );
};

export default ReservationFood;
