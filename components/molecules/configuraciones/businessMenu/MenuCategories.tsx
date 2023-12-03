import FoodCategories from "@/components/atoms/configuraciones/FoodCategories";
import React, { useState } from "react";

interface Categories {
  categorieId: number;
  categorieName: string;
}

interface Props {
  categories: Categories[];
}

const categories = [
  {
    categorieId: 0,
    categorieName: "Especial Mandingas",
  },
  {
    categorieId: 1,
    categorieName: "Aperitivos",
  },
  {
    categorieId: 2,
    categorieName: "Lorem ipsum dolor",
  },
  {
    categorieId: 3,
    categorieName: "Lorem ipsum dolor",
  },
];

const MenuCategories = () => {
  const [selectCategorie, setSelectCategorie] = useState<number | undefined>(
    undefined
  );
  {
    /* FIXME: create global scrollbar and add button to move horizontally */
  }
  return (
    <div className="w-full border-b overflow-x-scroll border-[#393C49] pt-6 flex">
      <div className="w-[94%] m-auto flex overflow-x-scroll">
        {categories.map((categorie) => {
          return (
            <FoodCategories
              key={categorie.categorieId}
              {...categorie}
              selectedCategorie={selectCategorie}
              setSelectCategorie={setSelectCategorie}
              containerCustomStyles={categorie.categorieId > 0 ? "ml-9" : ""}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MenuCategories;
