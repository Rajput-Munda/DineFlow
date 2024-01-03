import { configureStore } from "@reduxjs/toolkit";
import restaurantReducer from "./RestaurantSlice";
export const Store = configureStore({
  reducer: {
    restaurant: restaurantReducer,
  },
});
export default Store;
