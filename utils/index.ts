export const getGoogleAuthUrl = (): string => {
  const rootUrl = "https://accounts.google.com/o/oauth2/auth";

  console.log("google oauth option", {
    redirect_uri: process.env.FOODY_API,
    client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  });

  const options = {
    redirect_uri: process.env.NEXT_PUBLIC_GOOGLE_OAUTH_REDIRECT_URL as string,
    client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
    access_type: "offline",
    response_type: "code",
    prompt: "consent",
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ].join(" "),
  };
  // console.log("google oauth option", { options });
  const qs = new URLSearchParams(options);
  // console.log(qs.toString());

  return `${rootUrl}?${qs.toString()}`;
};

export const getFacebookAuthUrl = (): string => {
  const baseUrl = "https://www.facebook.com/v18.0/dialog/oauth";

  // console.log("facebook client id", process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID);
  // console.log(
  //   "facebook oauth redirect url",
  //   process.env.NEXT_PUBLIC_FACEBOOK_OAUTH_REDIRECT_URL
  // );

  const parameters = {
    client_id: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID as string,
    redirect_uri: process.env.NEXT_PUBLIC_FACEBOOK_OAUTH_REDIRECT_URL as string,
    scope: "email,public_profile",
  };
  // console.log({ options });
  const qs = new URLSearchParams(parameters);
  // console.log(qs.toString());

  return `${baseUrl}?${qs.toString()}`;
};

export const TransformSecureCookieEnv = (): boolean => {
  if (process.env.SECURE_COOKIE === "false") {
    return false;
  } else if (process.env.SECURE_COOKIE === "true") {
    return true;
  }

  return false;
};
