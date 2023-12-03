"use client";
import BackgroundImg from "@/components/atoms/crearNegocio/BackgroundImg";
import NewBusinessForm from "@/components/organisms/createBusiness/NewBusinessForm";
import { useStore } from "@/globalState";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const CreateBusiness = () => {
  const route = useRouter();
  const user = useStore((store) => store.user);
  useEffect(() => {
    if (user.is_business_member || user.username === "") {
      route.push("/");
    }
  }, []);

  return (
    <main className="bg-[rgb(38,40,54)]">
      <BackgroundImg />
      <NewBusinessForm />
    </main>
  );
};

export default CreateBusiness;
