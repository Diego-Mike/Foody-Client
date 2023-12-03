import { FC } from "react";

interface Props {
  handleCancel: () => Promise<void>;
  loading: boolean;
}

const CancelFoodBtn: FC<Props> = ({ handleCancel, loading }) => {
  return (
    <button
      className="bg-transparent text-[#EA7C69] border border-[#EA7C69] text-sm rounded-lg w-32 py-2"
      type="button"
      onClick={handleCancel}
      disabled={loading}
    >
      Cancelar
    </button>
  );
};

export default CancelFoodBtn;
