import { IBusinessForm } from "@/components/organisms/createBusiness/NewBusinessForm";
import { FC } from "react";
import { Control, Controller, FieldError } from "react-hook-form";

interface Props {
  control: Control<IBusinessForm | any>;
  inputErr?: FieldError;
}

const TermsOfService: FC<Props> = ({ control, inputErr }) => {
  return (
    <div className="flex items-center h-5 mt-14">
      <Controller
        name="termsAndConditions"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <input
            type="checkbox"
            className="w-4 h-4"
            {...field}
            value={field.value ? field.value.toString() : undefined}
          />
        )}
      />
      <label
        className={`pl-3 text-sm font-light ${
          inputErr ? "text-[rgb(191,22,80)]" : "text-[#ABBBC2]"
        }`}
      >
        He leído y acepto los términos de servicio y política de privacidad
      </label>
    </div>
  );
};

export default TermsOfService;
