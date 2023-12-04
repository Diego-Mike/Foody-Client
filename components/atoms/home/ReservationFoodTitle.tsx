import React, { FC } from "react";

interface Props {
  foodTitle: string;
}

const ReservationFoodTitle: FC<Props> = ({ foodTitle }) => {
  return <p className="pr-2 text-xs text-white">{foodTitle}</p>;
};

export default ReservationFoodTitle;
