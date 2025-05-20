import React from 'react';
import { PlusCircle } from 'lucide-react';
import type { MenuItem as MenuItemType } from './data/Type';

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <div className="bg-[#FDFDFD] dark:bg-[#161616] rounded-lg shadow-[0px_0px_1px_2px_rgba(0,0,0,.04)] overflow-hidden ">
      <div className="flex justify-between p-4">
        <div className="flex-1">
          <h3 className="text-base font-medium text-[#333333] dark:text-white">{item.name}</h3>
          <p className="text-sm text-[#333333] dark:text-white mt-1">{item.size}</p>
          <p className="text-base text-[#333333] dark:text-white font-medium mt-1">
            {item.available ? 'Available' : 'Unavailable'}
          </p>
          <p className="text-2xl font-bold text-[#EEBD4F] mt-2">${item.price}</p>
          <p className="text-base text-[#333333] mt-2 line-clamp-2 dark:text-white">{item.description}</p>
        </div>
        <div className="relative ml-4 w-24 h-24 flex-shrink-0 rounded-md">
          <img
            src={item.image}
            alt={item.name}
            className="absolute inset-0 w-full h-full object-cover rounded-md"
          />
          <div className="absolute bottom-0 right-0  bg-[#FFFFFF] pl-3 pt-3  rounded-tl-4xl ">
            <button
            className=" bg-black rounded-full p-1 shadow-md hover:bg-amber-600 transition-colors duration-200"
            aria-label="Add to order"
          >
            <PlusCircle size={20} className="text-white" />
          </button>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default MenuItem;