import { Input } from "@/components/ui/input";
import Wrapper from "@/components/shared/Wrapper";
import { FaArrowLeft } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import InputComponent from "@/components/shared/input/auth/TextInput";
import { useForm } from "react-hook-form";
import OrderCardForOwner from "@/components/order/OrderCardForOwner";
import PrimaryButton from "@/components/shared/PrimaryButton";
import SelectInput from "@/components/order/SelectInput";
import { useState } from "react";

const OrderData = [
  { id: 1, title: "Chicken Alfredo", amount: 20.0 },
  { id: 2, title: "Spaghetti Bolognese", amount: 15.0 },
  { id: 3, title: "Caesar Salad", amount: 10.0 },
  { id: 4, title: "Margherita Pizza", amount: 12.0 },
  { id: 5, title: "Grilled Salmon", amount: 25.0 },
  { id: 6, title: "Beef Tacos", amount: 18.0 },
  { id: 7, title: "Vegetable Stir Fry", amount: 14.0 },
  { id: 8, title: "Chocolate Cake", amount: 8.0 },
];

const CreateOrderForOwner = () => {
  const { register } = useForm();
  const [quantities, setQuantities] = useState<{ [title: string]: number }>({});

  const [orderItems, setOrderItems] = useState<
    { title: string; amount: number; quantity: number }[]
  >([]);

  const handleAddToOrder = (title: string, amount: number) => {
    const quantity = quantities[title] || 1;

    setOrderItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.title === title);
      if (existingItem) {
        return prevItems.map((item) =>
          item.title === title
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { title, amount, quantity }];
      }
    });

    // Reset quantity after adding
    setQuantities((prev) => ({ ...prev, [title]: 1 }));
  };

  // const totalQuantity = orderItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = orderItems.reduce(
    (sum, item) => sum + item.amount * item.quantity,
    0
  );

  return (
    <Wrapper>
      <div className="flex items-center space-x-2 mb-4 bg-green-50 p-4 rounded-lg dark:bg-primary-dark dark:text-white">
        <FaArrowLeft />
        <p className="text-lg font-medium text-black dark:text-white">
          Create New Order
        </p>
      </div>

      <div className="flex flex-col gap-4 md:flex-row ">
        {/* LEFT SIDE */}
        <div className="bg-white flex flex-col gap-4 p-4 rounded-lg shadow-md md:w-2/3 w-full dark:bg-primary-dark">
          {/* Customer Info */}
          <div>
            <p className="text-base font-medium text-[#021433] dark:text-white">
              Customer Information
            </p>
            <div className="flex flex-col gap-4 md:flex-row w-full py-4">
              <Input type="name" placeholder="Customer Name" />
              <Input type="number" placeholder="Phone Number" />
            </div>
          </div>

          {/* Order Type */}
          <div>
            <p className="text-base font-medium text-[#021433] dark:text-white">
              Order Type
            </p>
            <div className="flex flex-col gap-4 md:flex-row w-full py-4">
              <Button className="font-normal">Dine-in</Button>
              <Button className="bg-green-50 text-green-500 font-normal">
                Takeaway
              </Button>
            </div>
          </div>

          {/* Table Selection + Search */}
          <div className="pb-8">
            <p className="text-base font-medium text-[#021433] dark:text-white">
              Table Selection
            </p>
            <SelectInput />
          </div>

          <div className="w-full pb-8">
            <InputComponent
              name="search_table"
              label="Search Table"
              labelClassName="text-base font-medium text-[#021433]"
              inputClassName="border-[#E1E9ED] rounded-lg focus:outline-none h-[42px]"
              type="text"
              placeholder="Search Table"
              register={register}
            />
          </div>

          {/* Food Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {OrderData.map((item) => (
              <OrderCardForOwner
                key={item.id}
                title={item.title}
                amount={item.amount}
                quantity={quantities[item.title] || 1}
                onQuantityChange={(quantity) =>
                  setQuantities((prev) => ({ ...prev, [item.title]: quantity }))
                }
                onAddToOrder={() => handleAddToOrder(item.title, item.amount)}
              />
            ))}
          </div>

          {/* Special Requirements */}
          <div className="w-full pb-8">
            <InputComponent
              name="special_requirements"
              label="Special Requirements"
              labelClassName="text-base font-medium text-[#021433]"
              inputClassName="border-[#E1E9ED] rounded-lg focus:outline-none min-h-[100px]"
              type="text"
              placeholder="Enter any special requirements"
              register={register}
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:w-1/3 w-full dark:bg-primary-dark bg-white flex flex-col gap-4 p-4 rounded-lg shadow-md">
          <p className="text-base font-medium text-[#021433] dark:text-white">
            Order Summary
          </p>

          <div className="flex flex-col gap-2 max-h-[200px] overflow-auto">
            {orderItems.length === 0 ? (
              <p className="text-sm text-gray-500">No items added yet.</p>
            ) : (
              orderItems.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center text-sm border-b py-1"
                >
                  <span>
                    {item.title} x {item.quantity}
                  </span>
                  <span>${(item.amount * item.quantity).toFixed(2)}</span>
                </div>
              ))
            )}
          </div>

          <div className="flex flex-row justify-between items-center pt-4 border-t">
            <p className="text-base font-bold text-black dark:text-white">
              Total
            </p>
            <p className="text-base font-bold text-black dark:text-white">
              ${totalPrice.toFixed(2)}
            </p>
          </div>

          <div className="pb-8">
            <p className="text-base font-medium text-[#021433] dark:text-white ">
              Payment Method
            </p>
            <SelectInput />
          </div>

          <div className="flex justify-end">
            <PrimaryButton
              children="Create Order"
              className="dark:bg-primary dark:text-white"
              onClick={() => {
                console.log("Order Created", orderItems);
              }}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CreateOrderForOwner;
