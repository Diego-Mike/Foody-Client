import { User } from "@/apiCalls/users";
import { create } from "zustand";

interface State {
  accessToken: string;
  user: User;
}

interface Action {
  updateAccessToken: (accessToken: State["accessToken"]) => void;
  updateUser: (user: State["user"]) => void;
}

export const useStore = create<State & Action>((set) => ({
  accessToken: "",
  updateAccessToken: (accessToken) => set(() => ({ accessToken: accessToken })),
  user: {
    email: "",
    picture: "",
    provider: "",
    social_id: "",
    user_id: 0,
    username: "",
  },
  updateUser: (currentUser) => set(() => ({ user: currentUser })),
}));
