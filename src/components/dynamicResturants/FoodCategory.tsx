
// components/FoodCategory.tsx
import React from 'react'
import Wrapper from '../shared/Wrapper'
import { generateRandomId } from '@/utils/utils'

const foodCategoryData = [
  { id: generateRandomId(), name: 'Offers', value: 'offers' },
  { id: generateRandomId(), name: 'Burgers', value: 'burgers' },
  { id: generateRandomId(), name: 'Fries', value: 'fries' },
  { id: generateRandomId(), name: 'Snacks', value: 'snacks' },
  { id: generateRandomId(), name: 'Cold Drinks', value: 'coldDrinks' },
  { id: generateRandomId(), name: 'Happy Meal', value: 'happyMeals' },
  { id: generateRandomId(), name: 'Desserts', value: 'desserts' },
  { id: generateRandomId(), name: 'Hot Drinks', value: 'hotDrinks' },
  { id: generateRandomId(), name: 'Souces', value: 'souces' },
  { id: generateRandomId(), name: 'Orbit', value: 'orbits' },
]

type Props = {
  selectedCategory: string
  setSelectedCategory: (value: string) => void
}

const FoodCategory: React.FC<Props> = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Wrapper>
      <div className="bg-[#F3F3F3] w-full rounded-xl px-4 py-2">
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {foodCategoryData.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedCategory(item.value)}
              className={`${
                item.value === selectedCategory
                  ? 'text-white bg-black'
                  : 'text-[#252525] bg-[#F3F3F3]'
              } transition hover:bg-black hover:text-white 
                rounded-xl font-semibold text-sm sm:text-base md:text-lg lg:text-xl
                px-3 sm:px-4 py-1 whitespace-nowrap`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default FoodCategory;

