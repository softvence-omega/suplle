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
  resetEmail: string | null;
}

const initialState: AuthState = {
  user: null,
  accessToken: null,
  loading: false,
  error: null,
  resetEmail: null,
};

const baseURL = import.meta.env.VITE_BACKEND_BASE_URL;

// Login for restaurant owner

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (
    { email, password }: { email: string; password: string },
    thunkAPI
  ) => {
    try {
      const res = await axios.post(`${baseURL}/auth/login`, {
        email,
        password,
      });

      const { user, accessToken } = res.data.data;

      Cookies.set("accessToken", accessToken, { expires: 1 });
      Cookies.set("user", JSON.stringify(user));

      return { user, accessToken };
    } catch (error: unknown) {
      let message = "Login failed";
      if (
        error &&
        typeof error === "object" &&
        "response" in error &&
        error.response &&
        typeof error.response === "object" &&
        "data" in error.response &&
        error.response.data &&
        typeof error.response.data === "object" &&
        "message" in error.response.data
      ) {
        message =
          (error.response as { data: { message?: string } }).data.message ||
          message;
      }
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Sign Up for restaurant owner

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
        `${baseURL}/auth/register-restuarant-owner`,
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

      // const { userEmail } = res.data;
      Cookies.set("userEmail", res?.data?.data?.userEmail);
      console.log(
        "User email in register reduxSlice:",
        res?.data?.data?.userEmail
      );
      return res.data?.data;
    } catch (error: unknown) {
      let message = "Registration failed";
      if (
        error &&
        typeof error === "object" &&
        "response" in error &&
        error.response &&
        typeof error.response === "object" &&
        "data" in error.response &&
        error.response.data &&
        typeof error.response.data === "object" &&
        "message" in error.response.data
      ) {
        message =
          (error.response as { data: { message?: string } }).data.message ||
          message;
      }
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// OTP verification

export const verifyOtp = createAsyncThunk(
  "auth/verifyOtp",
  async ({ otp }: { otp: string }, thunkAPI) => {
    try {
      const email = Cookies.get("userEmail"); // You stored this after registration

      if (!email) {
        throw new Error("Email not found in cookies");
      }

      const res = await axios.post(
        `${baseURL}/auth/verify-otp?email=${email}`,
        { otp }
      );

      // Cookies.set("accessToken", accessToken, { expires: 1 });
      Cookies.remove("userEmail"); // Cleanup after successful verification

      const data = res.data.data;

      if (!data) {
        // No user/accessToken returned, just success message
        return thunkAPI.fulfillWithValue(null); // we explicitly return null to handle in reducer
      }

      const { user, accessToken } = data;

      return { user, accessToken };
    } catch (error: unknown) {
      let message = "OTP verification failed";
      if (
        error &&
        typeof error === "object" &&
        "response" in error &&
        error.response &&
        typeof error.response === "object" &&
        "data" in error.response &&
        error.response.data &&
        typeof error.response.data === "object" &&
        "message" in error.response.data
      ) {
        message =
          (error.response as { data: { message?: string } }).data.message ||
          message;
      }
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Resend code

export const resendCode = createAsyncThunk(
  "auth/resendCode",
  async (email: string, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${baseURL}/auth/resend-otp?email=${email}`
      );
      return response.data.message; // or whatever your API returns
    } catch (error: unknown) {
      let message = "Failed to resend code";
      if (
        error &&
        typeof error === "object" &&
        "response" in error &&
        (error as { response?: { data?: { message?: string } } }).response &&
        typeof (error as { response?: { data?: { message?: string } } })
          .response === "object" &&
        "data" in
          (error as { response?: { data?: { message?: string } } }).response! &&
        (error as { response?: { data?: { message?: string } } }).response!
          .data &&
        typeof (error as { response?: { data?: { message?: string } } })
          .response!.data === "object" &&
        "message" in
          (error as { response?: { data?: { message?: string } } }).response!
            .data!
      ) {
        message =
          (error as { response: { data: { message?: string } } }).response.data
            .message || message;
      }
      return rejectWithValue(message);
    }
  }
);

// Forget Password
export const forgetPassword = createAsyncThunk(
  "auth/forgetPassword",
  async ({ email }: { email: string }, thunkAPI) => {
    try {
      const res = await axios.post(`${baseURL}/auth/forgot-password`, {
        email,
      });

      return res.data; // adjust if API returns { message: string } or something else
    } catch (error: unknown) {
      let message = "Password reset request failed";
      if (
        error &&
        typeof error === "object" &&
        "response" in error &&
        error.response &&
        typeof error.response === "object" &&
        "data" in error.response &&
        error.response.data &&
        typeof error.response.data === "object" &&
        "message" in error.response.data
      ) {
        message =
          (error.response as { data: { message?: string } }).data.message ||
          message;
      }
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// verify password otp
export const verifyPasswordOtp = createAsyncThunk(
  "auth/verifyPasswordOtp",
  async ({ email, otp }: { email: string | null; otp: string }, thunkAPI) => {
    try {
      if (!email) {
        throw new Error(
          "No email found in state. Forgot password must be called first."
        );
      }

      const res = await axios.post(`${baseURL}/auth/verify-password-otp`, {
        otp,
        email,
      });

      return res.data;
    } catch (error: any) {
      let message = "Password OTP verification failed";
      if (error?.response?.data?.message) {
        message = error.response.data.message;
      }
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Reset Password
export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async ({ newPassword }: { newPassword: string }, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as { auth: AuthState };
      const email = state.auth.resetEmail;

      if (!email) {
        throw new Error("No email found in state for reset password.");
      }

      const res = await axios.post(
        `${baseURL}/auth/reset-password?email=${email}`,
        {
          email,
          newPassword,
        }
      );

      return res.data;
    } catch (error: any) {
      let message = "Password reset failed";
      if (error?.response?.data?.message) {
        message = error.response.data.message;
      }
      return thunkAPI.rejectWithValue(message);
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
          console.log("Login successful from auth slice: ", action.payload);
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
      )
      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        verifyOtp.fulfilled,
        (
          state,
          action: PayloadAction<{ user: User; accessToken: string } | null>
        ) => {
          state.loading = false;
          if (action.payload) {
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
          } else {
            // If no user or token returned, just set user/token to null (or keep as is)
            state.user = null;
            state.accessToken = null;
          }
        }
      )
      .addCase(verifyOtp.rejected, (state, action: PayloadAction<unknown>) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(resendCode.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resendCode.fulfilled, (state) => {
        state.loading = false;
        // state.message = action.payload;
      })
      .addCase(resendCode.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(forgetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(forgetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.resetEmail = action.meta.arg.email;
        localStorage.setItem("resetEmail", action.meta.arg.email);
      })

      .addCase(
        forgetPassword.rejected,
        (state, action: PayloadAction<unknown>) => {
          state.loading = false;
          state.error = action.payload as string;
        }
      )
      .addCase(verifyPasswordOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyPasswordOtp.fulfilled, (state, action) => {
        state.loading = false;
        // your API might just return a success message at this stage
        // or possibly return a token if you want to log them in directly
        console.log("verifyPasswordOtp success:", action.payload);
      })
      .addCase(
        verifyPasswordOtp.rejected,
        (state, action: PayloadAction<unknown>) => {
          state.loading = false;
          state.error = action.payload as string;
        }
      )
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
        // you can store a success message if API returns one
        console.log("Password reset success:", action.payload);
      })
      .addCase(
        resetPassword.rejected,
        (state, action: PayloadAction<unknown>) => {
          state.loading = false;
          state.error = action.payload as string;
        }
      );
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
