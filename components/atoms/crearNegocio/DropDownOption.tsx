import { FC, KeyboardEvent } from "react";

interface Props {
  city: string;
  cityIndex: number;
  enterKeyPressd: (
    e: KeyboardEvent<HTMLParagraphElement>,
    city: string,
    cityIndex: number
  ) => void;
  clickOptionFn: () => void;
}

const DropDownOption: FC<Props> = ({
  city,
  enterKeyPressd,
  clickOptionFn,
  cityIndex,
}) => {
  return (
    <p
      tabIndex={0}
      className="cursor-pointer px-4 py-3 text-sm text-white focus:bg-[#EA7C69] focus:outline-none hover:bg-[rgba(234,124,105,0.26)] transition-colors ease-in"
      onKeyDown={(e) => {
        enterKeyPressd(e, city, cityIndex);
      }}
      onClick={clickOptionFn}
    >
      {city}
    </p>
  );
};

export default DropDownOption;
