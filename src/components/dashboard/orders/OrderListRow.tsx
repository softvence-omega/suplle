import React from 'react';
import { Eye, Pencil } from 'lucide-react';
import type { OrderCardProps } from './OrderCard';

const statusStyles: Record<string, string> = {
  Pending: 'bg-blue-100 text-blue-800',
  InProgress: 'bg-yellow-100 text-yellow-800',
  Delivered: 'bg-green-100 text-green-800',
  Cancel: 'bg-red-100 text-red-800',
  Ready: 'bg-green-200 text-green-800',
  Preparing: 'bg-orange-200 text-orange-800',
  Completed: 'bg-slate-200 text-slate-800',
};

const OrderListRow: React.FC<OrderCardProps> = ({
  orderId,
  table,
  type,
  items,
  total,
  status,
}) => {
  return (
    <tr className="border-b text-sm text-[#2A3342]">
      <td className="py-3 px-4 font-medium">{orderId}</td>
      <td className="py-3 px-4">{table}</td>
      <td className="py-3 px-4 font-semibold">{type}</td>
      <td className="py-3 px-4">
        {items.map((item, index) => (
          <p key={index}>
            {index + 1}. {item.name}
          </p>
        ))}
      </td>
      <td className="py-3 px-4">
        {items.map((item, index) => (
          <p key={index}>{item.quantity}</p>
        ))}
      </td>
      <td className="py-3 px-4">
        {items.map((item, index) => (
          <p key={index}>
            ${((parseFloat(total.replace('$', '')) / items.reduce((sum, i) => sum + i.quantity, 0)) * item.quantity).toFixed(2)}
          </p>
        ))}
      </td>
      <td className="py-3 px-4">{total}</td>
      <td className="py-3 px-4">
        <span className={`px-3 py-1 text-xs font-medium rounded-full ${statusStyles[status]}`}>
          {status}
        </span>
      </td>
      <td className="py-3 px-4 flex items-center gap-2">
        <Eye size={16} className="text-green-600 cursor-pointer" />
        <span className="text-gray-300">|</span>
        <Pencil size={16} className="text-green-600 cursor-pointer" />
      </td>
    </tr>
  );
};

export default OrderListRow;
