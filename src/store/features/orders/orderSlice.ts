// src/redux/slices/orderSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  async (_, thunkAPI) => {
    try {
      const token = Cookies.get("accessToken");
      console.log("Fetching orders with token:", token);
      const response = await axios.get(
        "https://suplle-server-v2-2.onrender.com/api/v1/order/all-order",
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      return response.data?.data?.result || [];
    } catch (error: unknown) {
      let errorMessage = "Failed to fetch menus";
      if (error && typeof error === "object" && "response" in error) {
        const err = error as { response?: { data?: { message?: string } } };
        errorMessage = err.response?.data?.message || errorMessage;
      }
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

const orderSlice = createSlice({
  name: "orders",
  initialState: {
    data: [],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch orders";
      });
  },
});

export default orderSlice.reducer;

//https://suplle-server-v2-2.onrender.com/api/v1/order/all-order
//orders/fetchOrders