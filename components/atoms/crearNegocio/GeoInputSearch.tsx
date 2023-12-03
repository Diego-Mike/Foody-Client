import { IBusinessForm } from "@/components/organisms/createBusiness/NewBusinessForm";
import { FC, KeyboardEvent } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

interface Props {
  register: UseFormRegister<IBusinessForm>;
  onKeyDownFn: (e: KeyboardEvent<HTMLInputElement>) => void;
  loading: boolean;
  inputErr?: FieldError;
}

const GeoInputSearch: FC<Props> = ({
  register,
  onKeyDownFn,
  loading,
  inputErr,
}) => {
  return (
    <input
      type="text"
      autoComplete="off"
      role="presentation"
      placeholder="cra 52A #42-54"
      {...register("address", {
        required: true,
      })}
      onKeyDown={onKeyDownFn}
      className={`w-[80%] pl-[38px] pr-2 py-3  text-sm text-[#E0E6E9] bg-transparent border-b focus:outline-none ${
        inputErr ? "border-[rgb(191,22,80)]" : "border-orange-300"
      }`}
      disabled={loading}
    />
  );
};

export default GeoInputSearch;
