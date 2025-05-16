import { generateRandomId } from '@/utils/utils'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const foodCategoryData = [
    { id: generateRandomId(), name: 'Offers', url: '/offers', value: 'offers' },	
    { id: generateRandomId(), name: 'Burgers', url: '/burgers', value: 'burgers' },
    { id: generateRandomId(), name: 'Fries', url: '/fries', value: 'fries' },
    { id: generateRandomId(), name: 'Snacks', url: '/snacks', value: 'snacks' },
    { id: generateRandomId(), name: 'Cold Drinks', url: '/coldDrinks', value: 'coldDrinks' },
    { id: generateRandomId(), name: 'Happy Meal', url: '/happyMeals', value: 'happyMeals' },
    { id: generateRandomId(), name: 'Desserts', url: '/desserts', value: 'desserts' },
    { id: generateRandomId(), name: 'Hot Drinks',url: '/hotDrinks', value: 'hotDrinks' },
    { id: generateRandomId(), name: 'Souces', url: '/souces', value: 'souces' },
    { id: generateRandomId(), name: 'Orbit', url: '/orbits', value: 'orbits' },
    ]      
const FoodCategory = () => {
    const [selectFilteredValue, setselectFilteredValue] = useState('offers')
  return (
    <div className='bg-[#F3F3F3] border-1 border-solid w-full'>
        <div className="flex flex-col md:flex-row items-center justify-evenly-start  md:justify-start  space-x-4 items-center gap-5">
          {
            foodCategoryData.map((item) => (
              <button onClick={()=>setselectFilteredValue(item.value)} key={item.id}  className={`${item.value === selectFilteredValue ? 'text-white bg-black': 'text-[#252525] bg-[#F3F3F3]'}   text-xl font-bold px-3 py-2 rounded-xl hover:bg-black hover:text-white`}>
                {item.name}
              </button>
            ))
          }
        </div>
    </div>
  )
}

export default FoodCategory