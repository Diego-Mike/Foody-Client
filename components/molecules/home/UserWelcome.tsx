"use client";
import { useStore } from "@/globalState";
import Image from "next/image";
import { FC } from "react";

interface Props {
  loading: boolean;
}

const UserWelcome: FC<Props> = ({ loading }) => {
  const user = useStore((state) => state.user);

  return (
    <div className="flex flex-row justify-between w-full overflow-hidden h-[280px]">
      {loading ? (
        <>
          <div className="w-[57%] h-full rounded-xl animate-pulse bg-gray-200"></div>
          <div className="w-[38%] h-full rounded-xl animate-pulse bg-gray-200"></div>
        </>
      ) : (
        <>
          <div className="w-[60%] h-full bg-gradient-to-r from-white to-[rgba(255,255,255,0.2)] rounded-xl flex items-center pl-6">
            <div className="min-w-[40%] h-[80%] flex flex-col justify-center">
              <span className="text-xs text-[#EA6A12]">
                👑 Oferta de bienvenida
              </span>
              <h1 className="pt-6 pb-5 text-3xl">
                Hola {user.username && user.username}
              </h1>
              <p className="text-[#959895] text-sm pb-3">
                Ahorra <span className="text-[#EA6A12]"> 10% </span>
                con tu primera
                <span className="text-[#EA6A12]"> reservación </span>
              </p>
              <button className="w-28 text-sm text-white py-2 bg-[#EA6A12] rounded-3xl">
                Ver Menu
              </button>
            </div>
          </div>

          <div className="w-[40%] h-full bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-white rounded-xl flex flex-col items-center justify-end">
            <Image
              src={"/food/burger.png"}
              alt="burger offer"
              width={190}
              height={100}
              quality={100}
            />
            <span className="pt-6 pb-3 text-2xl">50% Descuento</span>
            <p className="text-[#959895] text-sm pb-6">
              por reserva de 4 personas en
              <span className="text-[#EA6A12] text-opacity-80 cursor-pointer hover:text-opacity-100 transition duration-200">
                &nbsp;Mandigas Calatrava
              </span>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default UserWelcome;
