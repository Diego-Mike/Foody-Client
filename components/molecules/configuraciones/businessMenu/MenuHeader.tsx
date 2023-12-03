import ManageCategories from "@/components/atoms/configuraciones/ManageCategories";

const MenuHeader = () => {
  return (
    <div className="w-[94%] m-auto pt-8">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-xl text-white">Menu</h2>
        <ManageCategories />
      </div>
    </div>
  );
};

export default MenuHeader;
