import {
  ArchiveBoxIcon,
  BellAlertIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface Props {
  reservationId: number;
}

const ReservationView: FC<Props> = ({ reservationId }) => {
  const router = useRouter();

  return (
    <motion.aside
      key={"reservation-container"}
      className={`fixed inset-0 w-full h-screen bg-[rgba(0,0,0,0.70)]`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.section
        key={"reservation-food"}
        className="w-[25%] fixed right-0 top-0 bottom-0 bg-[#111111]"
        initial={{ x: "105%" }}
        animate={{ x: 0, transition: { duration: 0.2, type: "just" } }}
      >
        <div className="w-[90%] m-auto mt-5 flex flex-col">
          <ArrowLeftIcon
            className="w-5 h-5 mb-5 text-white cursor-pointer"
            onClick={() => router.push("/")}
          />

          <h3 className="mb-5 text-lg text-white">
            Reservación #{reservationId}
          </h3>

          <div className="">
            <button className="py-3 px-3 bg-[#EA7C69] rounded-lg" type="button">
              <BookmarkIcon className="text-white w-7 h-7" />
            </button>
            <button
              className="py-3 px-3 border border-[#393C49] rounded-lg ml-5"
              type="button"
            >
              <BellAlertIcon className="text-white w-7 h-7" />
            </button>
            <button
              className="py-3 px-3 border border-[#393C49] rounded-lg ml-5"
              type="button"
            >
              <ArchiveBoxIcon className="text-white w-7 h-7" />
            </button>
          </div>
        </div>
      </motion.section>
    </motion.aside>
  );
};

export default ReservationView;
