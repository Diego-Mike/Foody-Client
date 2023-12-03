"use client";
import BusinessAsideCardTitle from "@/components/atoms/negocio/BusinessAsideCardTitle";
import { FC, ReactNode } from "react";

interface Props {
  title: string;
  containerCustomStyles?: string;
  children: ReactNode;
}

const BusinessAsideCard: FC<Props> = ({
  containerCustomStyles,
  title,
  children,
}) => {
  return (
    <article
      className={`w-full bg-[rgba(17,17,17)] rounded-lg overflow-hidden ${
        containerCustomStyles && containerCustomStyles
      }`}
    >
      <div className="w-[85%] m-auto py-4">
        <BusinessAsideCardTitle title={title} />
        {children}
      </div>
    </article>
  );
};

export default BusinessAsideCard;
