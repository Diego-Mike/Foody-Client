import { NewFoodForm } from "@/components/molecules/configuraciones/businessMenu/FoodModal";
import { FC } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

interface Props {
  inputRegister: UseFormRegister<NewFoodForm>;
  inputErrValidation?: FieldError;
}

const InsertFoodDescription: FC<Props> = ({
  inputRegister,
  inputErrValidation,
}) => {
  return (
    <textarea
      className={`w-[245px] h-24 resize-none text-[#ABBBC2] text-sm focus:outline-none bg-transparent text-center mt-3 pt-1 ${
        inputErrValidation && "border border-[rgb(191,22,80)] rounded-lg"
      }`}
      placeholder="Descripción opcional de la comida"
      maxLength={150}
      {...inputRegister("description", { required: false })}
    />
  );
};

export default InsertFoodDescription;
