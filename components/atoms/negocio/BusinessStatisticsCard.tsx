import { FC } from "react";

interface Props {
  statistic: number;
  statisticName: string;
  containerCustomStyles?: string;
}

const BusinessStatistics: FC<Props> = ({
  containerCustomStyles,
  statistic,
  statisticName,
}) => {
  return (
    <div
      className={`w-24 h-full bg-[#EA6A12] flex flex-col rounded-lg justify-center items-center ${
        containerCustomStyles && containerCustomStyles
      }`}
    >
      <span className="font-medium text-center text-white">{statistic}</span>
      <span className="pt-1 text-sm font-light text-center text-white">
        {statisticName}
      </span>
    </div>
  );
};

export default BusinessStatistics;
