import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import React from "react";

const ManageCategories = () => {
  return (
    <button
      type="button"
      className="px-3 py-3 text-sm text-white border rounded-lg border-[#393C49] bg flex items-center"
    >
      <AdjustmentsHorizontalIcon className="text-white w-7" />
      <span className="pl-2 text-sm">Manejar Categorias</span>
    </button>
  );
};

export default ManageCategories;
