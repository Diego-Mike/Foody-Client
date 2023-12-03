"use client";
import { HomeFood } from "@/apiCalls/types";
import { FC } from "react";
import HomeFeedLoading from "@/components/molecules/negocio/HomeFeedLoading";
import HomeFoods from "./HomeFoods";

interface Props {
  loading: boolean;
  businesses?: HomeFood;
}

const UserFeed: FC<Props> = ({ businesses, loading }) => {
  return (
    <section className="flex justify-center w-full">
      {/* foods */}
      <div className="w-[60%] pt-10 pr-28">
        {loading ? <HomeFeedLoading /> : <HomeFoods businesses={businesses!} />}
      </div>
    </section>
  );
};

export default UserFeed;
