import DropDownCover from "@/components/atoms/crearNegocio/DropDownCover";
import DropDownOption from "@/components/atoms/crearNegocio/DropDownOption";
import { IBusinessForm } from "@/components/organisms/createBusiness/NewBusinessForm";
import { motion } from "framer-motion";
import {
  Dispatch,
  FC,
  KeyboardEvent,
  MutableRefObject,
  SetStateAction,
} from "react";
import { UseFormSetValue } from "react-hook-form";

interface Props {
  cityContainerRef: MutableRefObject<HTMLParagraphElement | null>;
  setInputValue: UseFormSetValue<IBusinessForm>;
  setCityOptions: Dispatch<SetStateAction<number>>;
  toggle: () => void;
}

const DropDownContainer: FC<Props> = ({
  cityContainerRef,
  setInputValue,
  setCityOptions,
  toggle,
}) => {
  const enterKeyPressd = (
    e: KeyboardEvent<HTMLParagraphElement>,
    city: string,
    cityIndex: number
  ) => {
    if (e.key === "Enter") {
      setCityOptions(cityIndex);
      setInputValue("city", city!, { shouldValidate: true });
      document.body.style.overflow = "auto";
      toggle();
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="w-[260px] absolute rounded-md shadow-[0_10px_25px_rgba(0,0,0,0.1)] z-50 bg-[#111111]"
        ref={cityContainerRef}
      >
        <div className="py-3">
          <DropDownOption
            city="Itagui"
            cityIndex={0}
            clickOptionFn={() => {
              setInputValue("city", "Itagui", { shouldValidate: true });
              document.body.style.overflow = "auto";
              toggle();
              setCityOptions(0);
            }}
            enterKeyPressd={enterKeyPressd}
          />
          <DropDownOption
            city="Envigado"
            cityIndex={1}
            clickOptionFn={() => {
              setInputValue("city", "Envigado", {
                shouldValidate: true,
              });
              document.body.style.overflow = "auto";
              toggle();
              setCityOptions(1);
            }}
            enterKeyPressd={enterKeyPressd}
          />
          <DropDownOption
            city="Sabaneta"
            cityIndex={2}
            clickOptionFn={() => {
              setInputValue("city", "Sabaneta", {
                shouldValidate: true,
              });
              document.body.style.overflow = "auto";
              toggle();
              setCityOptions(2);
            }}
            enterKeyPressd={enterKeyPressd}
          />
        </div>
      </motion.div>
      <DropDownCover
        onClickFn={() => {
          toggle();
          document.body.style.overflow = "auto";
          // setCityOptions(0);
        }}
      />
    </>
  );
};

export default DropDownContainer;
