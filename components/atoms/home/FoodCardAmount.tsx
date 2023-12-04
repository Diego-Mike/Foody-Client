import { FC } from "react";

interface Props {
  foodAvailablePerDay: number;
}

const FoodCardAmount: FC<Props> = ({ foodAvailablePerDay }) => {
  return (
    <>
      {foodAvailablePerDay !== 0 && (
        <span className="text-[#ABBBC2] font-light mt-2 text-sm">
          {foodAvailablePerDay} disponibles
        </span>
      )}
    </>
  );
};

export default FoodCardAmount;
