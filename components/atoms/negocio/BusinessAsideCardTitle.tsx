import { FC } from "react";

interface Props {
  title: string;
}

const BusinessAsideCardTitle: FC<Props> = ({ title }) => {
  return <h2 className="text-base text-white">{title}</h2>;
};

export default BusinessAsideCardTitle;
