import React from 'react';
import { GrCart } from "react-icons/gr";

import { ChevronRight } from 'lucide-react';
import type { Order } from './order';

interface OrderItemProps {
  order: Order;
  onClick: (orderId: string) => void;
}

const OrderItem: React.FC<OrderItemProps> = ({ order, onClick }) => {
  

  return (
    <div 
      onClick={() => onClick(order.id)}
      className="flex items-center justify-between py-4  border-b border-[#DDDDDD] hover:bg-gray-50 transition-colors duration-150 cursor-pointer"
    >
      <div className="flex items-center space-x-3">
        <GrCart  className="h-6 w-6 text-[#333333]" />
        <div className="flex items-center space-x-1">
          <span className="text-[#333333]">Order</span>
          <span className="text-[#333333]">#{order.id}</span>
        </div>
      </div>
      
      <div className="">
        <span className="text-[#203849] text-sm font-medium ">{order.vendor}</span>
         </div>
    <div className=" text-base font-normal text-black">
         <span className='text-base font-normal text-black'>
          {order.status}
        </span>
    </div>

    <div className="">
          <span className="text-gray-500">{order.time}</span>
    </div>
      <div className="">
              <ChevronRight className="h-6 w-6 text-[#333333]" />
      </div>
      
      </div>
   
  );
};

export default OrderItem;