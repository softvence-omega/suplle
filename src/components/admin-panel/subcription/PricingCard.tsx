import React from 'react';
import check from "../../../assets/admin/Check icon.svg"



interface PricingCardProps {
  price: string;
  name: string;
  features: string[];
  popular: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ price, name, features }) => {
  return (
    <div 
      className={`
        rounded-lg shadow-lg bg-white overflow-hidden
        transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
        
      `}
    >
      <div className="md:px-6 py-8 px-3">
        <h3 className="text-center md:text-[40px] text-4xl font-medium bg-gradient-to-r from-[#56DAAB]   to-[#0F9996] bg-clip-text text-transparent tracking-tight">
          {price}<span className="">/mth</span>
        </h3>
        <p className="mt-3 text-center text-lg font-normal text-[#101828]">{name}</p>
        <ul className="mt-7 space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="flex-shrink-0">
              <img src={check} alt="Check icon" />
              </div>
              <p className="ml-3 text-sm text-[#667085] font-normal">{feature}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="px-6 pb-8 w-full flex justify-center items-center">
     
        <button className='w-full px-4 py-2 bg-gradient-to-r from-[#56DAAB] to-[#0F9996] text-white rounded-md md:text-base text-sm '>Get started</button>
      </div>
    </div>
  );
};

export default PricingCard;