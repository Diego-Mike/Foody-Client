import { FC } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

import { NewFoodForm } from "@/components/molecules/configuraciones/businessMenu/FoodModal";

interface Props {
  inputRegister: UseFormRegister<NewFoodForm>;
  inputErrValidation?: FieldError;
}

const InsertTitleFood: FC<Props> = ({ inputRegister, inputErrValidation }) => {
  return (
    <textarea
      className={`w-[220px] h-[70px] resize-none text-white text-[15px] focus:outline-none bg-transparent text-center mt-5 pt-1 ${
        inputErrValidation && "border border-[rgb(191,22,80)] rounded-lg"
      }`}
      placeholder="Titulo de la comida"
      maxLength={55}
      {...inputRegister("title", { required: true })}
    />
  );
};

export default InsertTitleFood;
