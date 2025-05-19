import React from 'react';

import PricingCard from './PricingCard';
import subcription from "../../../assets/admin/subcription.png"

const PricingSection: React.FC = () => {
  const basicFeatures = [
    'Access to basic restaurant management tools',
    'Manage up to 2 restaurants',
    'Limited analytics features',
    'Email support',
  ];

  const businessFeatures = [
    'Access to all restaurant management tools',
    'Manage up to 5 restaurants',
    'Full analytics features',
    'Priority email support',
    'QR code generation for orders',
    'Basic subscription to order management',
  ];

  const enterpriseFeatures = [
    'Access to advanced restaurant management tools',
    'Manage unlimited restaurants',
    'Advanced analytics with custom reporting',
    '24/7 support',
    'Custom QR code design',
  ];

  return (
    <div className="  ">
      <div className=" ">
        
          <h2 className="text-xl font-normal bg-gradient-to-r from-[#56DAAB]   to-[#0F9996] bg-clip-text text-transparent ">Pricing</h2>
          <p className="mt-3 text-2xl font-normal text-[#101828] ">
            Simple, transparent pricing
          </p>
          <p className="mt-6 text-lg font-normal text-[#667085] ">
            We believe Untitled should be accessible to all companies, no matter the size.
          </p>
        </div>

        <div className="md:mt-[100px] mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8 items-start">
          <PricingCard
            price="$10"
            name="Basic plan"
            features={basicFeatures}
            popular={false}
          />
          
          <div className="relative md:mt-0 mt-[100px]">
            <div className="md:absolute lg:-top-18 md:-top-20 right-15 flex justify-center">
              <span className=" text-[#11A8A5]  text-sm font-medium">
                Most popular!
              </span>
            </div>
            <div className="md:absolute lg:-top-15 xl:right-[35%] lg:right-[60%] flex justify-center md:pr-0 pr-35">
            <img src={subcription} alt="subcription" />
            </div>

            <PricingCard
              price="$20"
              name="Business plan"
              features={businessFeatures}
              popular={true}
            />
          </div>
          
          <PricingCard
            price="$40"
            name="Enterprise plan"
            features={enterpriseFeatures}
            popular={false}
          />
        </div>
      </div>
  
  );
};

export default PricingSection;