// app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../store/features/sidebar/sidebarSlice";
import authReducer from "../store/features/auth/authSlice";
import categoryReducer from "../store/features/category/createCategorySlice";
import menuReducer from "../store/features/menu/menuSlice";
import fetchMenuReducer from "../store/features/menu/fetchMenuSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    auth: authReducer,
    category: categoryReducer,
    menu: menuReducer,
    fetchMenu: fetchMenuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
