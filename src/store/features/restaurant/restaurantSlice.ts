// src/redux/slices/restaurantSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from "js-cookie";

export interface Restaurant {
  _id: string;
  restaurantName: string;
  tagline: string;
  description: string;
  phone: string;
  restaurantAddress: string;
  logo: string;
  coverPhoto: string;
  images: string[];
  status: 'approved' | 'pending' | 'rejected'; // Adjust if there are more statuses
  isDeleted: boolean;
  owner: string;
  menus: string[];
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  __v: number;
}

interface RestaurantState {
  restaurants: Restaurant[];
  loading: boolean;
  error: string | null;
}

const initialState: RestaurantState = {
  restaurants: [],
  loading: false,
  error: null,
};

// 👉 Replace the URL with your actual Postman-tested API endpoint
export const fetchRestaurants = createAsyncThunk(
  'restaurants/fetchRestaurants',
  async (_, thunkAPI) => {
    try {
      const token =  Cookies.get("accessToken");
      console.log(token, "token in restaurant slice");
      const response = await axios.get('https://suplle-server-v2-2.onrender.com/api/v1/restaurant/all-restaurant', {
  headers: {
    Authorization: `${token}`
  }
});
      console.log(response?.data?.data, "response in restaurant slice");
      return response.data?.data || []; // Ensure this matches expected structure
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

const restaurantSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.loading = false;
        state.restaurants = action.payload;
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});


// Update thunk


type RestaurantUpdatePayload = {
  id: string;
  restaurantName: string;
  phone: string;
  restaurantAddress: string;
  logo?: string;
};


export const editRestaurant = createAsyncThunk<
  Restaurant,
  RestaurantUpdatePayload,
  { rejectValue: string }
>("restaurants/updateRestaurant", async ({ id, restaurantName, phone, restaurantAddress, logo }, thunkAPI) => {
  try {
    const token = Cookies.get("accessToken");

    const formData = new FormData();
    formData.append("data", JSON.stringify({ restaurantName, phone, restaurantAddress }));
    if (logo) formData.append("logo", logo); // only append if logo exists

    const res = await axios.put(
      `https://suplle-server-v2-2.onrender.com/api/v1/restaurant/update-restaurant-admin/${id}`,
      formData,
      {
        headers: { Authorization: token },
      }
    );

    if (res.data.success) {
      return res.data.data;
    } else {
      return thunkAPI.rejectWithValue(res.data.message || "Failed to update restaurant");
    }
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || "Update failed");
  }
});


(builder: import('@reduxjs/toolkit').ActionReducerMapBuilder<RestaurantState>) => {
  builder
    .addCase(editRestaurant.fulfilled, (state: RestaurantState, action: import('@reduxjs/toolkit').PayloadAction<Restaurant>) => {
      const updated: Restaurant = action.payload;
      const index: number = state.restaurants.findIndex((r: Restaurant) => r._id === updated._id);
      if (index !== -1) {
        state.restaurants[index] = updated;
      }
    });
}



export default restaurantSlice.reducer;
