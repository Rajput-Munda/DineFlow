import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  restaurantTable: [],
  error: "",
};

//fetchRestaurantTables function
export const fetchRestaurantTables = createAsyncThunk(
    "restaurant/fetchRestaurantTables",
    async () => {
      const response = await fetch("http://127.0.0.1:8080/restaurant-tables/getAllRestaurantTables", {
            method: "GET",
        });
        return await response.json();
    }
  );
  
  

const RestaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchRestaurantTables.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchRestaurantTables.fulfilled, (state, action) => {
      (state.loading = false),
        (state.restaurantTable = action.payload),
        (state.error = "");
    });
    builder.addCase(fetchRestaurantTables.rejected, (state, action) => {
      (state.loading = false), (state.restaurantTable = []);
      state.error = action.error.message;
    });
  },
});

export const { reducer: restaurantReducer } = RestaurantSlice;
export default RestaurantSlice.reducer;
