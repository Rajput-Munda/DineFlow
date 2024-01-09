import { configureStore } from "@reduxjs/toolkit";
import restaurantReducer from "./RestaurantSlice";
import { orderReducer } from "./OrderSlice";
export const Store = configureStore({
  reducer: {
    restaurant: restaurantReducer,
    order: orderReducer,
  },
});
export default Store;
