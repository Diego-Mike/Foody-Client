import { cookies } from "next/headers";
import BusinessHeader from "@/components/organisms/negocio/BusinessHeader";
import { redirect } from "next/navigation";
import BusinessAsideBar from "@/components/organisms/negocio/BusinessAsideBar";
import { Business, SuccessfullResponse } from "@/apiCalls/types";

interface BusinessFetch {
  business: Business;
  accessToken?: string;
}

// const fetchBusiness = async (
//   businessId: string
// ): Promise<BusinessFetch | undefined> => {
//   // FIXME: protect routes, if not signed in, redirect them to home page
//   const refreshToken = cookies().get("refresh-token");
//   // console.log("refresh token", refreshToken);
//   if (!refreshToken) {
//     return undefined;
//   }

//   const accessToken = foodyApi.defaults.headers.common.Authorization;
//   let newAccessToken: string | undefined = undefined;
//   console.log("access token server side", accessToken);

//   if (!accessToken) {
//     // console.log("get new access token");
//     const getAccessToken = await foodyApi.post<
//       SuccessfullResponse<{ access_token: string }>
//     >(
//       "/access-token",
//       {},
//       {
//         headers: {
//           Cookie: cookies().toString(),
//         },
//       }
//     );
//     newAccessToken = getAccessToken.data.rsp.access_token;
//     foodyApi.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
//     // console.log("access token", getAccessToken.data);
//   }

//   // get business
//   const business = await foodyApi.get<SuccessfullResponse<Business>>(
//     `/businesses/${businessId}`,
//     {
//       headers: {
//         Cookie: cookies().toString(),
//       },
//     }
//   );

//   // console.log("response", business.data);

//   return {
//     business: business.data.rsp,
//     accessToken: newAccessToken,
//   };
// };

const Business = async ({ params }: { params: { "business-id": string } }) => {
  const businessData = undefined;
  //await fetchBusiness(params["business-id"]);

  // FIXME: change this, if api return 404, that means business does not exist
  if (!businessData) {
    redirect("/");
  }

  return (
    <main className="bg-[rgb(38,40,54)] min-h-screen">
      <div className="w-[97%] flex flex-col justify-center m-auto">
        {/* <BusinessHeader
          businessInfo={{
            businessTitle: {
              businessAddress: businessData?.business.address,
              businessCity: businessData?.business.city,
              businessName: businessData?.business.name,
            },
          }}
          businessUbication={{
            lat: parseFloat(businessData.business.latitude),
            lng: parseFloat(businessData.business.longitude),
          }}
          accessToken={businessData.accessToken}
        /> */}

        {/* content */}
        <div className="flex justify-between w-full mt-5">
          {/* <BusinessAsideBar
            presentation={businessData.business.presentation}
            clients_max_amount={businessData.business.clients_max_amount}
          /> */}
          {/* food to order */}
          <section className="w-[75%]">
            <h2 className="text-xl font-medium text-white">
              Elección De Comida
            </h2>
            <div className="flex flex-wrap w-full mt-[70px]">
              <article className="w-60 h-64 bg-[#1F1D2B] rounded-2xl relative flex flex-col items-center">
                {/* imagen */}
                <div
                  // whileHover={{ scale: 1.05 }}
                  className="absolute top-[-40px] h-24 bg-white bg-opacity-80 w-[80%] rounded-xl cursor-pointer"
                ></div>
                {/* info */}
                <p className="text-center w-[80%] text-white text-sm mt-20">
                  Hamburgesa monster gigante
                </p>
                <span className="mt-2 text-sm font-light text-white">
                  $ 15.000
                </span>
                <span className="text-[#ABBBC2] font-light mt-2 text-sm">
                  15 disponibles
                </span>
                {/* order */}
                <button
                  type="button"
                  className="bg-[#EA7C69] py-2 px-4 rounded-lg text-white text-sm mt-4"
                >
                  +
                </button>
              </article>
            </div>
          </section>
        </div>
        {/* reviews */}
        <footer></footer>
      </div>
    </main>
  );
};

export default Business;
