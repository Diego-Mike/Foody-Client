import InputBusinessForm, {
  BusinessFormInputProps,
} from "@/components/atoms/crearNegocio/InputBusinessForm";
import InputIconWrapper from "@/components/atoms/crearNegocio/InputIconWrapper";
import InputLabelTitle from "@/components/atoms/crearNegocio/InputLabelTitle";
import { BuildingStorefrontIcon } from "@heroicons/react/24/solid";
import { FC, KeyboardEvent } from "react";

export interface Props {
  children?: JSX.Element;
  container: {
    containerCustomStyles?: string;
    inputTitle: string;
    arrowPressd?: (e: KeyboardEvent<HTMLInputElement>) => void;
  };
  input: BusinessFormInputProps;
}

const InputContainer: FC<Props> = ({
  children,
  container: { containerCustomStyles, inputTitle, arrowPressd },
  input,
}) => {
  return (
    <div
      className={`${containerCustomStyles && containerCustomStyles}`}
      onKeyDown={arrowPressd}
    >
      {/* label title */}
      <InputLabelTitle title={inputTitle} />
      {/* input insert values */}
      <div className="relative">
        <InputIconWrapper>
          <BuildingStorefrontIcon className="w-[18px] h-[18px] text-white" />
        </InputIconWrapper>
        <InputBusinessForm {...input} />
      </div>
      {children}
    </div>
  );
};

export default InputContainer;
