import { motion } from "framer-motion";
import { FC, ReactNode } from "react";

interface Props {
  linkName: string;
  LinkIcon: ReactNode;
  selected: boolean;
  onClickFn?: () => void;
  customStyles?: string;
}

const LeftbarLink: FC<Props> = ({
  linkName,
  selected,
  LinkIcon,
  onClickFn,
  customStyles,
}) => {
  return (
    <motion.div
      className={`flex items-center w-full h-[45px] rounded-lg cursor-pointer ${
        customStyles && customStyles
      }`}
      style={{
        backgroundColor: selected
          ? "rgba(234,124,105)"
          : "rgba(234,124,105,0.0)",
      }}
      whileHover={{
        backgroundColor: selected
          ? "rgba(234,124,105)"
          : "rgba(234,124,105,0.10)",
      }}
      onClick={onClickFn}
    >
      <motion.span className="pl-3" whileHover={{ scale: 1.05 }}>
        {LinkIcon}
      </motion.span>

      <div className="flex items-end h-[26px]">
        <span
          className={`pl-[15px] text-base text-white ${
            selected && "font-medium"
          }`}
        >
          {linkName}
        </span>
      </div>
    </motion.div>
  );
};

export default LeftbarLink;
