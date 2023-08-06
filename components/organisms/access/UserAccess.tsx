"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AxiosResponse } from "axios";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useStore } from "@/globalState";
import { ServerResponse } from "@/apiCalls/users/serverResponse";
import { useGetAccessToken } from "@/customHooks/useGetAccessToken";

const UserAccess = () => {
  const updateAccessToken = useStore((state) => state.updateAccessToken);

  const router = useRouter();

  const onSuccess = (resp: AxiosResponse<ServerResponse, any>) => {
    // console.log('access token api response');
    // console.log(resp);
    updateAccessToken(resp.data.data);
    router.push("/");
  };

  const onError = (error: unknown) => {
    console.log("access token api call failed");
    console.log(error);
  };

  const { mutate } = useGetAccessToken({
    onSuccess,
    onError,
  });

  useEffect(() => {
    mutate();
  }, []);

  return (
    <motion.div
      animate={{ y: [0, -50, 0] }}
      transition={{
        ease: "easeInOut",
        repeat: Infinity,
        duration: 2.5,
      }}
    >
      <Image
        src={"/login/loading.svg"}
        alt="Loading image"
        width={200}
        height={200}
      />
    </motion.div>
  );
};

export default UserAccess;
