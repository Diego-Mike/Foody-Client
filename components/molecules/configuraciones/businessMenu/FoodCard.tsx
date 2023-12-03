import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

interface Props {
  foodImg: string;
  foodName: string;
  foodPrice: string;
  availableFood: number;
}

// FIXME: organize into atomic design

const FoodCard = () => {
  return (
    <article className="border border-[#393C49] w-[270px] h-[330px] rounded-[10px] flex justify-between items-center flex-col mt-6">
      {/* image */}
      <div className="w-[90%] h-[120px] mt-5">
        <motion.div
          layout
          className="w-full h-24 bg-center bg-cover rounded-xl"
          style={{
            backgroundImage: "url(/configuraciones/arepa-casera.jpeg)",
          }}
          whileHover={{ scale: 1.2, height: "120px" }}
        />
      </div>
      {/* description */}
      <p className="px-[30px] text-center text-white text-[15px]">
        Arepa casera tradicional chimbita si sabe pa que rico
      </p>
      <div className="flex w-[90%] justify-center items-center">
        <span className="text-[#ABBBC2] text-sm">$ 2.000</span>
        <span className="px-2 text-lg text-white">-</span>
        <span className="text-[#ABBBC2] text-sm">20 disponible</span>
      </div>
      {/* edit button */}
      <div className="w-full h-14 rounded-b-[10px] bg-[rgb(234,124,105,0.24)]">
        <button
          type="button"
          className="flex items-center justify-center w-full h-full"
        >
          <PencilSquareIcon className="text-[#EA7C69] w-5" />
          <span className="pl-2 text-sm text-[#EA7C69]">Editar comida</span>
        </button>
      </div>
    </article>
  );
};

export default FoodCard;
