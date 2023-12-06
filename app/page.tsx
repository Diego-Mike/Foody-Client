import { foodyApi } from "@/apiCalls";
import { GetUserRsp, HomeFood, SuccessfullResponse } from "@/apiCalls/types";
import Leftbar from "@/components/organisms/home/Leftbar";
import UserFeed from "@/components/organisms/home/UserFeed";

import { cookies, headers } from "next/headers";
import RightsideBar from "@/components/organisms/home/RightsideBar";

// FIXME: set global scroll bar for the website
// FIXME: revalidating too fast, we don't need to call the API when we come back to the home page

interface HomeData {
  user?: GetUserRsp;
  foods: HomeFood;
}

const fetchHome = async (): Promise<HomeData> => {
  const refreshToken = cookies().get("refresh-token")?.value;
  const accessToken =
    cookies().get("access-token")?.value || headers().get("access-token");
  // console.log("access token", accessToken);
  // console.log("refresh token", refreshToken);

  let user: GetUserRsp | undefined = undefined;
  let homeFeedFods: HomeFood = { home_food: [], next_page: 0 };

  if (!refreshToken) {
    await foodyApi
      .get<SuccessfullResponse<HomeFood>>(
        "/businesses?pageSize=6&afterBusiness=0"
      )
      .then(({ data }) => {
        homeFeedFods = data.rsp;
      });
  } else {
    await Promise.all([
      foodyApi.get<SuccessfullResponse<{ user: GetUserRsp }>>("/users/me", {
        headers: {
          Cookie: [
            `refresh-token=${refreshToken}`,
            `access-token=${accessToken}`,
          ],
        },
      }),
      foodyApi.get<SuccessfullResponse<HomeFood>>(
        "/businesses?pageSize=6&afterBusiness=0"
      ),
    ]).then(([getUser, getFood]) => {
      // console.log("use data", getUser.data.rsp.user.user_reservation);
      user = getUser.data.rsp.user;
      homeFeedFods = getFood.data.rsp;
    });
  }

  return {
    user: user,
    foods: homeFeedFods,
  };
};

export default async function Home() {
  const homeData = await fetchHome();

  return (
    <main className="flex flex-col items-center w-full min-h-screen">
      <Leftbar
        loading={false}
        loggedIn={homeData.user ? true : false}
        user={homeData.user}
      />
      <UserFeed businesses={homeData.foods} loading={false} />
      <RightsideBar />
    </main>
  );
}
