import { ServerResponse, userApi } from "@/apiCalls/users/serverResponse";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

const getAccessToken = () => {
  return userApi.post<ServerResponse>(
    "/access-token",
    {},
    { withCredentials: true }
  );
};

interface props {
  onSuccess: (
    data: AxiosResponse<ServerResponse, any>,
    variables: void,
    context: unknown
  ) => void;
  onError: (error: unknown, variables: void, context: unknown) => void;
}

export const useGetAccessToken = ({ onSuccess, onError }: props) => {
  return useMutation({
    mutationFn: getAccessToken,
    onSuccess: onSuccess,
    onError: onError,
  });
};
