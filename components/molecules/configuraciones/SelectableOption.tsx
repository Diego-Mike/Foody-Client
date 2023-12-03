import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, FC, ReactNode, SetStateAction, useState } from "react";

interface Props {
  containerCustomStyles?: string;
  optionIcon: ReactNode;
  optionTitle: string;
  optionDescription: string;
  optionSelected: number;
  setOptionSelected: Dispatch<SetStateAction<number>>;
  componentIndex: number;
}

// FIXME: organize into atomic design

const SelectableOption: FC<Props> = ({
  containerCustomStyles,
  optionIcon,
  optionDescription,
  optionTitle,
  optionSelected,
  setOptionSelected,
  componentIndex,
}) => {
  const [overCard, setOverCard] = useState<boolean>(false);

  return (
    <motion.article
      className={`flex items-center justify-center w-full h-[100px] relative cursor-pointer ${
        containerCustomStyles && containerCustomStyles
      }`}
      animate={{
        backgroundColor:
          componentIndex === optionSelected
            ? "rgba(234, 124, 105, 0.26)"
            : "rgba(234, 124, 105, 0.0)",
      }}
      onMouseOver={() => setOverCard(true)}
      onMouseOut={() => setOverCard(false)}
      onClick={() => setOptionSelected(componentIndex)}
    >
      <div className="flex w-[85%]">
        <div className="flex items-start h-full">{optionIcon}</div>
        <div className="flex flex-col h-full pl-3">
          <motion.span
            className="text-sm font-medium"
            animate={{
              color:
                componentIndex === optionSelected
                  ? "rgb(234,124,105)"
                  : "rgba(255,255,255)",
            }}
          >
            {optionTitle}
          </motion.span>
          <span className="text-xs font-light text-[#ABBBC2]">
            {optionDescription}
          </span>
        </div>
      </div>
      {/* hover */}
      <AnimatePresence>
        {overCard && (
          <motion.div
            className="absolute right-0 bg-[#EA7C69] w-[6px] h-12 rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>
    </motion.article>
  );
};

export default SelectableOption;
