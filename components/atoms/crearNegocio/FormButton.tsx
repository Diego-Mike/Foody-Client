import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
import { FC } from "react";

interface Props {
  loading: boolean;
}

const FormButton: FC<Props> = ({ loading }) => {
  return (
    <button
      type="submit"
      className={`bg-[rgb(255,183,213)] mt-[70px] w-16 h-16 rounded-full flex items-center justify-center hover:shadow-[0_8px_25px_rgba(255,183,213)] transition duration-500 active:scale-75 active:duration-300 ${
        loading && "pointer-events-none"
      }`}
      disabled={loading}
    >
      <ArrowSmallRightIcon width={25} height={25} color={"white"} />
    </button>
  );
};

export default FormButton;
