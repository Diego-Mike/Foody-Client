"use client";
import { FC } from "react";
import { GetUserRsp } from "@/apiCalls/types";
import { useLogout, useUpdateUserInfo } from "@/customHooks";
import HomeLink from "@/components/molecules/home/HomeLink";
import {
  ArchiveBoxIcon,
  ArrowRightOnRectangleIcon,
  ArrowTrendingUpIcon,
  BellAlertIcon,
  BookmarkIcon,
  BriefcaseIcon,
  Cog6ToothIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import LeftbarLink from "@/components/molecules/home/LeftbarLink";
import { PlusIcon } from "@heroicons/react/24/solid";
import LeftbarProfile from "@/components/molecules/home/LeftbarProfile";
import { useRouter } from "next/navigation";
import { useStore } from "@/globalState";

interface Props {
  loading: boolean;
  loggedIn: boolean;
  user?: GetUserRsp;
}

const Leftbar: FC<Props> = ({ loggedIn, user, loading }) => {
  useUpdateUserInfo({
    userData: user
      ? {
          email: user!.email,
          picture: user!.picture,
          social_id: user!.social_id,
          user_id: user!.user_id,
          username: user!.username,
          business_id: user?.business_id,
          business_position: user?.business_position,
          is_business_member: user?.is_business_member,
        }
      : undefined,
    reservation: user?.user_reservation,
  });

  const route = usePathname();
  const navigation = useRouter();

  const [currentUser] = useStore((state) => [state.user]);
  const isBusinessMember =
    user?.is_business_member || currentUser.is_business_member;

  const { mutate, isLoading, error, isError } = useLogout();

  // FIXME: when clicking something, if not logged in, redirect to login

  return (
    <nav className="fixed left-0 top-0 bottom-0 w-[17%] bg-[#111111] z-50 flex justify-center min-h-screen overflow-y-scroll">
      <div className="w-[87%] mt-8 mb-3">
        <HomeLink />

        <LeftbarLink
          linkName="Reservar comida"
          LinkIcon={
            <HomeIcon
              className={`w-[26px] h-[26px] ${
                route === "/" ? "text-white" : "text-[#ABBBC2]"
              }`}
            />
          }
          selected={route === "/"}
          customStyles="mt-12"
        />

        <LeftbarLink
          linkName={`${isBusinessMember ? "Mi negocio" : "Mi reservación"}`}
          LinkIcon={
            <>
              {isBusinessMember ? (
                <BriefcaseIcon className="w-[26px] h-[26px] text-[#ABBBC2]" />
              ) : (
                <BookmarkIcon className="w-[26px] h-[26px] text-[#ABBBC2]" />
              )}
            </>
          }
          selected={false}
          customStyles="mt-7"
          onClickFn={() => {}}
        />

        <LeftbarLink
          linkName={`${isBusinessMember ? "Dashboard" : "Notificaciones"}`}
          LinkIcon={
            <>
              {isBusinessMember ? (
                <ArrowTrendingUpIcon className="w-[26px] h-[26px] text-[#ABBBC2]" />
              ) : (
                <BellAlertIcon className="w-[26px] h-[26px] text-[#ABBBC2]" />
              )}
            </>
          }
          selected={false}
          customStyles="mt-7"
          onClickFn={() => {
            if (isBusinessMember) {
              navigation.push(`/negocio/${user?.business_id}/admin`);
            } else {
            }
          }}
        />

        <LeftbarLink
          linkName={`${
            isBusinessMember ? "Configuraciones" : "Antes reservado"
          } `}
          LinkIcon={
            <>
              {isBusinessMember ? (
                <Cog6ToothIcon className="w-[26px] h-[26px] text-[#ABBBC2]" />
              ) : (
                <ArchiveBoxIcon className="w-[26px] h-[26px] text-[#ABBBC2]" />
              )}
            </>
          }
          selected={false}
          customStyles="mt-7"
          onClickFn={() => {
            if (isBusinessMember) {
              navigation.push(
                `/negocio/${user?.business_id}/admin/configuraciones?option=1`
              );
            } else {
            }
          }}
        />

        <LeftbarLink
          linkName={`${
            isBusinessMember ? "Mis reservaciónes" : "Crear negocio"
          }`}
          LinkIcon={
            <>
              {isBusinessMember ? (
                <BookmarkIcon className="w-[26px] h-[26px] text-[#ABBBC2]" />
              ) : (
                <PlusIcon className="w-[26px] h-[26px] text-[#ABBBC2]" />
              )}
            </>
          }
          selected={false}
          customStyles="mt-7"
          onClickFn={() => {
            if (isBusinessMember) {
            } else {
              navigation.push("/negocio");
            }
          }}
        />

        <LeftbarProfile loading={loading} loggedIn={loggedIn} user={user} />
        {loggedIn && (
          <LeftbarLink
            linkName="Cerrar sesión"
            LinkIcon={
              <ArrowRightOnRectangleIcon className="w-[26px] h-[26px] text-[#ABBBC2]" />
            }
            selected={false}
            onClickFn={() => {
              if (!isLoading) {
                mutate();
              }
            }}
            customStyles={`mt-7 ${
              isLoading && "opacity-50 pointer-events-none"
            }`}
          />
        )}
      </div>
    </nav>
  );
};

export default Leftbar;
