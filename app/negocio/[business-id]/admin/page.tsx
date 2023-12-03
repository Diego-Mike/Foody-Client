"use client";
import InputIconWrapper from "@/components/atoms/crearNegocio/InputIconWrapper";
import { useStore } from "@/globalState";
import {
  CalendarIcon,
  Cog6ToothIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import {
  ArrowTrendingUpIcon,
  ArrowUpIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { AreaChart, Card, Title } from "@tremor/react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const chartdata = [
  {
    date: "Lunes",
    Ganancia: 2890,
  },
  {
    date: "Martes",
    Ganancia: 2756,
  },
  {
    date: "Miércoles",
    Ganancia: 3322,
  },
  {
    date: "Jueves",
    Ganancia: 3470,
  },
  {
    date: "Viernes",
    Ganancia: 3475,
  },
  {
    date: "Sábado",
    Ganancia: 3129,
  },
  {
    date: "Domingo",
    Ganancia: 10234,
  },
];

const chartdata2 = [
  {
    date: "Lunes",
    Completadas: 89,
    Canceladas: 2,
  },
  {
    date: "Martes",
    Completadas: 52,
    Canceladas: 30,
  },
  {
    date: "Miércoles",
    Completadas: 53,
    Canceladas: 23,
  },
  {
    date: "Jueves",
    Completadas: 19,
    Canceladas: 2,
  },
  {
    date: "Viernes",
    Completadas: 92,
    Canceladas: 23,
  },
  {
    date: "Sábado",
    Completadas: 23,
    Canceladas: 4,
  },
  {
    date: "Domingo",
    Completadas: 39,
    Canceladas: 6,
  },
];

const Admin = () => {
  const user = useStore((state) => state.user);

  return (
    <main className="w-full min-h-screen bg-[rgb(38,40,54)] dark relative">
      {/* dashboard */}
      <section className="flex flex-col w-[90.5%] ml-auto mr-7">
        {/* hello to user */}
        <header className="flex items-center justify-between mt-5">
          <div>
            <h1 className="pb-1 text-2xl font-medium text-white">
              Admin Dashboard
            </h1>
            <span className="text-[#ABBBC2] font-light">
              Hola {user.username}, bienvenido al dashboard de tu negocio !
            </span>
          </div>
          <div className="flex items-center justify-center w-[260px] h-16 bg-[rgba(17,17,17,1)] rounded-lg">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[rgba(45,156,219,0.15)]">
              <CalendarIcon className="w-7 text-[#2D9CDB]" />
            </div>
            <div className="flex flex-col ml-3">
              <span className="text-sm text-white">Filtro Fecha</span>
              <span className="text-[#ABBBC2] text-[11px] font-light">
                20 sep 2023 - 25 sep 2023
              </span>
            </div>
            <div className="ml-3">
              <ChevronDownIcon className="w-[22px] text-[#ABBBC2]" />
            </div>
          </div>
        </header>

        {/* info cards */}
        <div className="grid w-full grid-cols-3 gap-4 my-8 place-items-stretch">
          <div className="flex items-center justify-center h-[150px] overflow-hidden bg-[rgba(17,17,17,1)] rounded-lg">
            <div className="pt-3 h-3/4">
              <Image
                src={"/admin/dinero.svg"}
                alt="ordenes"
                width={75}
                height={75}
              />
            </div>
            <div className="pt-3 pl-4 h-3/4">
              <span className="text-3xl font-semibold text-white">
                $ 100.000
              </span>
              <p className="text-sm font-light text-[#ABBBC2] py-1">
                Ganancias
              </p>
              <Image
                src={"/admin/arrow-up.svg"}
                alt="flecha arriba"
                width={22}
                height={22}
              />
            </div>
          </div>

          <div className="flex items-center justify-center h-[150px] overflow-hidden bg-[rgba(17,17,17,1)] rounded-lg">
            <div className="pt-3 h-3/4">
              <Image
                src={"/admin/orden.svg"}
                alt="ordenes"
                width={75}
                height={75}
              />
            </div>
            <div className="pt-3 pl-4 h-3/4">
              <span className="text-3xl font-semibold text-white">75</span>
              <p className="text-sm font-light text-[#ABBBC2] py-1">
                Ordenes totales
              </p>
              <Image
                src={"/admin/arrow-up.svg"}
                alt="flecha arriba"
                width={22}
                height={22}
              />
            </div>
          </div>

          <div className="flex items-center justify-center h-[150px] overflow-hidden bg-[rgba(17,17,17,1)] rounded-lg">
            <div className="pt-3 h-3/4">
              <Image
                src={"/admin/orden-cancelada.svg"}
                alt="ordenes"
                width={75}
                height={75}
              />
            </div>
            <div className="pt-3 pl-4 h-3/4">
              <span className="text-3xl font-semibold text-white">40</span>
              <p className="text-sm font-light text-[#ABBBC2] py-1">
                Ordenes Canceladas
              </p>
              <Image
                src={"/admin/arrow-down.svg"}
                alt="flecha arriba"
                width={22}
                height={22}
              />
            </div>
          </div>
        </div>

        {/* analytics */}
        <div className="flex justify-between mb-8">
          {/* money earned */}
          <Card className="w-[49%]">
            <Title>Ganancias de la semana</Title>
            <AreaChart
              className="h-60"
              data={chartdata}
              index={"date"}
              categories={["Ganancia"]}
              colors={["indigo"]}
              valueFormatter={(number: number) => {
                return `$${Intl.NumberFormat("us").format(number).toString()}`;
              }}
              curveType={"natural"}
            />
          </Card>
          {/* orders, completed and canceled */}
          <Card className="w-[49%]">
            <Title>Ordenes completadas y canceladas</Title>
            <AreaChart
              className="h-60"
              data={chartdata2}
              index={"date"}
              categories={["Completadas", "Canceladas"]}
              colors={["indigo", "red"]}
              valueFormatter={(number: number) => {
                return `${Intl.NumberFormat("us").format(number).toString()}`;
              }}
              curveType={"natural"}
            />
          </Card>
        </div>

        {/* clients history */}
        <div className="flex items-center justify-between w-full mt-1">
          <div>
            <h2 className="text-lg font-medium text-white">
              Historial De Clientes
            </h2>
            <span className="text-sm text-[#ABBBC2] font-light">
              Reservas más recientes de clientes segun la fecha
            </span>
          </div>
          <div className="relative">
            <InputIconWrapper>
              <MagnifyingGlassIcon className="w-4 text-white" />
            </InputIconWrapper>
            <input
              type="text"
              placeholder="Buscar clientes"
              className="w-[225px] bg-[rgb(45,48,62)] text-[#ABBBC2] outline-none border-2 border-[rgb(57,60,73)] py-2 pl-9 pr-3 font-light text-sm rounded-md"
            />
          </div>
        </div>

        {/* table */}
        <div className="w-full bg-[rgba(17,17,17,1)] rounded-lg mt-7">
          {/* list header */}
          <div className="grid w-full h-10 grid-cols-4 shadow-sm place-items-start place-content-center">
            <span className="pl-4 text-sm text-white">Usuario</span>
            <span className="text-sm text-white">Estatus reserva</span>
            <span className="text-sm text-white">Rating</span>
            <span className="text-sm text-white">Costo</span>
          </div>

          {/* content */}
          <div className="grid w-full grid-cols-4 h-14 place-items-start place-content-center">
            <div className="flex items-center h-full pl-4">
              <Image
                src={
                  "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2536413786521623&height=50&width=50&ext=1696903725&hash=AeQ_iM_RyhmqRETFnBE"
                }
                alt="user profile"
                width={30}
                height={30}
                className="rounded-full"
              />
              <span className="text-sm text-[#ABBBC2] pl-2">
                Diego Alejandro Mike
              </span>
            </div>

            <div className="flex items-center h-full">
              <span className="text-sm text-[rgb(80,209,170)] bg-[rgb(107,226,190,0.24)] p-2 rounded-md">
                Finalizada
              </span>
            </div>

            <div className="flex items-center h-full">
              <div className="w-36 bg-white h-[10px] rounded-xl relative">
                <div className="absolute inset-0 w-20 bg-[#ABBBC2] rounded-xl" />
              </div>
              <p className="flex text-sm text-[rgb(80,209,170)] bg-[rgb(107,226,190,0.24)] p-2 ml-3 rounded-md">
                <ArrowUpIcon className="w-4 pr-1 font-bold" />
                60%
              </p>
            </div>

            <div className="flex items-center h-full">
              <span className="text-sm text-[#ABBBC2]">$235.000</span>
            </div>
          </div>
        </div>

        {/* reviews */}
        <h2 className="text-lg font-medium text-white mt-7">
          Reviews De Clientes
        </h2>
        <span className="text-sm text-[#ABBBC2] font-light mt-2 mb-5">
          Opiniones respecto a la experiencia de usuario
        </span>

        <footer className="flex max-w-full mb-5 overflow-x-scroll">
          <article>
            <div className="flex flex-col bg-[rgba(17,17,17,1)] rounded-lg w-96">
              {/* user header */}
              <div className="flex items-center pl-9 pt-7">
                <Image
                  src={
                    "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2536413786521623&height=50&width=50&ext=1696903725&hash=AeQ_iM_RyhmqRETFnBE"
                  }
                  alt="user profile"
                  width={35}
                  height={35}
                  className="rounded-full"
                />
                <div className="flex flex-col pl-3">
                  <span className="text-sm text-white">
                    Diego Alejandro Mike
                  </span>
                  <span className="text-[#ABBBC2] text-xs">Hace 4 horas</span>
                </div>
              </div>
              {/* review */}
              <p className="text-white text-[13px] pl-7 pt-3 text-justify pr-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur, ut praesentium excepturi nisi ab delectus
                exercitationem maxime? Laborum numquam dicta non quisquam veniam
                dolore eius necessitatibus molestias officia. Quaerat, quis?
              </p>
              {/* rating */}
              <div className="flex items-center pt-5 pb-6 pl-7">
                <span>
                  <StarIcon className="w-4 h-4 text-[#F7C604]" />
                </span>
                <span className="pl-1">
                  <StarIcon className="w-4 h-4 text-[#F7C604]" />
                </span>
                <span className="pl-1">
                  <StarIcon className="w-4 h-4 text-[#F7C604]" />
                </span>
                <span className="pl-1">
                  <StarIcon className="w-4 h-4 text-[#B9BBBD]" />
                </span>
                <span className="pl-1">
                  <StarIcon className="w-4 h-4 text-[#B9BBBD]" />
                </span>
                <span className="pl-3 text-lg font-normal text-white">3.0</span>
              </div>
            </div>
          </article>

          <article className="ml-5">
            <div className="flex flex-col bg-[rgba(17,17,17,1)] rounded-lg w-96">
              {/* user header */}
              <div className="flex items-center pl-9 pt-7">
                <Image
                  src={
                    "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2536413786521623&height=50&width=50&ext=1696903725&hash=AeQ_iM_RyhmqRETFnBE"
                  }
                  alt="user profile"
                  width={35}
                  height={35}
                  className="rounded-full"
                />
                <div className="flex flex-col pl-3">
                  <span className="text-sm text-white ">
                    Diego Alejandro Mike
                  </span>
                  <span className="text-[#ABBBC2] text-xs">Hace 4 horas</span>
                </div>
              </div>
              {/* review */}
              <p className="text-white text-[13px] pl-7 pt-3 text-justify pr-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur, ut praesentium excepturi nisi ab delectus
                exercitationem maxime? Laborum numquam dicta non quisquam veniam
                dolore eius necessitatibus molestias officia. Quaerat, quis?
              </p>
              {/* rating */}
              <div className="flex items-center pt-5 pb-6 pl-7">
                <span>
                  <StarIcon className="w-4 h-4 text-[#F7C604]" />
                </span>
                <span className="pl-1">
                  <StarIcon className="w-4 h-4 text-[#F7C604]" />
                </span>
                <span className="pl-1">
                  <StarIcon className="w-4 h-4 text-[#F7C604]" />
                </span>
                <span className="pl-1">
                  <StarIcon className="w-4 h-4 text-[#B9BBBD]" />
                </span>
                <span className="pl-1">
                  <StarIcon className="w-4 h-4 text-[#B9BBBD]" />
                </span>
                <span className="pl-3 text-lg font-normal text-white">3.0</span>
              </div>
            </div>
          </article>

          <article className="ml-5">
            <div className="flex flex-col bg-[rgba(17,17,17,1)] rounded-lg w-96">
              {/* user header */}
              <div className="flex items-center pl-9 pt-7">
                <Image
                  src={
                    "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2536413786521623&height=50&width=50&ext=1696903725&hash=AeQ_iM_RyhmqRETFnBE"
                  }
                  alt="user profile"
                  width={35}
                  height={35}
                  className="rounded-full"
                />
                <div className="flex flex-col pl-3">
                  <span className="text-sm text-white ">
                    Diego Alejandro Mike
                  </span>
                  <span className="text-[#ABBBC2] text-xs">Hace 4 horas</span>
                </div>
              </div>
              {/* review */}
              <p className="text-white text-[13px] pl-7 pt-3 text-justify pr-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur, ut praesentium excepturi nisi ab delectus
                exercitationem maxime? Laborum numquam dicta non quisquam veniam
                dolore eius necessitatibus molestias officia. Quaerat, quis?
              </p>
              {/* rating */}
              <div className="flex items-center pt-5 pb-6 pl-7">
                <span>
                  <StarIcon className="w-4 h-4 text-[#F7C604]" />
                </span>
                <span className="pl-1">
                  <StarIcon className="w-4 h-4 text-[#F7C604]" />
                </span>
                <span className="pl-1">
                  <StarIcon className="w-4 h-4 text-[#F7C604]" />
                </span>
                <span className="pl-1">
                  <StarIcon className="w-4 h-4 text-[#B9BBBD]" />
                </span>
                <span className="pl-1">
                  <StarIcon className="w-4 h-4 text-[#B9BBBD]" />
                </span>
                <span className="pl-3 text-lg font-normal text-white">3.0</span>
              </div>
            </div>
          </article>

          <article className="ml-5">
            <div className="flex flex-col bg-[rgba(17,17,17,1)] rounded-lg w-96">
              {/* user header */}
              <div className="flex items-center pl-9 pt-7">
                <Image
                  src={
                    "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2536413786521623&height=50&width=50&ext=1696903725&hash=AeQ_iM_RyhmqRETFnBE"
                  }
                  alt="user profile"
                  width={35}
                  height={35}
                  className="rounded-full"
                />
                <div className="flex flex-col pl-3">
                  <span className="text-sm text-white ">
                    Diego Alejandro Mike
                  </span>
                  <span className="text-[#ABBBC2] text-xs">Hace 4 horas</span>
                </div>
              </div>
              {/* review */}
              <p className="text-white text-[13px] pl-7 pt-3 text-justify pr-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur, ut praesentium excepturi nisi ab delectus
                exercitationem maxime? Laborum numquam dicta non quisquam veniam
                dolore eius necessitatibus molestias officia. Quaerat, quis?
              </p>
              {/* rating */}
              <div className="flex items-center pt-5 pb-6 pl-7">
                <span>
                  <StarIcon className="w-4 h-4 text-[#F7C604]" />
                </span>
                <span className="pl-1">
                  <StarIcon className="w-4 h-4 text-[#F7C604]" />
                </span>
                <span className="pl-1">
                  <StarIcon className="w-4 h-4 text-[#F7C604]" />
                </span>
                <span className="pl-1">
                  <StarIcon className="w-4 h-4 text-[#B9BBBD]" />
                </span>
                <span className="pl-1">
                  <StarIcon className="w-4 h-4 text-[#B9BBBD]" />
                </span>
                <span className="pl-3 text-lg font-normal text-white">3.0</span>
              </div>
            </div>
          </article>

          <article className="ml-5">
            <div className="flex flex-col bg-[rgba(17,17,17,1)] rounded-lg w-96">
              {/* user header */}
              <div className="flex items-center pl-9 pt-7">
                <Image
                  src={
                    "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2536413786521623&height=50&width=50&ext=1696903725&hash=AeQ_iM_RyhmqRETFnBE"
                  }
                  alt="user profile"
                  width={35}
                  height={35}
                  className="rounded-full"
                />
                <div className="flex flex-col pl-3">
                  <span className="text-sm text-white ">
                    Diego Alejandro Mike
                  </span>
                  <span className="text-[#ABBBC2] text-xs">Hace 4 horas</span>
                </div>
              </div>
              {/* review */}
              <p className="text-white text-[13px] pl-7 pt-3 text-justify pr-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur, ut praesentium excepturi nisi ab delectus
                exercitationem maxime? Laborum numquam dicta non quisquam veniam
                dolore eius necessitatibus molestias officia. Quaerat, quis?
              </p>
              {/* rating */}
              <div className="flex items-center pt-5 pb-6 pl-7">
                <span>
                  <StarIcon className="w-4 h-4 text-[#F7C604]" />
                </span>
                <span className="pl-1">
                  <StarIcon className="w-4 h-4 text-[#F7C604]" />
                </span>
                <span className="pl-1">
                  <StarIcon className="w-4 h-4 text-[#F7C604]" />
                </span>
                <span className="pl-1">
                  <StarIcon className="w-4 h-4 text-[#B9BBBD]" />
                </span>
                <span className="pl-1">
                  <StarIcon className="w-4 h-4 text-[#B9BBBD]" />
                </span>
                <span className="pl-3 text-lg font-normal text-white">3.0</span>
              </div>
            </div>
          </article>
        </footer>
      </section>
    </main>
  );
};

export default Admin;
