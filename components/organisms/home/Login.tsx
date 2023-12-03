import { motion } from "framer-motion";

import LoginCancel from "@/components/molecules/home/LoginCancel";
import LoginOptions from "@/components/molecules/home/LoginOptions";
import { FC } from "react";

interface Props {}

const Login: FC<Props> = () => {
  return (
    <motion.section
      className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center w-full min-h-screen overflow-y-auto bg-[rgba(0,0,0,0.7)]"
      onClick={(e) => {
        e.stopPropagation();
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.1 } }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <div className="w-2/5 h-[650px] bg-[#111111] rounded-lg flex flex-col border border-[#393C49]">
        <LoginCancel />
        <LoginOptions />
      </div>
    </motion.section>
  );
};

export default Login;
