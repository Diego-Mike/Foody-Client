import LoadingSpinner from "@/components/atoms/global/LoadingSpinner";
import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";

interface Props {
  isLoading: boolean;
}

const LodingCreateBusinessReq: FC<Props> = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.section
          className="fixed inset-0 flex items-center justify-center backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <LoadingSpinner
            width="w-[45px]"
            height="h-[45px]"
            color="text-[#EA7C69]"
          />
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default LodingCreateBusinessReq;
