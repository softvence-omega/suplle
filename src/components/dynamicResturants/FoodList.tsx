import React from 'react';

// Food type definition
type Food = {
  id: number;
  name: string;
  description: string;
  variant: string;
  price: number;
  size: string;
  available: boolean;
  image: string;
};

// Food data array
const foodItems: Food[] = [
  {
    id: 1,
    name: "Bacon Burger",
    description: "Satisfy your cravings with our best-selling",
    variant: "Cheeseburger",
    price: 20,
    size: "Small",
    available: true,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Veggie Delight",
    description: "A healthy vegetarian option packed with flavor",
    variant: "Vegetarian",
    price: 15,
    size: "Medium",
    available: true,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop"
  }
];

// Food Card Component
type FoodCardProps = {
  food: Food;
};

const FoodCard: React.FC<FoodCardProps> = ({ food }) => {
  return (
    <div className="w-72 border border-gray-200 rounded-xl font-sans shadow-sm relative overflow-hidden hover:shadow-md transition-shadow">
      {/* Availability Badge */}
      {food.available && (
        <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
          Available
        </div>
      )}
      
      {/* Food Image */}
      <div className="w-full h-40 bg-gray-100 rounded-lg mb-3 overflow-hidden">
        <img 
          src={food.image} 
          alt={food.name} 
          className="w-full h-auto object-cover"
        />
      </div>
      
      {/* Size and Price */}
      <div className="flex justify-between items-center mb-2 px-5">
        <span className="text-sm text-[#484B52] font-normal">{food.size} Size</span>
        <span className="text-2xl font-medium text-[#EEBD4F]">${food.price}</span>
      </div>
      
      {/* Food Name */}
      <h2 className="text-2xl font-medium text-[#393A45] mb-1 px-5">{food.name}</h2>
      
      {/* Description */} 
      <p className="text-base text-[#484B52] font-normal mb-3 leading-snug px-5">
        {food.description}
      </p>
      
      {/* Variant */}
      <div className="pt-3 border-t border-dashed border-gray-200 text-gray-700 px-5">
        {food.variant}
      </div>
    </div>
  );
};

// Food List Component
const FoodList = () => {
  return (
    <div className="p-6">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {foodItems.map(food => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default FoodList;