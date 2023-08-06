import axios from "axios";

export const userApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_USER_API,
  withCredentials: true,
});

export type ServerResponse<t> = {
  error: boolean;
  messagge: string;
  data?: t;
};

export interface User {
  user_id: number;
  social_id: string;
  username: string;
  email: string;
  picture: string;
  provider: string;
}
