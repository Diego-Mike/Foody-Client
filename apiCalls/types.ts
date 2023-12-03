export type SuccessfullResponse<t> = {
  rsp: t;
};

export type ErrorResponse<t> = {
  error: boolean;
  message: string;
  rsp: t;
};

interface FoodPrice {
  prettify: string;
  real_price: number;
}

export interface ReserveFood {
  food_id: number;
  food_title: string;
  food_price: FoodPrice;
  food_img: string;
  amount: number;
  food_details?: string;
  food_description?: string;
}

export interface UserReservation {
  reservation_id: number;
  business_id: number;
  created_at?: Date;
  order_schedule?: Date;
  foods: ReserveFood[];
}

export interface User {
  user_id: number;
  social_id: string;
  username: string;
  email: string;
  picture: string;
  business_id?: number;
  business_position?: "Dueño" | "Empleado" | "Básico";
  is_business_member?: boolean;
}

export interface GetUserRsp {
  user_id: number;
  social_id: string;
  username: string;
  email: string;
  picture: string;
  business_id?: number;
  business_position?: "Dueño" | "Empleado" | "Básico";
  is_business_member?: boolean;
  user_reservation: UserReservation;
}

export interface Business {
  name: string;
  city: string;
  address: string;
  latitude: string;
  longitude: string;
  presentation: string;
  clients_max_amount: number;
}

export interface BusinessFood {
  food_id: number;
  food_img: string;
  food_title: string;
  food_description?: string;
  food_price: FoodPrice;
  food_available_per_day: number;
}

export interface HomeFeedFoods {
  business_id: number;
  name: string;
  city: string;
  foods: BusinessFood[];
}

export interface HomeFood {
  home_food: HomeFeedFoods[];
  next_page: number;
}
