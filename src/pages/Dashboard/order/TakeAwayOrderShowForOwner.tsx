import OrderListRow from '@/components/dashboard/orders/OrderListRow'
import GridIcon from '@/components/icons/GridIcon'
import ListIcon from '@/components/icons/ListIcon'
import InputComponent from '@/components/shared/input/auth/TextInput'
import OrderCard from '@/components/shared/OrderCard'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const orders = [
  {
    orderId: "#001",
    table: "Table 12",
    type: "Dine-in",
    people: 2,
    status: "Completed",
    items: [
      { name: "Spaghetti Carbonara", quantity: 1 },
      { name: "Garlic Bread", quantity: 1 },
    ],
    time: "1:15 PM",
    total: "$48.00",
  },
  {
    orderId: "#002",
    table: "Table 45",
    type: "Dine-in",
    people: 8,
    status: "InProgress",
    items: [
      { name: "Margherita Pizza", quantity: 1 },
      { name: "Caesar Salad", quantity: 2 },
    ],
    time: "2:56 AM",
    total: "$133.50",
  },
  {
    orderId: "#003",
    table: "Takeaway",
    type: "Takeaway",
    people: 1,
    status: "Preparing",
    items: [
      { name: "Burger", quantity: 2 },
      { name: "Fries", quantity: 1 },
    ],
    time: "11:45 AM",
    total: "$29.90",
  },
  {
    orderId: "#004",
    table: "Table 9",
    type: "Dine-in",
    people: 4,
    status: "Ready",
    items: [
      { name: "Sushi Platter", quantity: 1 },
      { name: "Miso Soup", quantity: 4 },
    ],
    time: "7:30 PM",
    total: "$82.75",
  },
  {
    orderId: "#005",
    table: "Delivery",
    type: "Delivery",
    people: 1,
    status: "Delivered",
    items: [
      { name: "Pad Thai", quantity: 1 },
      { name: "Spring Rolls", quantity: 1 },
    ],
    time: "5:10 PM",
    total: "$37.20",
  },
];

function TakeAwayOrderShowForOwner() {
  const { register } = useForm();
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const handleCreateOrder = () => {
    navigate('/dashboard/order/create')
  }
  return (
    <div>
      <div className='flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between'>
        <h5 className='text-[#333333] dark:text-white text-xl font-medium'>Takeaway Orders</h5>
        <Button onClick={handleCreateOrder}>+ Add Order</Button>
      </div>

      <div className='flex flex-col md:flex-row gap-5 mt-5 items-start md:items-center justify-between '>
        <div className='flex flex-col md:flex-row w-[70%]' >
          <div className='w-1/2'>
          <p className='text-base dark:text-white font-normal text-[#203849]'>Order Status</p>

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


        <div className='w-1/2'>
          <InputComponent
          name="search_table"
          label="Search Table"
          labelClassName='text-[#203849] text-base font-normal'
          inputClassName=' border-[#E1E9ED] rounded-lg   focus:outline-none h-[42px]'
          type='text'
          placeholder='Search Table'
          register={register}
        />
        </div>
        </div>
        

        <div className='gap-5'>
          <button onClick={() => setViewMode('grid')}>
            <GridIcon className={`${viewMode === 'grid' ? 'text-primary' : 'text-gray-400'}`} />
          </button>
          <button onClick={() => setViewMode('list')}>
            <ListIcon className={`${viewMode === 'list' ? 'text-primary' : 'text-gray-400'}`} />
          </button>
        </div>


      </div>




      {/* Cards */}
      <div className="mt-6">
  {viewMode === 'grid' ? (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {orders.map((order) => (
        <OrderCard key={order.orderId} {...order} />
      ))}
    </div>
  ) : (
    <div className="overflow-x-auto rounded-xl shadow-sm border">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50 text-[#2A3342] text-sm font-medium">
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
        <tbody className="bg-white">
          {orders.map((order) => (
            <OrderListRow key={order.orderId} {...order} view="list" />
          ))}
        </tbody>
      </table>
    </div>
  )}
</div>
    </div>
  );
}

export default TakeAwayOrderShowForOwner;

