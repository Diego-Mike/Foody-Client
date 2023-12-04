"use client";
import BusinessInfo, {
  BusinessInfoProps,
} from "@/components/molecules/negocio/BusinessInfo";
import BusinessUbication, {
  BusinessUbicationProps,
} from "@/components/molecules/negocio/BusinessUbication";
// import { useUpdateUserAccess } from "@/customHooks";
import { FC } from "react";

interface Props {
  businessInfo: BusinessInfoProps;
  businessUbication: BusinessUbicationProps;
  accessToken?: string;
}

const BusinessHeader: FC<Props> = ({
  businessInfo,
  accessToken,
  businessUbication,
}) => {
  // useUpdateUserAccess({ accessToken });

  return (
    <header className="relative w-full mt-4 h-[345px] rounded-xl">
      <BusinessUbication {...businessUbication} />
      <BusinessInfo {...businessInfo} />
    </header>
  );
};

export default BusinessHeader;
