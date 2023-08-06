import { FC } from "react";

interface Props {
  toggle: () => void;
}

const LogginBtn: FC<Props> = ({ toggle }) => {
  return (
    <button
      className="px-5 py-2 text-base font-medium text-white transition-colors bg-red-500 rounded-md hover:bg-red-600"
      onClick={toggle}
    >
      Iniciar sesión
    </button>
  );
};

export default LogginBtn;
