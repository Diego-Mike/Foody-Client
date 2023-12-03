import BusinessTitle from "@/components/atoms/home/BusinessTitle";
import { GlobeEuropeAfricaIcon } from "@heroicons/react/24/outline";
import { FC } from "react";

interface Props {
  businessName: string;
  businessCity: string;
}

const BusinessPresentation: FC<Props> = ({ businessCity, businessName }) => {
  return (
    <>
      <BusinessTitle businessName={businessName} />
      <div className="flex items-center pt-1">
        <GlobeEuropeAfricaIcon className="w-4 h-4 text-[#E0E6E9]" />
        <p className="text-[#E0E6E9] font-light text-sm pl-2">
          Ciudad : {businessCity}
        </p>
      </div>
    </>
  );
};

export default BusinessPresentation;
