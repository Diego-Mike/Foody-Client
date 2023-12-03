import { NewFoodForm } from "@/components/molecules/configuraciones/businessMenu/FoodModal";
import { FC } from "react";
import { UseFormSetValue } from "react-hook-form";
import { NumericFormat } from "react-number-format";

interface Props {
  inputValue?: number;
  setValue: UseFormSetValue<NewFoodForm>;
}

const InsertFoodAmount: FC<Props> = ({ inputValue, setValue }) => {
  return (
    <>
      <NumericFormat
        className="w-12 mr-1 text-sm text-white bg-transparent border-b border-white focus:outline-none"
        value={inputValue}
        maxLength={6}
        placeholder={"?¿"}
        thousandSeparator=","
        decimalScale={0}
        onValueChange={({ floatValue }) => {
          setValue("foodAvailable", floatValue);
        }}
      />
      <span className="text-[#ABBBC2] text-sm">disponible</span>
    </>
  );
};

export default InsertFoodAmount;
