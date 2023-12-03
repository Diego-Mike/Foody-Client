"use client";
import {
  ArrowTrendingUpIcon,
  Cog6ToothIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const SideBar = () => {
  const router = useRouter();

  return (
    <aside className="w-[5.5%] left-0 top-0 bottom-0 fixed z-50 bg-[rgba(17,17,17,1)]">
      <div className="flex flex-col items-center justify-start w-full h-full">
        <motion.div
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => router.push("/")}
          className="flex items-center justify-center w-10 h-10 mt-5 rounded-lg cursor-pointer"
        >
          <HomeIcon className="w-6 text-[rgb(234,124,105)]" />
        </motion.div>

        <motion.div
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          className="cursor-pointer mt-10 w-10 h-10 drop-shadow-[0_4px_5px_rgb(234,124,105,0.3)] flex items-center justify-center bg-[rgb(234,124,105)] rounded-lg"
          onClick={() => router.push("/negocio/123/admin")}
        >
          <ArrowTrendingUpIcon className="w-6 text-white" />
        </motion.div>

        <motion.div
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          className="flex items-center justify-center w-10 h-10 mt-10 rounded-lg cursor-pointer"
          onClick={() =>
            router.push("/negocio/123/admin/configuraciones?option=1")
          }
        >
          <Cog6ToothIcon className="w-6 text-[rgb(234,124,105)]" />
        </motion.div>
      </div>
    </aside>
  );
};

export default SideBar;
