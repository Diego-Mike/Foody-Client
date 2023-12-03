import { foodyApi } from "@/apiCalls";
import { SuccessfullResponse } from "@/apiCalls/types";
import { useStore } from "@/globalState";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export interface CreateBusinessPayload {
  name: string;
  city: string;
  address: string;
  latitude: string;
  longitude: string;
  presentation: string;
  clients_max_amount?: number;
  user_id: number;
  business_position: "Dueño" | "Administrador" | "Empleado";
}

const createBusiness = (payload: CreateBusinessPayload) => {
  return foodyApi.post<SuccessfullResponse<{ business_id: number }>>(
    "/businesses",
    payload
  );
};

export const useCreateBusiness = () => {
  const updateUserBusinessCreator = useStore(
    (state) => state.updateUserBusinessCreator
  );

  const router = useRouter();

  const onSuccess = (
    { data }: AxiosResponse<SuccessfullResponse<{ business_id: number }>, any>,
    variables: CreateBusinessPayload,
    context: unknown
  ) => {
    // console.log("data", data);
    router.push(
      `/negocio/${data.rsp.business_id}/admin/configuraciones?option=1`
    );
    updateUserBusinessCreator({
      business_id: data.rsp.business_id,
      business_position: "Dueño",
    });
    toast("Negocio creado exitosamente !", {
      autoClose: 3000,
      type: "success",
      theme: "dark",
    });
  };

  const onError = (
    error: any,
    variables: CreateBusinessPayload,
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
      autoClose: 4000,
      type: "error",
      theme: "dark",
    });
  };

  return useMutation(
    (paylod: CreateBusinessPayload) => createBusiness(paylod),
    { onSuccess, onError }
  );
};
