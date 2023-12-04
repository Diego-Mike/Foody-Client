import { NextRequest, NextResponse } from "next/server";
import { SuccessfullResponse } from "./apiCalls/types";
import { TransformSecureCookieEnv } from "./utils";

export const middleware = async (req: NextRequest) => {
  const response = NextResponse.next();
  const refreshToken = req.cookies.get("refresh-token");
  if (!refreshToken) {
    return response;
  }

  const currentAccessToken = req.cookies.get("access-token");
  if (!currentAccessToken) {
    try {
      const generateAccessToken = await fetch(
        `${process.env.FOODY_API}/access-token`,
        {
          method: "POST",
          headers: {
            Cookie: req.cookies.toString(),
            "foody-api-key": process.env.FOODY_API_KEY!,
          },
        }
      );

      if (!generateAccessToken.ok) {
        console.log(
          "Req for access token failed",
          `${generateAccessToken.status} - ${
            (generateAccessToken.statusText, generateAccessToken.text())
          }`
        );
        return response;
      }

      const newAccesToken =
        (await generateAccessToken.json()) as SuccessfullResponse<{
          access_token: string;
          msg: string;
        }>;
      response.cookies.set("access-token", newAccesToken.rsp.access_token, {
        path: "/",
        domain: process.env.FOODY_WEB_DOMAIN,
        maxAge: +process.env.ACCESS_TOKEN_TIME!,
        httpOnly: true,
        secure: TransformSecureCookieEnv(),
      });

      response.headers.set("access-token", newAccesToken.rsp.access_token);
    } catch (err) {
      console.log("Newtwork error", err);
    }
  }

  return response;
};

export const config = {
  matcher: ["/"],
};
