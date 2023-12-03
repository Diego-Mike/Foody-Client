import { FC } from "react";
import { motion } from "framer-motion";

interface Props {
  addReservationFn: () => void;
  disabled: boolean;
}

const FoodCardReserve: FC<Props> = ({ addReservationFn, disabled }) => {
  return (
    <motion.button
      type="button"
      className={` py-2 px-4 rounded-lg ${
        disabled ? "bg-[#2D303E]" : "bg-[#EA7C69]"
      } text-white text-sm mt-4`}
      whileTap={{ scale: disabled ? 1 : 0.87 }}
      onClick={addReservationFn}
      disabled={disabled}
    >
      +
    </motion.button>
  );
};

export default FoodCardReserve;
