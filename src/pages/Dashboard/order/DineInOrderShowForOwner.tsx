import OrderListRow from "@/components/dashboard/orders/OrderListRow";
import GridIcon from "@/components/icons/GridIcon";
import ListIcon from "@/components/icons/ListIcon";
import InputComponent from "@/components/shared/input/auth/TextInput";
import OrderCard from "@/components/shared/OrderCard";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { fetchOrders } from "@/store/features/orders/orderSlice";
import type { Order } from "@/Types/OrderTypes";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function DineInOrderShowForOwner() {
  const { register } = useForm();
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const dispatch = useAppDispatch();

  const { data } = useAppSelector((state) => state.orders);

  const dineInOrders = data.filter((order) => order.orderType === "dine in");

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  console.log(data);

  const handleCreateOrder = () => {
    navigate("/dashboard/order/create");
  };
  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between">
        <h5 className="dark:text-white text-[#333333] text-xl font-medium">
          Dine-in Orders
        </h5>
        <Button onClick={handleCreateOrder}>+ Add Order</Button>
      </div>

      <div className="flex flex-col md:flex-row gap-5 mt-5 items-start md:items-center justify-between ">
        <div className="flex flex-col md:flex-row  w-[70%]">
          <div className="w-1/2">
            <p className="dark:text-white text-base font-normal text-[#203849]">
              Order Status
            </p>

            <Select>
              <SelectTrigger className=" h-[42px]">
                <SelectValue placeholder="Order Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="w-1/2">
            <InputComponent
              name="search_table"
              label="Search Table"
              labelClassName="text-[#203849] text-base font-normal"
              inputClassName=" border-[#E1E9ED] rounded-lg focus:outline-none h-[42px]"
              type="text"
              placeholder="Search Table"
              register={register}
            />
          </div>
        </div>

        <div className="gap-8">
          <button
            className="dark:text-white"
            onClick={() => setViewMode("grid")}
          >
            <GridIcon
              className={`${
                viewMode === "grid" ? "text-primary" : "text-gray-400 "
              }`}
            />
          </button>
          <button onClick={() => setViewMode("list")}>
            <ListIcon
              className={`${
                viewMode === "list" ? "text-primary" : "text-gray-400"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="mt-6">
        {viewMode === "grid" ? (
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {dineInOrders.map((order: Order) => (
              <OrderCard key={order._id} order={order} />
            ))}
          </div>
        ) : (
          <div className="overflow-x-auto rounded-xl shadow-sm border">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 text-[#2A3342] text-sm font-medium dark:bg-black dark:text-[#FFFFFF]">
                <tr>
                  <th className="py-3 px-4 text-left">Order No.</th>
                  <th className="py-3 px-4 text-left">Table</th>
                  <th className="py-3 px-4 text-left">Type</th>
                  <th className="py-3 px-4 text-left">Items Name</th>
                  <th className="py-3 px-4 text-left">Quantity</th>
                  <th className="py-3 px-4 text-left">Price per Item</th>
                  <th className="py-3 px-4 text-left">Total</th>
                  <th className="py-3 px-4 text-left">Delivery Status</th>
                  <th className="py-3 px-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-[#161616] ">
                {dineInOrders.map((order: Order) => (
                  <OrderListRow key={order._id} order={order} />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default DineInOrderShowForOwner;
