import InputLabelTitle from "@/components/atoms/crearNegocio/InputLabelTitle";
import { IBusinessForm } from "@/components/organisms/createBusiness/NewBusinessForm";
import { FC } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

interface Props {
  register: UseFormRegister<IBusinessForm>;
  inputErr?: FieldError;
}

const InputBusinessPresentation: FC<Props> = ({ register, inputErr }) => {
  return (
    <div className="pt-7">
      <InputLabelTitle title="Presentación" />
      <textarea
        {...register("presentation", { required: true })}
        className={`text-[#E0E6E9] bg-[rgba(45,48,62)] border text-sm  w-[552px] h-28 rounded-lg focus:outline-none py-3 px-3 resize-none ${
          inputErr ? "border-[rgb(191,22,80)]" : "border-[rgb(57,60,73)]"
        }`}
        placeholder="Las mejores hamburgesas 🍔 de todo itagui mi sog si sabe, y si
          también esta interesadito en combitos bien chimbas con papas
          🍟, bombon de pollo, o carne desmechada, o unas salchipapas se
          le da mi rey"
        maxLength={300}
      />
    </div>
  );
};

export default InputBusinessPresentation;

//Las mejores hamburgesas 🍔 de todo itagui mi sog si sabe, y si
//también esta interesadito en combitos bien chimbas con papas
//🍟, bombon de pollo, o carne desmechada, o unas salchipapas se
//le da mi rey
