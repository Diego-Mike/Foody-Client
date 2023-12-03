import { foodyApi } from "@/apiCalls";
import { BusinessFood, SuccessfullResponse } from "@/apiCalls/types";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { toast } from "react-toastify";

export interface CreateFoodPayload {
  food_img: string;
  food_title: string;
  food_description?: string;
  food_price: number;
  food_available_per_day?: number;
}

const createFood = (payload: CreateFoodPayload, businessId: string) => {
  return foodyApi.post<SuccessfullResponse<BusinessFood>>(
    `/businesses/${businessId}/foods`,
    payload
  );
};

export const useCreateFood = (businesId: string, toggle: () => void) => {
  const onSuccess = (
    { data }: AxiosResponse<SuccessfullResponse<BusinessFood>, any>,
    variables: CreateFoodPayload,
    context: unknown
  ) => {
    toggle();
    toast("Comida creada !", {
      autoClose: 2000,
      type: "success",
      theme: "dark",
    });
    // TODO: add food to list
  };

  const onError = (
    error: unknown,
    variables: CreateFoodPayload,
    context: unknown
  ) => {
    // let's check for errors
    console.log("problems creating new food", error);
    toast("Algo ha salido mal, re intentalo por fa !", {
      autoClose: 4000,
      type: "error",
      theme: "dark",
    });
  };

  return useMutation(
    (payload: CreateFoodPayload) => createFood(payload, businesId),
    {
      onError,
      onSuccess,
    }
  );
};
