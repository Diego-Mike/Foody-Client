import { FC } from "react";

interface Props {
  businessName: string;
}

const BusinessTitle: FC<Props> = ({ businessName }) => {
  return <h3 className="text-2xl font-medium text-white">{businessName}</h3>;
};

export default BusinessTitle;
