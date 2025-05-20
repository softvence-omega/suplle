import React from "react";
import { FaUserFriends, FaEye, FaPen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface OrderItem {
  name: string;
  quantity: number;
}

interface OrderCardProps {
  orderId: string;
  table: string;
  type: string;
  people: number;
  status: string;
  items: OrderItem[];
  time: string;
  total: string;
}

const OrderCard: React.FC<OrderCardProps> = ({
  orderId,
  table,
  type,
  people,
  status,
  items,
  time,
  total,
}) => {
  const navigate = useNavigate()
  const handleOrderDetails = () =>{
    // Handle order details logic here
    navigate(`/dashboard/order/details/${orderId}`)
  }
  const handleOrderEdit = () =>{
    // Handle order edit logic here
    navigate(`/dashboard/order/edit/${orderId}`)
  
  }
  return (
    <div className="bg-white dark:bg-[#161616] rounded-xl shadow-md p-4 space-y-3">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
            <div className="flex items-center gap-2">
          <p className="font-medium text-base text-[#465049] dark:text-[#FFFFFF]">{orderId}</p>
          <div className="flex items-center gap-1 text-xs dark:bg-secondary-dark bg-green-100 text-green-700 px-2 py-[2px] rounded">
              <FaUserFriends className="text-xs" />
              <span className="text-[12px] font-medium dark:text-[#FFFFFF]">{people}</span>
            </div>
            </div>
          <p className="text-sm font-normal text-[#7D7D7D] dark:text-[#FFFFFF]">{table} • {type}</p>
        </div>
        <span className="text-xs bg-[#E7F3FF] text-[#203849] px-3 py-1 rounded-full dark:text-[#FFFFFF] dark:bg-[#030303]">{status}</span>
      </div>

      {/* Items List */}
      <div className="space-y-1">
        {items.map((item, index) => (
          <p key={index} className="text-sm text-[#203849] font-normal dark:text-[#FFFFFF]">
            {item.name} x {item.quantity}
          </p>
        ))}
      </div>

      {/* Time and Total */}
      <div className="flex justify-between items-center text-sm text-gray-700 border-t pt-3">
        <span className="text-xs dark:text-[#FFFFFF]">{time}</span>
        <span className="text-base font-medium text-gray-900 dark:text-[#FFFFFF]">{total}</span>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-4 text-teal-600 text-lg border-t pt-3">
        <FaEye onClick={handleOrderDetails} className="cursor-pointer" />
        <FaPen onClick={handleOrderEdit} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default OrderCard;
