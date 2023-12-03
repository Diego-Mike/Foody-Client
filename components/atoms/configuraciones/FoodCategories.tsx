import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, FC, SetStateAction, useState } from "react";

interface Props {
  categorieName: string;
  categorieId: number;
  selectedCategorie: number | undefined;
  setSelectCategorie: Dispatch<SetStateAction<number | undefined>>;
  containerCustomStyles?: string;
}

const FoodCategories: FC<Props> = ({
  categorieId,
  categorieName,
  selectedCategorie,
  setSelectCategorie,
  containerCustomStyles,
}) => {
  // FIXME: should we make this a custom hook
  const [showBorder, setShowBorder] = useState<Boolean>(false);

  return (
    <div
      className={`pb-[10px] cursor-pointer relative ${
        containerCustomStyles && containerCustomStyles
      }`}
      onMouseOver={() => setShowBorder(true)}
      onMouseOut={() => setShowBorder(false)}
      onClick={() => setSelectCategorie(categorieId)}
    >
      <div className="max-w-[200px]">
        <motion.span
          className="text-sm font-medium"
          animate={{
            color: `${
              selectedCategorie === categorieId
                ? "rgba(234, 124, 105)"
                : "rgba(255, 255, 255)"
            }`,
          }}
        >
          {categorieName}
        </motion.span>
        <AnimatePresence>
          {(showBorder || selectedCategorie === categorieId) && (
            <motion.div
              className="absolute bottom-0 w-3/5 h-[3px] rounded-lg"
              initial={{
                opacity: 0,
                backgroundColor: `${
                  selectedCategorie === categorieId
                    ? "rgba(234, 124, 105)"
                    : "rgba(255, 255, 255)"
                } `,
              }}
              animate={{
                opacity: 1,
                backgroundColor: `${
                  selectedCategorie === categorieId
                    ? "rgba(234, 124, 105)"
                    : "rgba(255, 255, 255)"
                } `,
              }}
              exit={{
                opacity: 0,
                backgroundColor: `${
                  selectedCategorie === categorieId
                    ? "rgba(234, 124, 105)"
                    : "rgba(255, 255, 255)"
                } `,
              }}
              transition={{ duration: 0.1 }}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FoodCategories;
