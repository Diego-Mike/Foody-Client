import { foodyApi } from "@/apiCalls";

import { HomeFood, SuccessfullResponse } from "@/apiCalls/types";
import { useInfiniteQuery } from "@tanstack/react-query";

const getFood = async ({
  afterBusiness,
  pageSize,
}: {
  afterBusiness: number;
  pageSize: number;
}): Promise<HomeFood> => {
  const homeFood = await foodyApi.get<SuccessfullResponse<HomeFood>>(
    `/businesses?pageSize=${pageSize}&afterBusiness=${afterBusiness}`
  );
  return homeFood.data.rsp;
};

export const useGetHomeFood = ({
  pageSize,
  initialHomeFood,
}: {
  pageSize: number;
  initialHomeFood: HomeFood;
}) => {
  return useInfiniteQuery({
    queryKey: ["home-food"],
    queryFn: async ({ pageParam = 0 }) => {
      const data = await getFood({ afterBusiness: pageParam, pageSize });
      return data;
    },
    getNextPageParam: (props) => {
      return props.next_page === 0 ? undefined : props.next_page;
    },
    initialData: {
      pageParams: [initialHomeFood.next_page],
      pages: [initialHomeFood],
    },
  });
};
