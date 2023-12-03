import React, { FC } from "react";
import { motion } from "framer-motion";

interface Props {
  width: string;
  height: string;
  color: string;
}

const LoadingSpinner: FC<Props> = ({ width, height, color }) => {
  return (
    <motion.div
      className={`animate-spin ${width} ${height} border-[2px] border-current border-t-transparent ${color} rounded-full`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    />
  );
};

export default LoadingSpinner;
