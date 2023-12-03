import { useStore } from "@/globalState";
import { motion } from "framer-motion";
import { FC } from "react";
import { useDebouncedCallback } from "use-debounce";
import {
  CreateReservationPayload,
  useCreateReservation,
} from "@/customHooks/useCreateReservation";
import LoadingSpinner from "../global/LoadingSpinner";
import { useRouter } from "next/navigation";

interface Props {
  isThereCurrentReservation: boolean;
  reservation_id?: number;
}

const ReserveButton: FC<Props> = ({
  isThereCurrentReservation,
  reservation_id,
}) => {
  const router = useRouter();

  const [currentReservation] = useStore((state) => [state.reservation]);
  const { mutate, isLoading, isError, error, isSuccess } = useCreateReservation(
    currentReservation.business_id
  );

  const createReservation = useDebouncedCallback(() => {
    const foodsToReserve = currentReservation.foods.map((food) => {
      return { food_id: food.food_id, amount: food.amount };
    });
    const payload: CreateReservationPayload = {
      order_schedule: null,
      foods: foodsToReserve,
      notification_title: "Reservación creada exitosamente !",
      notification_description:
        "Tu reservación se ha ha creado, ahora debes esperar a que el restaurante acepte tu solicitud",
    };
    // console.log("payload reservation", payload);
    mutate(payload);
  }, 250);

  return (
    <motion.button
      type="button"
      className={`w-[92%] text-white bg-[#EA7C69] rounded-md py-2 px-4 mb-5 ${
        !isThereCurrentReservation && "opacity-50"
      } flex justify-center`}
      whileTap={{ scale: 0.9 }}
      onClick={() => {
        if (isThereCurrentReservation && reservation_id === 0) {
          createReservation();
        } else if (reservation_id !== 0) {
          router.push(`/?reservacion=${reservation_id}`);
        }
      }}
      disabled={!isThereCurrentReservation || isLoading || isSuccess}
    >
      {isLoading ? (
        <LoadingSpinner width="w-6" height="h-6" color="white" />
      ) : reservation_id ? (
        "Revisar"
      ) : (
        "Reservar"
      )}
    </motion.button>
  );
};

export default ReserveButton;
