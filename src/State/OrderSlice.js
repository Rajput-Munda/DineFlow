import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import moment from "moment";

const initialState = {
  loading: false,
  orderDetails: {},
  orderItems: [],
  reservedTable: false,
  kitchenOrders: [],
  error: "",
};

export const getItemsForKitchenScheduling = createAsyncThunk(
  "order/getItemsForKitchenScheduling",
  async () => {
    const response = await fetch(
      `http://127.0.0.1:8080/orders/getItemsForKitchenScheduling`,
      {
        method: "GET",
      }
    )
    return response.json() 
  }
);

export const startPreparingOrder = createAsyncThunk(
  "orders/startPreparingOrder",
  async ({orderId}) => {
    const response = await fetch(`http://127.0.0.1:8080/orders/startPreparingOrder?orderId=${orderId}`, {
      method: "POST",
    });
    getItemsForKitchenScheduling();
    return response.json();
  }
);

export const fetchOrderDetails = createAsyncThunk(
  "order/fetchOrderDetails",
  async (tableId) => {
    const response = await fetch(
      `http://127.0.0.1:8080/orders/getOrderDetails?tableId=${tableId}`,
      {
        method: "GET",
      }
    )
    return response.json()
  }
);

export const placeOrder = createAsyncThunk(
  "orders/createOrder",
  async ({ orderDetails, orderItems }) => {
    const updatedOrderDetails = {
      ...orderDetails,
      orderStatus: "Active",
      orderDate: moment().format("YYYY-MM-DD"),
      orderTime: moment().format("HH:mm:ss"),
    };

    const response = await fetch(`http://127.0.0.1:8080/orders/createOrder`, {
      method: "POST",
      body: JSON.stringify({
        order: updatedOrderDetails, // Use the updated orderDetails object
        orderItems: orderItems,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    fetchOrderDetails();
    return response.json();
  }
);

export const updateOrder = createAsyncThunk(
  "orders/updateOrder",
  async ({ orderDetails, orderItems }) => {
    const response = await fetch("http://127.0.0.1:8080/orders/updateOrder", {
      method: "POST",
      body: JSON.stringify({
        order: orderDetails,
        orderItems: orderItems,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    fetchOrderDetails();
    window.location.reload();
    return response.json();
  }
);

export const sendPaymentLink = createAsyncThunk(
  "orders/sendPaymentLink",
  async ({orderDetails}) => {
    console.log("sending payment link")
    const response = await fetch(
      "http://127.0.0.1:8080/payments/createPaymentLink",
      {
        method: "POST",
        body: JSON.stringify({
          amount: orderDetails.orderTotal,
          amountPaid: 0,
          callbackMethod: "get",
          callbackUrl: "https://example-callback-url.com/",
          cancelledAt: 0,
          customerName: orderDetails.customerName,
          customerContactNumber: orderDetails.phoneNo.toString(),
          customerEmail: orderDetails.email,
          description: `Payment for Order No.  ${orderDetails.orderId}`,
          expireBy: Date.now() + 15 * 60,
          expiredAt: 0,
          firstMinPartialAmount: 100,
          notifyEmail: true,
          notifySms: true,
          referenceId: orderDetails.orderId,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    return response.json();
  }
);

const OrderSlice = createSlice({
  name: "Orders",
  initialState,
  reducers: {
    setCustomerDetailsForVaccantTable: (state, action) => {
      (state.orderDetails = {}),
        (state.orderItems = []),
        (state.reservedTable = false),
        (state.orderDetails = {
          tableId: { tableId: action.payload.tableId },
          customerName: action.payload.customerFullName,
          phoneNo: action.payload.phoneNo,
          email: action.payload.email,
        });
    },

    addMenuItemToCart: (state, action) => {
      if (state.orderItems.length != 0) {
        var objIndex = state.orderItems.findIndex(
          (obj) =>
            obj.menuItemId.menuItemId == action.payload.menuItemId.menuItemId
        );
        if (objIndex != -1) {
          action.payload.quantity += state.orderItems[objIndex].quantity;
          action.payload.subtotal += state.orderItems[objIndex].subtotal;
          state.orderItems.splice(objIndex, 1);
          state.orderItems.push(action.payload);
        } else {
          state.orderItems.push(action.payload);
        }
      } else {
        state.orderItems.push(action.payload);
      }
      console.log("obj index", objIndex);
      state.orderDetails.orderSubTotal = getSubtotal(state.orderItems);
      state.orderDetails.tax = calculateTaxes(state.orderDetails.orderSubTotal);
      state.orderDetails.orderTotal = calculateTotal(
        state.orderDetails.orderSubTotal,
        state.orderDetails.tax
      );
    },

    removeMenuItemFromCart: (state, action) => {
      let newItems = [...state.orderItems];
      const index = action.payload;
      console.log(index);

      if (index >= 0) {
        newItems.splice(index, 1);
      } else {
        console.warn(
          "Cant remove product (id: ${action.id}) as its not in basket!"
        );
      }
      state.orderItems = newItems;
      state.orderDetails.orderSubTotal = getSubtotal(state.orderItems);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOrderDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchOrderDetails.fulfilled, (state, action) => {
      (state.loading = false),
        (state.orderDetails = action.payload.order),
        (state.reservedTable = true),
        (state.orderItems = action.payload.orderItems);
    });
    builder.addCase(fetchOrderDetails.rejected, (state, action) => {
      (state.loading = false), (state.error = action.error.message);
    });
    builder.addCase(placeOrder.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(placeOrder.fulfilled, () => {
      window.location.reload();
    });
    builder.addCase(placeOrder.rejected, (state, action) => {
      (state.loading = false), (state.error = action.error.message);
    });
    builder.addCase(updateOrder.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateOrder.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(updateOrder.rejected, (state, action) => {
      (state.loading = false), (state.error = action.error.message);
    });
    builder.addCase(sendPaymentLink.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(sendPaymentLink.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(sendPaymentLink.rejected, (state, action) => {
      (state.loading = false), (state.error = action.error.message);
    });
    builder.addCase(getItemsForKitchenScheduling.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getItemsForKitchenScheduling.fulfilled, (state, action) => {
      state.kitchenOrders = action.payload
      state.loading = false;
    });
    builder.addCase(getItemsForKitchenScheduling.rejected, (state, action) => {
      (state.loading = false), (state.error = action.error.message);
    });
    builder.addCase(startPreparingOrder.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(startPreparingOrder.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(startPreparingOrder.rejected, (state, action) => {
      (state.loading = false), (state.error = action.error.message);
    });
  },
});

const getSubtotal = (orderItems) => {
  let sum = 0;
  for (let o of orderItems) {
    console.log(o);
    sum += o.subtotal;
  }
  console.log(sum);
  return sum;
};

const calculateTaxes = (subtotal) => {
  console.log(subtotal);
  let tax = 0.05 * subtotal;
  return Number(tax.toFixed(2));
};

const calculateTotal = (subtotal, tax) => {
  let total = subtotal + tax;
  return Number(total.toFixed(2));
};

export const {
  reducer: orderReducer,
  actions: {
    setCustomerDetailsForVaccantTable,
    addMenuItemToCart,
    removeMenuItemFromCart,
  },
} = OrderSlice;
export default OrderSlice.reducer;
