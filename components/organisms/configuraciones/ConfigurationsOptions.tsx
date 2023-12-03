import SelectableOption from "@/components/molecules/configuraciones/SelectableOption";
import {
  BuildingStorefrontIcon,
  SquaresPlusIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { Dispatch, FC, SetStateAction } from "react";

interface Props {
  optionSelected: number;
  setOptionSelected: Dispatch<SetStateAction<number>>;
}

const options = [
  {
    optionTitle: "Tu negocio",
    optionDescription: "Visualiza y actualiza la información de tu negocio",
    optionIcon: <BuildingStorefrontIcon className={`w-[22px] text-white`} />,
    componentIndex: 0,
  },
  {
    optionTitle: "Administración de menu",
    optionDescription: "Maneja tu menu y precios",
    optionIcon: <SquaresPlusIcon className={`w-[22px] text-white`} />,
    componentIndex: 1,
  },
  {
    optionTitle: "Administración de empleados",
    optionDescription: "Maneja a tus empleados y sus posiciones",
    optionIcon: <UsersIcon className={`w-[22px] text-white`} />,
    componentIndex: 2,
  },
];

const ConfigurationsOptions: FC<Props> = ({
  optionSelected,
  setOptionSelected,
}) => {
  return (
    <section className="w-[27%] bg-[rgba(17,17,17,1)] flex flex-col rounded-lg overflow-hidden h-[680px]">
      {options.map((params, i) => {
        return (
          <SelectableOption
            key={i}
            {...params}
            setOptionSelected={setOptionSelected}
            optionSelected={optionSelected}
          />
        );
      })}
    </section>
  );
};

export default ConfigurationsOptions;
