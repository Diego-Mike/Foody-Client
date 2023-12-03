import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

interface Props {
  foodImg: string;
}

const FoodCardImg: FC<Props> = ({ foodImg }) => {
  return (
    <motion.div
      className="absolute top-[-40px] h-24 bg-white bg-opacity-80 w-[80%] rounded-xl cursor-pointer"
      whileHover={{ scale: 1.15 }}
    >
      <Image
        src={foodImg}
        alt="food img"
        fill
        sizes="100%"
        className="object-cover rounded-xl"
      />
    </motion.div>
  );
};

export default FoodCardImg;
