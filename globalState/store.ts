import { User, UserReservation } from "@/apiCalls/types";
import { create } from "zustand";

interface addReservationAction {
  business_id: number;
  food: {
    food_id: number;
    food_title: string;
    food_description?: string;
    food_img: string;
    food_price: {
      prettify: string;
      real_price: number;
    };
  };
}

interface UpdateUserBusinessCreatorAction {
  business_position: "Dueño";
  business_id: number;
}

interface State {
  user: User;
  reservation: UserReservation;
}

interface Action {
  updateUser: (user: State["user"]) => void;
  updateUserBusinessCreator: (
    businessCreator: UpdateUserBusinessCreatorAction
  ) => void;
  addReservation: (reservation: addReservationAction) => void;
  removeFoodFromReservation: (foodId: number) => void;
  updateCurrentUserReservation: (reservation: State["reservation"]) => void;
  updateReservationId: (reservationId: number) => void;
}

export const useStore = create<State & Action>((set) => ({
  user: {
    email: "",
    picture: "",
    social_id: "",
    user_id: 0,
    username: "",
  },

  updateUser: (currentUser) =>
    set((store) => ({ ...store, user: { ...store.user, ...currentUser } })),

  updateUserBusinessCreator: (businessCreator) =>
    set((store) => ({
      ...store,
      user: {
        ...store.user,
        business_id: businessCreator.business_id,
        business_position: businessCreator.business_position,
        is_business_member: true,
      },
    })),

  reservation: {
    created_at: undefined,
    order_schedule: undefined,
    reservation_id: 0,
    business_id: 0,
    foods: [
      {
        food_id: 0,
        food_title: "",
        food_description: "",
        food_img: "",
        food_price: {
          prettify: "",
          real_price: 0,
        },
        amount: 0,
      },
    ],
  },

  addReservation: (reservation) => {
    set((store) => {
      if (store.reservation.business_id === 0) {
        // add first business and food
        return {
          ...store,
          reservation: {
            reservation_id: 0,
            business_id: reservation.business_id,
            foods: [{ ...reservation.food, amount: 1 }],
          },
        };
      } else if (store.reservation.business_id === reservation.business_id) {
        // increase amount ---> same food
        const findFood = store.reservation.foods.find(
          (currentFood) => currentFood.food_id === reservation.food.food_id
        );

        if (findFood) {
          const updatedFood = store.reservation.foods.map((food) => {
            if (findFood.food_id === food.food_id) {
              return { ...food, amount: food.amount + 1 };
            }
            return food;
          });

          return {
            ...store,
            reservation: {
              ...store.reservation,
              foods: updatedFood,
            },
          };
        }

        // add new food to current business reservations
        return {
          ...store,
          reservation: {
            ...store.reservation,
            foods: [
              ...store.reservation.foods,
              { ...reservation.food, amount: 1 },
            ],
          },
        };
      }

      return { ...store };
    });
  },

  removeFoodFromReservation: (foodId) => {
    set((store) => {
      const foodToEliminate = store.reservation.foods.find(
        (food) => food.food_id === foodId
      )!;

      if (foodToEliminate.amount === 1) {
        // eliminate food
        const updatedFood = store.reservation.foods.filter(
          (food) => food.food_id !== foodId
        );

        return {
          ...store,
          reservation: {
            ...store.reservation,
            businessId:
              updatedFood.length === 0 ? 0 : store.reservation.business_id,
            foods: updatedFood,
          },
        };
      } else {
        // rest counter
        const updatedFood = store.reservation.foods.map((food) => {
          if (food.food_id === foodId) {
            return { ...food, amount: food.amount - 1 };
          }
          return food;
        });

        return {
          ...store,
          reservation: { ...store.reservation, foods: updatedFood },
        };
      }
    });
  },

  updateCurrentUserReservation: (reservation) =>
    set((store) => ({
      ...store,
      reservation: { ...store.reservation, ...reservation },
    })),

  updateReservationId: (reservationId) =>
    set((store) => ({
      ...store,
      reservation: { ...store.reservation, reservation_id: reservationId },
    })),
}));
