import React, { FC } from "react";

// FIXME: make this a global component

interface Props {
  width: string;
  height: string;
}

const GeoLoadingReq: FC<Props> = ({ width, height }) => {
  return (
    <div
      className={`animate-spin ${width} ${height} border-[2px] border-current border-t-transparent text-[#EA7C69] rounded-full`}
    />
  );
};

export default GeoLoadingReq;
