import { generateRandomId } from '@/utils/utils'
import React from 'react'
import food1 from '@/assets/offerItem/offer1.jpg'
import food2 from '@/assets/offerItem/offer2.jpg'
import food3 from '@/assets/offerItem/offer3.jpg'
import { Plus } from 'lucide-react'
import Wrapper from '../shared/Wrapper'


const offerdata = [
    {
        id:generateRandomId(),
        title:'Big Mac',
        description:'A delicious burger with two beef patties, lettuce, cheese, pickles, onions, and special sauce.',
        price: 5.99,
        imageUrl:food1,
        discount: 10,
    },
    {
        id:generateRandomId(),
        title:'Big Mac',
        description:'A delicious burger with two beef patties, lettuce, cheese, pickles, onions, and special sauce.',
        price: 10.99,
        imageUrl:food2,
        discount: 20,
    },
    {
        id:generateRandomId(),
        title:'Big Mac',
        description:'A delicious burger with two beef patties, lettuce, cheese, pickles, onions, and special sauce.',
        price: 7.99,
        imageUrl:food3,
        discount: 15,
    }
]

const OfferItem = () => {
  return (
    <Wrapper>
    <div className="flex flex-wrap gap-4 justify-center items-center p-5 md:p-12">
        {offerdata.map((item) => (
            <div
                key={item.id}
                className="relative w-full h-[330px] max-w-sm rounded-xl overflow-hidden shadow-lg bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: `url(${item.imageUrl})` }}
            >   
  {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40 z-0" />

  {/* Top Discount Badge */}
                 <div className="absolute -top-1 right-3 bg-primary-dark text-white text-sm font-semibold px-4 py-3 rounded-lg z-10">
                    -{item.discount}%
                </div>

  {/* Content */}
                <div className="relative z-10 p-4 flex flex-col justify-end h-full">
                <p className="text-lg text-[#FC8A06] font-medium">Urban Bistro</p>
                <h3 className="text-xl text-white font-bold leading-tight mt-1">
                 First Order Discount
                 </h3>
                </div>

  {/* Plus Button */}
                <div className="absolute bottom-0 right-0 bg-white bg-opacity-60 rounded-tl-4xl px-3 py-2">
                <Plus className="text-white rounded-full bg-black text-lg font-bold" size={30} />
                </div>
            </div>

         ))}
    </div>
    </Wrapper>
  )
}

export default OfferItem