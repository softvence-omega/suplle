import { Route, Routes } from "react-router-dom";
// import PrivateRoute from "./privateRoute";
import DashboardLayout from "@/layout/DashboardLayout";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import AdminDashboardLayout from "@/layout/AdminDashboardLayout";
import DashboardHome from "@/pages/Dashboard/DashboardHome";
import Orders from "@/pages/Dashboard/Orders";
import MenuManagement from "@/pages/Dashboard/MenuManagement";
import RestaurantLayout from "@/pages/Dashboard/RestaurantLayout";
import UserManagement from "@/pages/Dashboard/UserManagement";
import StaffManagement from "@/pages/Dashboard/StaffManagement";
import AnalyticsAndReport from "@/pages/Dashboard/AnalyticsAndReport";
import Setting from "@/pages/Dashboard/Setting";
import AdminDashboardHome from "@/pages/AdminDashboard/AdminDashboardHome";
import AdminRestaurant from "@/pages/AdminDashboard/AdminRestaurant";
import AdminQrOrders from "@/pages/AdminDashboard/AdminQrOrders";
import AdminQrDesigns from "@/pages/AdminDashboard/AdminQrDesigns";
import AdminUserManagement from "@/pages/AdminDashboard/AdminUserManagement";
import AdminAnalytics from "@/pages/AdminDashboard/AdminAnalytics";
import AdminSubscription from "@/pages/AdminDashboard/AdminSubscription";
import Home from "@/pages/Home";
import DynamiRestaurant from "@/pages/DynamiRestaurant";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurant/:id" element={<DynamiRestaurant />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="dashboard"
        element={
          // <PrivateRoute>
          <DashboardLayout />
          // </PrivateRoute>
        }
      >
        <Route path="" element={<DashboardHome />} />
        <Route path="orders" element={<Orders />} />
        <Route path="menu" element={<MenuManagement />} />
        <Route path="restaurant-layout" element={<RestaurantLayout />} />
        <Route path="user-management" element={<UserManagement />} />
        <Route path="staff-management" element={<StaffManagement />} />
        <Route path="analytics" element={<AnalyticsAndReport />} />
        <Route path="setting" element={<Setting />} />
      </Route>
      <Route
        path="/admin"
        element={
          // <PrivateRoute>
          <AdminDashboardLayout />
          // </PrivateRoute>
        }
      >
        <Route path="" element={<AdminDashboardHome />} />
        <Route path="restaurant" element={<AdminRestaurant />} />
        <Route path="qr-orders" element={<AdminQrOrders />} />
        <Route path="qr-designs" element={<AdminQrDesigns />} />
        <Route path="user" element={<AdminUserManagement />} />
        <Route path="analytics" element={<AdminAnalytics />} />
        <Route path="subscription" element={<AdminSubscription />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
