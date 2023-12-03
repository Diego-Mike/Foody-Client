import { PlusIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { FC } from "react";

interface Props {
  toggle: () => void;
}

const AddNewFoodCard: FC<Props> = ({ toggle }) => {
  return (
    <motion.article
      className="border border-dashed border-[#EA7C69] w-[270px] h-[330px] rounded-[10px] flex justify-center items-center flex-col cursor-pointer mt-6"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggle}
    >
      <PlusIcon className="w-8 text-[#EA7C69]" />
      <p className="text-sm text-[#EA7C69] font-medium pt-5">
        Agregar nueva comida
      </p>
    </motion.article>
  );
};

export default AddNewFoodCard;
