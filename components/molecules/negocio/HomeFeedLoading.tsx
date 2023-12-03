import BusinessFoodLoading from "@/components/atoms/home/BusinessFoodLoading";
import BusinessTitleLoading from "@/components/atoms/home/BusinessTitleLoading";
import React from "react";

const HomeFeedLoading = () => {
  return (
    <>
      <div className="w-full mb-10">
        {/* title */}
        <BusinessTitleLoading />
        {/* foods */}
        <div className="flex flex-row flex-wrap justify-between w-full pt-16">
          <BusinessFoodLoading />
          <BusinessFoodLoading />
          <BusinessFoodLoading />
        </div>
      </div>

      <div className="w-full mb-10">
        {/* title */}
        <BusinessTitleLoading />
        {/* foods */}
        <div className="flex flex-row flex-wrap justify-between w-full pt-16">
          <BusinessFoodLoading />
          <BusinessFoodLoading />
          <BusinessFoodLoading />
        </div>
      </div>

      <div className="w-full mb-10">
        {/* title */}
        <BusinessTitleLoading />
        {/* foods */}
        <div className="flex flex-row flex-wrap justify-between w-full pt-16">
          <BusinessFoodLoading />
          <BusinessFoodLoading />
          <BusinessFoodLoading />
        </div>
      </div>
    </>
  );
};

export default HomeFeedLoading;
