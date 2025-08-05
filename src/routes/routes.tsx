import { Route, Routes } from "react-router-dom";
// import PrivateRoute from "./privateRoute";
import DashboardLayout from "@/layout/DashboardLayout";
import Login from "@/pages/auth/Login";
import Signup from "@/pages/auth/Signup";
import AdminDashboardLayout from "@/layout/AdminDashboardLayout";
import DashboardHome from "@/pages/Dashboard/DashboardHome";
import RestaurantLayout from "@/pages/Dashboard/RestaurantLayout";
import AnalyticsAndReport from "@/pages/Dashboard/AnalyticsAndReport";
import AdminDashboardHome from "@/pages/AdminDashboard/AdminDashboardHome";
import AdminQrOrders from "@/pages/AdminDashboard/QR/AdminQrOrders";
import AdminAnalytics from "@/pages/AdminDashboard/AdminAnalytics";
import AdminSubscription from "@/pages/AdminDashboard/AdminSubscription";
import Home from "@/pages/Home";
import DynamicRestaurant from "@/pages/DynamciRestaurant";
import MenuViewForOwner from "@/pages/Dashboard/menu/MenuViewForOwner";
import MenuAddForOwner from "@/pages/Dashboard/menu/MenuAddForOwner";
import MenuEditForOwner from "@/pages/Dashboard/menu/MenuEditForOwner";
import UserViewForOwner from "@/pages/Dashboard/user/UserViewForOwner";
import UserCreateForOwner from "@/pages/Dashboard/user/UserCreateForOwner";
import StaffViewForOwner from "@/pages/Dashboard/staff/StaffViewForOwner";
import StaffDetailsForOwner from "@/pages/Dashboard/staff/StaffDetailsForOwner";
import StaffAddForOwner from "@/pages/Dashboard/staff/StaffAddForOwner";
import SettingForOwner from "@/pages/Dashboard/SettingForOwner";
import SubscriptionsForOwner from "@/pages/Dashboard/SubscriptionsForOwner";
import DineInOrderShowForOwner from "@/pages/Dashboard/order/DineInOrderShowForOwner";
import TakeAwayOrderShowForOwner from "@/pages/Dashboard/order/TakeAwayOrderShowForOwner";
import AdminRestaurantView from "@/pages/AdminDashboard/restaurant/AdminRestaurantView";
import AdminRestaurantCreate from "@/pages/AdminDashboard/restaurant/AdminRestaurantCreate";
import AdminMenuManagement from "@/pages/AdminDashboard/menu/AdminMenuManagement";
import AdminQrDesignsView from "@/pages/AdminDashboard/QR/AdminQrDesignsView";
import AdminQrDesignCreate from "@/pages/AdminDashboard/QR/AdminQrDesignCreate";
import Welcome from "@/pages/Welcome";
import OTP from "@/pages/auth/OTP";
import ForgetPasword from "@/pages/auth/ForgetPasword";
// import UserStaff from "@/components/admin-panel/user-management/UserStaff";
// import UserStaff from "@/components/admin-panel/user-management/UserStaff";
import AdminUserManage from "@/pages/AdminDashboard/user/AdminUserManage";
import CreateOrderForOwner from "@/pages/Dashboard/order/CreateOrderForOwner";
import EditOrderForOwner from "@/pages/Dashboard/order/EditOrderForOwner";
import OrderDetailsForOwner from "@/pages/Dashboard/order/OrderDetailsForOwner";
import AdminNotification from "@/pages/AdminDashboard/notification/AdminNotification";
import AdminSetting from "@/pages/setting/AdminSetting";
import QrDesign from "@/components/DashboardSubscription/QrDesign";
import BuySubscription from "@/pages/BuySubscription/BuySubscription";
import ResetPassword from "@/pages/auth/ResetPassword";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/restaurant/:resId/table/:tableId"
        element={<DynamicRestaurant />}
      />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/otp" element={<OTP />} />
      <Route path="/forgot-password" element={<ForgetPasword />} />

      {/* dahboard routes for owner ************************************************************* */}
      <Route
        path="dashboard"
        element={
          // <PrivateRoute>
          <DashboardLayout />
          // </PrivateRoute>
        }
      >
        <Route path="" element={<DashboardHome />} />

        {/* order routes */}
        <Route path="order/dine-in" element={<DineInOrderShowForOwner />} />
        <Route path="order/take-away" element={<TakeAwayOrderShowForOwner />} />
        <Route path="order/create" element={<CreateOrderForOwner />} />
        <Route path="order/edit/:id" element={<EditOrderForOwner />} />
        <Route path="order/details/:id" element={<OrderDetailsForOwner />} />
        {/* menu routes */}
        <Route path="menu/view" element={<MenuViewForOwner />} />
        <Route path="menu/add" element={<MenuAddForOwner />} />
        <Route
          path="menu/edit/:restaurantId/:menuId"
          element={<MenuEditForOwner />}
        />
        {/* layout routes */}
        <Route path="restaurant-layout" element={<RestaurantLayout />} />
        {/* user routes */}
        <Route path="user/view" element={<UserViewForOwner />} />
        <Route path="user/create" element={<UserCreateForOwner />} />
        {/* staff routes */}
        <Route path="staff/view" element={<StaffViewForOwner />} />
        <Route path="staff/crate" element={<StaffAddForOwner />} />
        <Route path="staff/details/:id" element={<StaffDetailsForOwner />} />
        {/* other parent routes */}
        <Route path="analytics" element={<AnalyticsAndReport />} />
        <Route path="subscriptions" element={<SubscriptionsForOwner />} />
        <Route path="buy-subscription" element={<BuySubscription />} />
        <Route path="settings" element={<SettingForOwner />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Route>
      {/* dahboard routes for admin ************************************************************* */}
      <Route
        path="/admin"
        element={
          // <PrivateRoute>
          <AdminDashboardLayout />
          // </PrivateRoute>
        }
      >
        <Route path="" element={<AdminDashboardHome />} />
        <Route path="dashboard" element={<AdminDashboardHome />} />
        {/* restaurant routes */}
        <Route path="restaurant/view" element={<AdminRestaurantView />} />
        <Route path="restaurant/create" element={<AdminRestaurantCreate />} />
        {/* menu routes */}
        <Route path="menu/management" element={<AdminMenuManagement />} />
        {/* qr orders routes */}
        <Route path="qr-orders" element={<AdminQrOrders />} />
        {/* qr design routes */}
        <Route path="qr-designs/view" element={<AdminQrDesignsView />} />
        <Route path="qr-designs/create" element={<AdminQrDesignCreate />} />
        {/* user routes */}
        <Route path="user/view" element={<AdminUserManage />} />
        {/* <Route path="user/view/staff" element={<UserStaff />} /> */}
        {/* <Route path="user/view/staff" element={<UserStaff />} /> */}
        {/* analytics routes */}
        <Route path="analytics" element={<AdminAnalytics />} />
        <Route path="subscriptions" element={<AdminSubscription />} />
        <Route path="subscriptions/choose-design" element={<QrDesign />} />
        <Route path="notification" element={<AdminNotification />} />
        <Route path="setting" element={<AdminSetting />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
