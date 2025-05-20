import React, { useState } from 'react';
import RestaurantHeader from './RestaruntHeader';
import MenuCategory from './MenuCategory';
import { initialMenuItems, initialCategories } from './data/Data';
import type { MenuCategory as MenuCategoryType } from './data/Type';
import type { MenuItem as MenuItemType } from './data/Type';

const RestaurantMenu: React.FC = () => {
  const [menuItems] = useState<MenuItemType[]>(initialMenuItems);
  const [categories] = useState<MenuCategoryType[]>(initialCategories);

  const getItemsByCategory = (categoryId: string) => {
    return menuItems.filter(item => item.category === categoryId);
  };

  return (
    <div className="">
      <div className="py-6">
        <RestaurantHeader 
          name="Urban Bistro" 
          address="123 Main Street" 
        />
      </div>

      <h2 className="text-xl font-medium text-[#333333] dark:text-white mb-4">Menu</h2>
      {categories.map((category) => (
        <MenuCategory
          key={category.id}
          title={category.name}
          items={getItemsByCategory(category.id)}
        />
      ))}

      <div className="flex justify-start mt-8">
            <button
              className="mt-6 px-4 py-2 bg-primary text-white rounded-md hover:bg-teal-700 transition duration-200 flex items-center md:text-base text-sm"
             
            >
             Add Menu 
            </button>
          </div>
    </div>
  );
};

export default RestaurantMenu;
