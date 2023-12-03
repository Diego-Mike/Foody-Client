import { MapPinIcon } from "@heroicons/react/24/outline";
import { FC } from "react";

export interface BusinessTitleProps {
  businessName: string;
  businessCity: string;
  businessAddress: string;
}

const BusinessTitle: FC<BusinessTitleProps> = ({
  businessAddress,
  businessCity,
  businessName,
}) => {
  return (
    <>
      <h1 className="text-lg text-[#EA7C69]">{businessName}</h1>
      <div className="flex pt-1">
        <MapPinIcon className="w-5 text-white" />
        <span className="text-[#ABBBC2] font-light text-sm pl-1">
          {businessCity}, {businessAddress}
        </span>
      </div>
    </>
  );
};

export default BusinessTitle;
