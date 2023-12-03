import { AnimatePresence } from "framer-motion";

import MenuCategories from "@/components/molecules/configuraciones/businessMenu/MenuCategories";
import MenuHeader from "@/components/molecules/configuraciones/businessMenu/MenuHeader";
import AddNewFoodCard from "@/components/molecules/configuraciones/businessMenu/AddNewFoodCard";
import FoodCard from "@/components/molecules/configuraciones/businessMenu/FoodCard";
import { useModal } from "@/customHooks";
import FoodModal from "@/components/molecules/configuraciones/businessMenu/FoodModal";

const BusinessMenu = () => {
  const { isShowing, toggle } = useModal(false);

  return (
    <>
      {/* header */}
      <MenuHeader />

      {/* categories */}
      <MenuCategories />

      {/* food */}
      <div className="w-[94%] m-auto flex flex-wrap justify-between pb-6">
        <AddNewFoodCard toggle={toggle} />

        <FoodCard />

        <FoodCard />

        <FoodCard />
      </div>

      {/* create new food */}
      <AnimatePresence>
        {isShowing && <FoodModal toggle={toggle} />}
      </AnimatePresence>
    </>
  );
};

export default BusinessMenu;
