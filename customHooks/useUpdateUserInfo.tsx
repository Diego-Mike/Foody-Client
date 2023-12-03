import { User, UserReservation } from "@/apiCalls/types";
import { useStore } from "@/globalState";
import { useEffect } from "react";

interface Props {
  userData?: User;
  reservation?: UserReservation;
}

export const useUpdateUserInfo = ({ userData, reservation }: Props) => {
  const [updateUser, updateCurrentUserReservation, currentUser] = useStore(
    (state) => [
      state.updateUser,
      state.updateCurrentUserReservation,
      state.user,
    ]
  );

  useEffect(() => {
    if (userData && !currentUser.is_business_member) {
      updateUser(userData);
    }
    if (reservation) {
      updateCurrentUserReservation(reservation);
    }
  }, []);
};
