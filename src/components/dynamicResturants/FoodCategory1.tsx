import { generateRandomId } from '@/utils/utils'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../shared/Wrapper'

const foodCategoryData1 = [
    { id: generateRandomId(), name: 'Starters', url: '/offers', value: 'Starters' },	
    { id: generateRandomId(), name: 'Main Course', url: '/burgers', value: 'Main Course' },
    { id: generateRandomId(), name: 'Soft Drinks', url: '/fries', value: 'Soft Drinks' }
    ]      
const FoodCategory1 = () => {
    const [selectFilteredValue, setselectFilteredValue] = useState('Starters')
  return (
    <Wrapper>
    <div className='bg-[#F3F3F3] border-1 border-solid w-full'>
        <div className="flex flex-col md:flex-row items-center justify-start space-x-4 items-center gap-5">
          {
            foodCategoryData1.map((item) => (
              <button onClick={()=>setselectFilteredValue(item.value)} key={item.id}  className={`${item.value === selectFilteredValue ? 'text-white bg-black': 'text-[#252525] bg-[#F3F3F3]'}   text-xl font-bold px-3 py-2 rounded-xl hover:bg-black hover:text-white`}>
                {item.name}
              </button>
            ))
          }
        </div>
    </div>
    </Wrapper>
  )
}

export default FoodCategory1