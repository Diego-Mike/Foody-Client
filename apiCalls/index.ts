import axios, { AxiosError } from "axios";
import { SuccessfullResponse } from "./types";

export const foodyApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_FOODY_API,
  headers: {
    "foody-api-key": process.env.NEXT_PUBLIC_FOODY_API_KEY,
  },
  withCredentials: true,
  timeout: 10000,
});

foodyApi.interceptors.response.use(undefined, async (error: AxiosError) => {
  const originalRequest = error.config;

  // check 401 is returned and client side is running
  if (error.response?.status === 401 && !(typeof window === "undefined")) {
    const foodyApiUrl = `${process.env.NEXT_PUBLIC_FOODY_API!}/access-token`;

    // generate new access token
    await axios
      .post<SuccessfullResponse<{ access_token: string; msg: string }>>(
        foodyApiUrl,
        {},
        { headers: originalRequest?.headers, withCredentials: true }
      )
      .then(async (response) => {
        return foodyApi.request(originalRequest!);
      })
      .catch((err) => {
        if (err.response) {
          // we got back response from server
          // @ts-ignore
          if (error.response?.data?.error && !(typeof window === "undefined")) {
            // FIXME: push route to login view
            // import("next/navigation").then((lib) => {
            //   const router = lib.useRouter();
            //   router.push("/?view=login");
            // });
          }
          console.log("response from server", error.response?.data);
        } else if (error.request) {
          // no response from server, probably status code 500
          console.log("server down - network problem", error.request);
        } else {
          // something else in the interceptor failed
          console.log("something failed with the interceptor", error.message);
        }

        return Promise.reject(error);
      });

    return foodyApi.request(originalRequest!);
  }

  return Promise.reject(error);
});
