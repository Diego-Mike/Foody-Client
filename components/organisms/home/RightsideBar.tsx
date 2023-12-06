"use client";
import { useStore } from "@/globalState";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { AnimatePresence } from "framer-motion";
import ReservationTitle from "@/components/atoms/home/ReservationTitle";

import ReservationFood from "@/components/molecules/home/ReservationFood";
import ReserveButton from "@/components/atoms/home/ReserveButton";
import { useSearchParams } from "next/navigation";
import ReservationView from "./ReservationView";

const RightsideBar = () => {
  const reservation = useStore((state) => state.reservation);
  const isThereReservation =
    reservation?.foods?.length > 0 && reservation?.business_id !== 0;
  const reservationMade = reservation?.reservation_id !== 0;

  // console.log("my reservation", reservation);

  const searchParams = useSearchParams();
  const reservationView = searchParams.get("reservacion");

  console.log("google oauth option", {
    googleClientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  });

  return (
    <AnimatePresence>
      {reservationView ? (
        <ReservationView
          key="reservation-view"
          reservationId={parseInt(reservationView)}
        />
      ) : (
        <aside className="w-[25%] fixed right-0 top-0 bottom-0 mr-2 mt-2">
          {/* current reservation */}
          <article className="w-full bg-[#111111] min-h-[150px] max-h-[400px] rounded-lg flex flex-col justify-between items-center overflow-hidden">
            <ReservationTitle />

            <div className="w-[92%] overflow-y-scroll mb-6">
              {reservationMade ? (
                <p className="text-lg font-light text-white">
                  Orden #{reservation.reservation_id}
                </p>
              ) : (
                <>
                  {isThereReservation &&
                    reservation.foods.map((food, i) => {
                      return (
                        <ReservationFood
                          reservationFood={food}
                          i={i}
                          key={food.food_id}
                        />
                      );
                    })}
                </>
              )}
            </div>

            {/* reserve */}
            <ReserveButton
              isThereCurrentReservation={isThereReservation}
              reservation_id={reservation.reservation_id}
            />
          </article>

          {/* categories */}
          <article
            className={`w-full bg-[#111111] rounded-lg min-h-[150px] max-h-[250px] mt-5 flex justify-center`}
          >
            <div className="w-[92%] py-3">
              {/* title */}
              <div className="flex items-center justify-between w-full">
                <span className="text-lg font-medium text-white">
                  Categorias
                </span>
                <button
                  type="button"
                  className="flex items-center justify-center text-sm text-white"
                >
                  Ver Todo
                  <span className="ml-1">
                    <ChevronRightIcon className="w-5 h-5 text-[#EA7C69]" />
                  </span>
                </button>
              </div>

              {/* break line */}
              <div className="w-full border border-[#393C49] mt-5" />

              {/* tags */}
              <div className="flex flex-wrap justify-around w-full pt-2 pb-3 overflow-hidden">
                <span className="text-sm text-white rounded-3xl bg-[#EA7C69] py-2 px-4 cursor-pointer mt-4">
                  Hamburgesas
                </span>
                <span className="text-sm text-[#EA7C69] border rounded-3xl border-[#EA7C69] py-2 px-4 cursor-pointer mt-4">
                  Hamburgesas
                </span>
                <span className="text-sm text-[#EA7C69] border rounded-3xl border-[#EA7C69] py-2 px-4 cursor-pointer mt-4">
                  Carn
                </span>
                <span className="text-sm text-[#EA7C69] border rounded-3xl border-[#EA7C69] py-2 px-4 cursor-pointer mt-4">
                  Carne
                </span>
                <span className="text-sm text-[#EA7C69] border rounded-3xl border-[#EA7C69] py-2 px-4 cursor-pointer mt-4">
                  Hamburgesas
                </span>
              </div>
            </div>
          </article>
        </aside>
      )}
    </AnimatePresence>
  );
};

export default RightsideBar;
