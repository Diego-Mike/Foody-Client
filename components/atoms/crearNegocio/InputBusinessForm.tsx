import { IBusinessForm } from "@/components/organisms/createBusiness/NewBusinessForm";
import { FC, KeyboardEvent } from "react";
import { FieldError, RegisterOptions, UseFormRegister } from "react-hook-form";

type BusinessInputName =
  | "name"
  | "city"
  | "owner"
  | "clients_max_amount"
  | "presentation"
  | "address";

export interface BusinessFormInputProps {
  type?: "number";
  inputName: BusinessInputName;
  inputErr?: FieldError;
  register: UseFormRegister<IBusinessForm>;
  rules: RegisterOptions<IBusinessForm, BusinessInputName>;
  maxLength?: number;
  placeHolder: string;
  readOnly?: boolean;
  onKeyUpFn?: (e: KeyboardEvent<HTMLInputElement>) => Promise<void>;
  onClickFn?: () => Promise<void>;
  width: string;
}

const InputBusinessForm: FC<BusinessFormInputProps> = ({
  type,
  inputName,
  inputErr,
  register,
  rules,
  maxLength,
  placeHolder,
  readOnly,
  onClickFn,
  onKeyUpFn,
  width,
}) => {
  return (
    <input
      type={type ? type : "text"}
      autoComplete="off"
      role="presentation"
      placeholder={placeHolder}
      maxLength={maxLength}
      readOnly={readOnly}
      {...register(inputName, rules)}
      className={`${width} text-[#E0E6E9] pl-[38px] pr-3 py-3 rounded-lg bg-[rgba(45,48,62)] border text-sm focus:outline-none ${
        inputErr ? "border-[rgb(191,22,80)]" : "border-[rgb(57,60,73)]"
      }`}
      onKeyUp={onKeyUpFn && onKeyUpFn}
      onClick={onClickFn && onClickFn}
    />
  );
};

export default InputBusinessForm;
