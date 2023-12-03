import { XMarkIcon } from "@heroicons/react/24/solid";
import { FC } from "react";

interface Props {
  amount: number;
}

const ReservationFoodAmount: FC<Props> = ({ amount }) => {
  return (
    <span className="text-xs text-[#ABBBC2] flex items-center">
      <XMarkIcon className="text-[#ea6911] w-3 h-3" />
      {amount}
    </span>
  );
};

export default ReservationFoodAmount;
