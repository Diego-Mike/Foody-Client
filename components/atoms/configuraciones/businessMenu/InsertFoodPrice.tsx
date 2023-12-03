import { NewFoodForm } from "@/components/molecules/configuraciones/businessMenu/FoodModal";
import { FC } from "react";
import {
  FieldError,
  UseFormResetField,
  UseFormSetError,
  UseFormSetValue,
} from "react-hook-form";
import { NumericFormat } from "react-number-format";

interface Props {
  inputValue: number;
  setValue: UseFormSetValue<NewFoodForm>;
  setError: UseFormSetError<NewFoodForm>;
  inputErr?: FieldError;
  resetField: UseFormResetField<NewFoodForm>;
}

const InsertFoodPrice: FC<Props> = ({
  inputValue,
  setValue,
  inputErr,
  setError,
  resetField,
}) => {
  return (
    <NumericFormat
      name="price"
      className={`w-16 ml-1 text-sm text-white bg-transparent border-b focus:outline-none ${
        inputErr ? "border-[rgb(191,22,80)]" : "border-white"
      }`}
      value={inputValue}
      inputMode="numeric"
      thousandSeparator=","
      decimalScale={0}
      prefix="$ "
      placeholder={"$ 350,000"}
      maxLength={15}
      onValueChange={({ floatValue }) => {
        if (!floatValue) {
          resetField("price");
          setError("price", { type: "required" }, { shouldFocus: true });
          console.log("reset field");
        } else {
          setValue("price", floatValue!, { shouldValidate: true });
        }
      }}
    />
  );
};

export default InsertFoodPrice;
