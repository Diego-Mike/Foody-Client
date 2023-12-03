import { motion } from "framer-motion";

// FIXME: delete this component ?¿
const GeoLoadingCover = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.2 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-black w-[80%]"
    />
  );
};

export default GeoLoadingCover;
