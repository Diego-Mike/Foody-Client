import { foodyApi } from "@/apiCalls";
import { SuccessfullResponse } from "@/apiCalls/types";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";

const logout = () => {
  // FIXME: if user is using facebook add their logout
  return foodyApi.post<SuccessfullResponse<string>>("/logout", {});
};

export const useLogout = () => {
  const onSuccess = async (
    data: AxiosResponse<SuccessfullResponse<string>, any>,
    variables: void,
    context: unknown
  ) => {
    window.location.reload();
  };

  const onError = (error: any, variables: void, context: unknown) => {
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
  };

  return useMutation({
    mutationFn: logout,
    onSuccess: onSuccess,
    onError: onError,
  });
};
