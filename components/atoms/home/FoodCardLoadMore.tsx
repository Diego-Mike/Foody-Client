import React, { FC } from "react";
import LoadingSpinner from "../global/LoadingSpinner";

interface Props {
  intersectionRef: (node?: Element | null | undefined) => void;
  loading: boolean;
}

const FoodCardLoadMore: FC<Props> = ({ intersectionRef, loading }) => {
  return (
    <footer
      className="flex items-center justify-center w-full h-10 mb-7"
      ref={intersectionRef}
    >
      {loading && (
        <LoadingSpinner width="w-10" height="h-10" color="text-[#EA7C69]" />
      )}
    </footer>
  );
};

export default FoodCardLoadMore;
