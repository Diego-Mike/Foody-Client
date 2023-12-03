import { foodyApi } from "@/apiCalls";
import { SuccessfullResponse } from "@/apiCalls/types";
import { useStore } from "@/globalState";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export interface CreateReservationPayload {
  order_schedule?: string | null;
  foods: { food_id: number; amount: number }[];
  notification_title: string;
  notification_description: string;
}

const createReservation = (
  payload: CreateReservationPayload,
  businessId: number
) => {
  return foodyApi.post<SuccessfullResponse<{ reservation_id: number }>>(
    `businesses/${businessId}/reservations`,
    payload
  );
};

export const useCreateReservation = (businessId: number) => {
  const router = useRouter();
  const updateReservationId = useStore((state) => state.updateReservationId);

  const onSuccess = (
    {
      data,
    }: AxiosResponse<SuccessfullResponse<{ reservation_id: number }>, any>,
    variables: CreateReservationPayload,
    context: unknown
  ) => {
    updateReservationId(data.rsp.reservation_id);
    router.push(`/?reservacion=${data.rsp.reservation_id}`);
  };

  const onError = (
    error: any,
    variables: CreateReservationPayload,
    context: unknown
  ) => {
    // let's check for errors
    if (error.response) {
      // we got back response from server
      console.log("response from server", error.response?.data);
    } else if (error.request) {
      // no response from server, probably status code 500
      console.log("probably server down", error.request);
    } else {
      // something else in the interceptor failed
      console.log("something failed with the req", error.message);
    }
    toast("Algo ha salido mal, re intentalo por fa", {
      autoClose: 3000,
      type: "error",
      theme: "dark",
      position: "top-center",
    });
  };

  return useMutation(
    (payload: CreateReservationPayload) =>
      createReservation(payload, businessId),
    { onSuccess, onError }
  );
};
