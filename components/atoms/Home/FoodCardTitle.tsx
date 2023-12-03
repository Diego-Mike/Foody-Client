import { FC } from "react";

interface Props {
  foodTitle: string;
}

const FoodCardTitle: FC<Props> = ({ foodTitle }) => {
  return (
    <p className="text-center w-[80%] text-white text-sm mt-20">{foodTitle}</p>
  );
};

export default FoodCardTitle;
