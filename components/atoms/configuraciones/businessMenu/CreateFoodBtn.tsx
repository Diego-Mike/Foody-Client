import { FC } from "react";
import { motion } from "framer-motion";
import LoadingSpinner from "../../global/LoadingSpinner";

interface Props {
  loading: boolean;
}

const CreateFoodBtn: FC<Props> = ({ loading }) => {
  return (
    <motion.button
      className="bg-[#EA7C69] text-[#FAFAFA] text-sm rounded-lg w-32 py-2 flex justify-center"
      type="submit"
      disabled={loading}
      whileTap={{ scale: 0.9 }}
    >
      {loading ? (
        <LoadingSpinner width="w-5" height="h-5" color="white" />
      ) : (
        "Crear"
      )}
    </motion.button>
  );
};

export default CreateFoodBtn;
