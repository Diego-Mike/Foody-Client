import { FC } from "react";

interface Props {
  prettyCash: string;
}

const ReservationFoodPrice: FC<Props> = ({ prettyCash }) => {
  return <span className="text-xs text-[#ABBBC2]">${prettyCash}</span>;
};

export default ReservationFoodPrice;
