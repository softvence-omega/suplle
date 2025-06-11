import {
  createAsyncThunk,
  createSlice,
  type ActionReducerMapBuilder,
  type PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

interface User {
  _id: string;
  restuarant: string | null;
  name: string;
  email: string;
  role: string;
  image: string | null;
}

interface AuthState {
  user: User | null;
  accessToken: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  accessToken: null,
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (
    { email, password }: { email: string; password: string },
    thunkAPI
  ) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/auth/login`,
        {
          email,
          password,
        }
      );

      const { user, accessToken } = res.data.data;

      Cookies.set("accessToken", accessToken, { expires: 1 });

      return { user, accessToken };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Login failed"
      );
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (
    {
      phone,
      restaurantName,
      businessName,
      businessEmail,
      restaurantAddress,
      password,
      referralCode,
    }: {
      phone: string;
      restaurantName: string;
      businessName: string;
      businessEmail: string;
      restaurantAddress: string;
      password: string;
      referralCode?: string;
    },
    thunkAPI
  ) => {
    try {
      const res = await axios.post(
        `${
          import.meta.env.VITE_BACKEND_BASE_URL
        }/auth/register-restuarant-owner`,
        {
          phone,
          restaurantName,
          businessName,
          businessEmail,
          restaurantAddress,
          password,
          referralCode,
        }
      );

      const { user, accessToken } = res.data.data;

      Cookies.set("accessToken", accessToken, { expires: 1 });

      return { user, accessToken };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Registration failed"
      );
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state: AuthState) => {
      Cookies.remove("accessToken");
      state.user = null;
      state.accessToken = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<AuthState>) => {
    builder
      .addCase(loginUser.pending, (state: AuthState) => {
        state.loading = true;
        state.accessToken = null;
        state.error = null;
      })
      .addCase(
        loginUser.fulfilled,
        (
          state: AuthState,
          action: PayloadAction<{ user: User; accessToken: string }>
        ) => {
          state.loading = false;
          state.user = action.payload.user;
          state.accessToken = action.payload.accessToken;
        }
      )
      .addCase(
        loginUser.rejected,
        (state: AuthState, action: PayloadAction<unknown>) => {
          state.loading = false;
          state.error = action.payload as string;
          state.user = null;
          state.accessToken = null;
        }
      )
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.accessToken = null;
        state.error = null;
      })
      .addCase(
        registerUser.fulfilled,
        (state, action: PayloadAction<{ user: User; accessToken: string }>) => {
          state.loading = false;
          state.user = action.payload.user;
          state.accessToken = action.payload.accessToken;
        }
      )
      .addCase(
        registerUser.rejected,
        (state, action: PayloadAction<unknown>) => {
          state.loading = false;
          state.error = action.payload as string;
          state.user = null;
          state.accessToken = null;
        }
      );
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
