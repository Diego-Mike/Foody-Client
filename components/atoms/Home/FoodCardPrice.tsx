import { FC } from "react";

interface Props {
  foodPrice: string;
}

const FoodCardPrice: FC<Props> = ({ foodPrice }) => {
  return (
    <span className="mt-2 text-sm font-light text-white">$ {foodPrice}</span>
  );
};

export default FoodCardPrice;
