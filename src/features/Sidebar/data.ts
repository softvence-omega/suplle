import WindowIcon from "@/components/icons/WindowIcon";
import ShoppingCartIcon from "@/components/icons/ShoppingCart";
import SpoonIcon from "@/components/icons/SpoonIcon";
import LayoutIcon from "@/components/icons/LayoutIcon";
import PeopleIcon from "@/components/icons/PeopleIcon";
import PeopleGroupIcon from "@/components/icons/PeopleGroupIcon";
import AnalyticsIcon from "@/components/icons/AnalyticsIcon";
import SettingIcon from "@/components/icons/SettingIcon";
import RestaurantIcon from "@/components/icons/RestaurantIcon";
import QRCodeIcon from "@/components/icons/QRCodeIcon";
import DollarIcon from "@/components/icons/DollerIcon";
import { generateRandomId } from "@/utils/utils";

export const adminSeiderBarData = [
  {
    id: generateRandomId,
    label: "Dashboard",
    icon: WindowIcon,
    url: "/admin/dashboard",
  },
  {
    id: generateRandomId(),
    label: "Restaurant",
    icon: RestaurantIcon,
    children: [
      {
        id: generateRandomId(),
        label: "Restaurant",
        url: "/admin/restaurant",
      },
      {
        id: generateRandomId(),
        label: "Menu Management",
        url: "/admin/menu",
      },
    ],
  },
  {
    id: generateRandomId(),
    label: "Qr Orders",
    icon: ShoppingCartIcon,
    url: "/admin/qr-orders",
  },
  {
    id: generateRandomId(),
    label: "QR Designs",
    icon: QRCodeIcon,
    url: "/admin/qr-designs",
  },
  {
    id: generateRandomId(),
    label: "User",
    icon: PeopleIcon,
    url: "/admin/user",
  },
  {
    id: generateRandomId(),
    label: "Analytics & Reports",
    icon: AnalyticsIcon,
    url: "/admin/analytics",
  },
  {
    id: generateRandomId(),
    label: "Subscriptions",
    icon: DollarIcon,
    url: "/admin/subscriptions",
  },
];

export const ownerSeiderBarData = [
  {
    id: generateRandomId(),
    label: "Dashboard",
    icon: WindowIcon,
    url: "/dashboard",
  },
  {
    id: generateRandomId(),
    label: "Order",
    icon: ShoppingCartIcon,
    url: "/order",
  },
  {
    id: generateRandomId(),
    label: "Menu Management",
    icon: SpoonIcon,
    url: "/menu",
  },
  {
    id: generateRandomId(),
    label: "Restaurant layout",
    icon: LayoutIcon,
    url: "/layout",
  },
  {
    id: generateRandomId(),
    label: "User Management",
    icon: PeopleIcon,
    url: "/user",
  },
  {
    id: generateRandomId(),
    label: "Staff Management",
    icon: PeopleGroupIcon,
    url: "/staff",
  },
  {
    id: generateRandomId(),
    label: "Analytics & Reports",
    icon: AnalyticsIcon,
    url: "/analytics",
  },
  {
    id: generateRandomId(),
    label: "Settings",
    icon: SettingIcon,
    url: "/settings",
  },
];
