import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
type Status = "ALL_MENU" | "ADD_MENU" | "CATEGORIES";
const AdminMenuManagement = () => {
  const [tabs, setTabs] = useState<Status>("ALL_MENU");
  const [restaurantForm, setRestaurantForm] = useState(false);
  return (
    <div className="font-rubik">
      <div className="space-y-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>Admin Panel</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                {tabs === "ALL_MENU"
                  ? "All Menu"
                  : tabs === "ADD_MENU"
                  ? "Add Menu"
                  : tabs === "CATEGORIES" && "Categories"}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="inline-flex sm:flex flex-col sm:flex-row sm:items-center space-y-4 justify-between mt-7">
          <h1 className="font-rubik text-sm sm:text-[18px] ">
            {!restaurantForm ? "Menu Management" : "Add Restaurants"}
          </h1>
          <Button
            onClick={() => setRestaurantForm(!restaurantForm)}
            className={cn(
              "bg-gradient-to-br from-green-400 font-light to-green-800 rounded sm:py-5 sm:px-5 cursor-pointer tracking-wide",
              restaurantForm && "hidden"
            )}
          >
            Add Restaurant
          </Button>
        </div>
      </div>
      {/*  TABS */}
      <div className={cn(restaurantForm && "hidden", "")}>
        <div className="flex items-center space-x-5 border-b-[2px]">
          <button
            onClick={() => setTabs("ALL_MENU")}
            className={cn(
              "py-[8px] sm:py-[12px] pr-[15px] sm:pr-[25px] text-sm sm:text-[15px] font-light cursor-pointer",
              tabs === "ALL_MENU" &&
                "border-b-[2px] font-normal border-green-600"
            )}
          >
            All Menu
          </button>
          <button
            onClick={() => setTabs("ADD_MENU")}
            className={cn(
              "py-[8px] sm:py-[12px] pr-[15px] sm:pr-[25px] text-sm sm:text-[15px] font-light cursor-pointer",
              tabs === "ADD_MENU" &&
                "border-b-[2px] border-green-600 font-normal"
            )}
          >
            Add Menu
          </button>
          <button
            onClick={() => setTabs("CATEGORIES")}
            className={cn(
              "py-[8px] sm:py-[12px] pr-[15px] sm:pr-[25px] text-sm sm:text-[15px] font-light cursor-pointer",
              tabs === "CATEGORIES" &&
                "border-b-[2px] border-green-600 font-normal"
            )}
          >
            Categories
          </button>
        </div>
        {/* TABLE */}
        {/* {tabs === "ALL_MENU" ? (
          <AllRestaurant />
        ) : tabs === "ACTIVE" ? (
          <Activity />
        ) : (
          tabs === "PENDING" && <Pending />
        )}{" "} */}
      </div>
      {/* ADD RESTAURANT FORM HERE */}
      
    </div>
  );
};

export default AdminMenuManagement;
