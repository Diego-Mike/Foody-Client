import InputIconWrapper from "@/components/atoms/crearNegocio/InputIconWrapper";
import { useModal } from "@/customHooks";
import { MagnifyingGlassIcon, UserPlusIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { MouseEvent } from "react";

const BusinessEmployees = () => {
  const { isShowing, toggle } = useModal(false);

  return (
    <>
      <div className="w-[92%] m-auto flex flex-col pt-7">
        {/* header */}
        <div className="flex items-center justify-between w-full">
          <h2 className="text-xl text-white">Empleados</h2>
          {/* FIXME: make this a component */}
          <motion.button
            type="button"
            className="flex text-white border-2 border-[rgb(101,176,246)] bg-transparent py-3 px-4 rounded-lg items-center"
            whileHover={{ backgroundColor: "rgb(101,176,246,0.1)" }}
            whileTap={{ scale: 0.9 }}
            onClick={toggle}
          >
            <UserPlusIcon className="w-[18px] text-white" />
            <span className="pl-2 text-sm">Agregar</span>
          </motion.button>
        </div>

        <div className="w-full">
          {/* titles */}
          <div className="grid w-full h-10 grid-cols-3 pt-4 shadow-sm place-items-start place-content-center">
            <span className="text-sm text-white">Nombre</span>
            <span className="text-sm text-white">Cargo</span>
            <span className="text-sm text-white">Estatus</span>
          </div>
          {/* employees */}
          <div className="grid w-full grid-cols-3 pt-7 h-14 place-items-start place-content-center">
            <div className="flex items-center h-full">
              <Image
                src={
                  "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2536413786521623&height=50&width=50&ext=1696903725&hash=AeQ_iM_RyhmqRETFnBE"
                }
                alt="user profile"
                width={30}
                height={30}
                className="rounded-full"
              />
              <span className="text-sm text-[#ABBBC2] pl-4">
                Michael mcklaren rico
              </span>
            </div>

            <div className="flex items-center h-full">
              <span className="text-sm text-[#ABBBC2]">Básico</span>
            </div>

            <div className="flex items-center h-full">
              <span className="text-sm text-[rgb(80,209,170)] bg-[rgb(107,226,190,0.24)] p-2 rounded-md">
                Activo
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* create user modal */}
      <AnimatePresence>
        {isShowing && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bg-[rgba(17,17,17,0.5)] w-full h-full inset-0 flex items-center justify-center backdrop-blur-sm rounded-lg"
            onClick={toggle}
          >
            <form
              className="w-[60%] h-[70%] flex flex-col items-center justify-start"
              onClick={(e: MouseEvent) => {
                e.stopPropagation();
              }}
              onSubmit={() => {}}
            >
              <h2 className="text-xl font-medium text-white">
                Añadir nuevo empleado
              </h2>

              <article className="flex items-center justify-between w-full pt-12">
                <div className="relative">
                  <InputIconWrapper>
                    <MagnifyingGlassIcon className="w-4 text-white" />
                  </InputIconWrapper>
                  <input
                    type="text"
                    className="w-56 py-1 pr-2 text-[15px] text-white font-light bg-transparent border-b-2 border-white outline-none pl-9"
                    placeholder="Valentina menendez"
                  />
                </div>
                <div className="relative">
                  <InputIconWrapper>
                    <MagnifyingGlassIcon className="w-4 text-white" />
                  </InputIconWrapper>
                  <input
                    type="text"
                    className="w-56 py-1 pr-2 text-[15px] text-white font-light bg-transparent border-b-2 border-white outline-none pl-9"
                    placeholder="fuck off then"
                  />
                </div>
              </article>
              <article className="flex justify-between w-full pt-10">
                <motion.button
                  type="submit"
                  className="bg-[rgb(234,124,105)] text-white py-2 rounded-md w-56 text-[15px]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Crear
                </motion.button>
                <motion.button
                  type="button"
                  className="text-[rgb(234,124,105)] border-2 border-[rgb(234,124,105)] rounded-md py-2 w-56 text-[15px]"
                  onClick={toggle}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Cancelar
                </motion.button>
              </article>
            </form>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default BusinessEmployees;
