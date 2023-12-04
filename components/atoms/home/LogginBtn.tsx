import { FC } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface Props {}

const LogginBtn: FC<Props> = () => {
  const router = useRouter();

  return (
    <motion.button
      className="w-full px-5 py-2 text-base font-medium text-[#EA7C69] transition-colors border border-[#EA7C69] rounded-md"
      onClick={() => {
        router.push("/?view=login");
      }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      Iniciar sesión
    </motion.button>
  );
};

export default LogginBtn;
