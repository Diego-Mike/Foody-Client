import BusinessStatistics from "@/components/atoms/negocio/BusinessStatisticsCard";
import BusinessTitle, {
  BusinessTitleProps,
} from "@/components/atoms/negocio/BusinessTitle";
import React, { FC } from "react";

export interface BusinessInfoProps {
  businessTitle: BusinessTitleProps;
}

const BusinessInfo: FC<BusinessInfoProps> = ({ businessTitle }) => {
  return (
    <article className="absolute bottom-0 left-0 right-0 z-50 flex items-center justify-center h-20 bg-black bg-opacity-80 rounded-b-xl">
      <div className="w-[95%] h-[65%] flex justify-between">
        <div>
          <BusinessTitle {...businessTitle} />
        </div>

        <div className="flex">
          <BusinessStatistics
            statistic={4}
            statisticName="Estrellas"
            containerCustomStyles="mr-3"
          />
          <BusinessStatistics statistic={128} statisticName="Reviews" />
        </div>
      </div>
    </article>
  );
};

export default BusinessInfo;
