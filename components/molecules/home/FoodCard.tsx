import FoodCardAmount from "@/components/atoms/home/FoodCardAmount";
import FoodCardImg from "@/components/atoms/home/FoodCardImg";
import FoodCardPrice from "@/components/atoms/home/FoodCardPrice";
import FoodCardReserve from "@/components/atoms/home/FoodCardReserve";
import FoodCardTitle from "@/components/atoms/home/FoodCardTitle";
import { useStore } from "@/globalState";
import { FC } from "react";

interface Props {
  business_id: number;
  food_id: number;
  food_img: string;
  food_title: string;
  food_description?: string;
  food_price: {
    prettify: string;
    real_price: number;
  };
  food_available_per_day: number;
}

const FoodCard: FC<Props> = ({
  business_id,
  food_available_per_day,
  food_id,
  food_img,
  food_price,
  food_title,
  food_description,
}) => {
  const [addReservation, currentBusinessReservation] = useStore((state) => [
    state.addReservation,
    state.reservation,
  ]);

  const addReservationFn = () => {
    addReservation({
      business_id,
      food: { food_id, food_title, food_price, food_description, food_img },
    });
  };

  return (
    <article
      className="w-[230px] h-[245px] bg-[#1F1D2B] rounded-2xl relative flex flex-col items-center"
      key={food_id}
    >
      {/* imagen */}
      <FoodCardImg foodImg={food_img} />
      {/* info */}
      <FoodCardTitle foodTitle={food_title} />
      <FoodCardPrice foodPrice={food_price.prettify} />
      <FoodCardAmount foodAvailablePerDay={food_available_per_day} />
      {/* order */}
      <FoodCardReserve
        addReservationFn={addReservationFn}
        disabled={
          (business_id !== currentBusinessReservation.business_id &&
            currentBusinessReservation.business_id !== 0) ||
          currentBusinessReservation.reservation_id !== 0
        }
      />
    </article>
  );
};

export default FoodCard;
