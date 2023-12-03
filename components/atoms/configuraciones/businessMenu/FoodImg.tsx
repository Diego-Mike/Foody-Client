import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

interface Props {
  foodUrl: string;
}

const FoodImg: FC<Props> = ({ foodUrl }) => {
  return (
    <motion.div
      className="w-[90%] h-24 relative"
      whileHover={{ scale: 1.2, height: "120px" }}
    >
      <Image
        src={foodUrl}
        fill
        sizes="100%"
        placeholder="empty"
        className="object-cover rounded-xl"
        alt="food uploaded image"
      />
    </motion.div>
  );
};

export default FoodImg;
