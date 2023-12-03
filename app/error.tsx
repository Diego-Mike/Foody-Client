"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

const Error: FC<Props> = ({ error, reset }) => {
  console.log(error.message);
  return (
    <section className="flex flex-col items-center justify-center w-full min-h-screen">
      <div className="flex">
        <Image
          src={"/internalServerError/five.png"}
          alt="5 icon"
          width={250}
          height={250}
        />
        <Image
          src={"/internalServerError/cookie1.png"}
          alt="cookie 1"
          width={300}
          height={300}
        />
        <Image
          src={"/internalServerError/cookie1.png"}
          alt="cookie 2"
          width={300}
          height={300}
        />
      </div>

      <div className="mt-20 text-center">
        <h2 className="text-2xl font-medium">
          Problemas con el sistema de foody
        </h2>
        <p className="mt-4 text-[rgba(0,0,0,0.4)]">
          Algo ha sucedido con nuestros servidores, lo más probable es que sea
          momentaneo,
          <br />
          lamentamos el incidente
          <span className="text-black"> 😔. </span>
        </p>

        <motion.button
          type="button"
          className="mt-2 bg-[#ea6a12] rounded-3xl text-white px-6 py-2"
          whileTap={{ scale: 0.9 }}
          onClick={reset}
        >
          Re intentar
        </motion.button>
      </div>
    </section>
  );
};

export default Error;
