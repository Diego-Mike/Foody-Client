"use client";

import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  children: ReactNode;
}

const ReactToastWrapper = ({ children }: Props) => {
  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
};

export default ReactToastWrapper;
