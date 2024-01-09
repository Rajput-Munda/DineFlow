import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    orderDetails: {},
    orderItems: [],
    error: ''
}

export const fetchOrderDetails = createAsyncThunk("order/fetchOrderDetails", async (tableId)=>{
    const response = await fetch(`http://127.0.0.1:8080/orders/getOrderDetails?tableId=${tableId}` , {
        method: "GET",
    })
    return await response.json();
})

const OrderSlice = createSlice({
    name: "Orders",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchOrderDetails.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchOrderDetails.fulfilled, (state, action) => {
            state.loading = false,
            state.orderDetails = action.payload.order,
            state.orderItems = action.payload.orderItems
        })
        builder.addCase(fetchOrderDetails.rejected, (state, action) => {
            state.loading = false,
            state.error = action.error.message
        })

    }
})

export const { reducer: orderReducer } = OrderSlice;
export default OrderSlice.reducer;





