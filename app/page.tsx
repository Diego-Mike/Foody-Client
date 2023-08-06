import { ServerResponse, userApi } from "@/apiCalls/users";
import Navbar from "@/components/organisms/home/Navbar";
import UserFeed from "@/components/organisms/home/UserFeed";

import { cookies } from "next/headers";

interface User {
  accessToken: string;
  user: any;
}

const fetchUser = async (): Promise<User | undefined> => {
  // get access token
  const refreshToken = cookies().get("refresh-token");
  if (!refreshToken) {
    return undefined;
  }

  const getAccessToken = await userApi.post<ServerResponse<string>>(
    "/access-token",
    {},
    {
      headers: {
        Cookie: cookies().toString(),
      },
    }
  );

  if (getAccessToken.status === 401) {
    console.log(`unauthorized to get access token`);
    return undefined;
  }

  userApi.defaults.headers.common.Authorization = `Bearer ${getAccessToken.data.data}`;

  // get user
  const getUser = await userApi.get<ServerResponse<User>>("/user/me", {
    headers: {
      Cookie: cookies().toString(),
    },
  });

  if (getUser.status === 401) {
    console.log(`unauthorized to get user`);
    return undefined;
  }

  return { accessToken: getAccessToken.data.data!, user: getUser.data.data };
};

export default async function Home() {
  const user = await fetchUser();

  // TODO: add animation after loading, show data smoothly

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-[rgba(252,237,227,0.40)] via-[rgba(255,246,216,0.40)] to-[rgba(255,246,216,0.42)]">
      <Navbar
        loading={false}
        loggedIn={user ? true : false}
        user={user?.user}
        accessToken={user?.accessToken}
      />
      <UserFeed loading={false} />
    </section>
  );
}
