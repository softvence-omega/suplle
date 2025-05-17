import React, { useState } from 'react';
import TabNavigation from './TabNavigation';
import OrderList from './OrderList';
import type { Order, OrderStatus } from './order';



// Sample data for demonstration
const mockOrders: Order[] = [
  { id: '1023', vendor: 'Pizza Place', status: 'Pending', time: '2 min ago' },
  { id: '1024', vendor: 'Pizza Place', status: 'Processing', time: '5 min ago' },
  { id: '1025', vendor: 'Pizza Place', status: 'Completed', time: '10 min ago' },
  { id: '1026', vendor: 'Pizza Place', status: 'Cancelled', time: '30 min ago' },
  { id: '1027', vendor: 'Pizza Place', status: 'Completed', time: '10 min ago' },
  { id: '1028', vendor: 'Pizza Place', status: 'Pending', time: '2 min ago' },
  { id: '1029', vendor: 'Pizza Place', status: 'Cancelled', time: '30 min ago' },
  { id: '1030', vendor: 'Pizza Place', status: 'Completed', time: '10 min ago' },
  { id: '1031', vendor: 'Pizza Place', status: 'Processing', time: '5 min ago' },
  { id: '1032', vendor: 'Pizza Place', status: 'Cancelled', time: '30 min ago' },
  { id: '1033', vendor: 'Pizza Place', status: 'Processing', time: '5 min ago' },
  { id: '1034', vendor: 'Pizza Place', status: 'Cancelled', time: '30 min ago' },
];

const QROrderComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | OrderStatus>('All');
  
  const handleTabChange = (tab: 'All' | OrderStatus) => {
    setActiveTab(tab);
  };

  const handleOrderClick = (orderId: string) => {
    console.log(`Order ${orderId} clicked`);
    // You would typically implement order details view here
  };

  return (
    <div className="">
        <div className="py-6">
             <h2 className='text-2xl text-[#333333]'>QR Orders</h2>
        </div>
               
        <div className="pb-6">
          <TabNavigation activeTab={activeTab} onTabChange={handleTabChange} />
        </div>
        
        <div className=" ">
          <OrderList 
            orders={mockOrders} 
            filter={activeTab} 
            onOrderClick={handleOrderClick} 
          />
        </div>
      </div>
    
  );
};

export default QROrderComponent;