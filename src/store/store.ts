// app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../store/features/sidebar/sidebarSlice";
import authReducer from "../store/features/auth/authSlice";
import categoryReducer from "../store/features/category/createCategorySlice";
import menuReducer from "../store/features/menu/menuSlice";
import fetchMenuReducer from "../store/features/menu/fetchMenuSlice";
import orderReducer from "../store/features/orders/orderSlice";
import userReducer from "../store/features/user/userSlice";
import fetchRestaurantReducer from "../store/features/restaurant/fetchrestaurantSlice";
import restaurantReducer from "../store/features/restaurant/restaurantSlice";
import subscriptionReducer from "../store/features/admin/subscriptionPlan";
import qrOrdersReducer from "../store/features/admin/qrOrderSlice";
import switchAccountReducer from "../store/features/Switch Account/switchAccount";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    auth: authReducer,
    category: categoryReducer,
    menu: menuReducer,
    fetchMenu: fetchMenuReducer,
    orders: orderReducer,
    users: userReducer,
    restaurant: restaurantReducer,
    fetchRestaurant: fetchRestaurantReducer,
    subscriptionPlan: subscriptionReducer,
    qrOrders: qrOrdersReducer,
    switchAccount: switchAccountReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
