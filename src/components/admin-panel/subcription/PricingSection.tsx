import React, { useEffect } from "react";

import PricingCard from "./PricingCard";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { fetchSubscriptions } from "@/store/features/admin/subscriptionPlan";

const PricingSection: React.FC = () => {
  const dispatch = useAppDispatch();

  const { subscriptions } = useAppSelector((state) => state.subscriptionPlan);

  useEffect(() => {
    dispatch(fetchSubscriptions());
  }, [dispatch]);

  const middleIndex =
    subscriptions && subscriptions.length > 0
      ? Math.floor(subscriptions.length / 2)
      : 1;

  console.log(subscriptions, "subscription in admin page");

  return (
    <div>
      <p className="mt-3 text-2xl font-normal text-[#101828] dark:text-white text-center font-semibold">
        Simple, transparent pricing
      </p>
      <p className="mt-6 text-lg font-normal text-[#667085] dark:text-white text-center">
        We believe Untitled should be accessible to all companies, no matter the
        size.
      </p>

      <div className="md:mt-[100px] mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
        {[...subscriptions].reverse().map((sub, idx) =>
          idx === middleIndex ? (
            <div
              key={sub._id || idx}
              className="relative mt-[80px] lg:mt-0 h-full"
            >
              {/* Badge & Icon */}
              <div className="lg:absolute lg:top-[-80px] lg:right-[100px] flex flex-col justify-center">
                <div className="text-[#11A8A5] dark:text-white text-sm font-medium flex gap-3">
                  <div className="pt-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="49"
                      height="44"
                      viewBox="0 0 49 44"
                      fill="none"
                    >
                      <path
                        d="M30.6508 5.52579C18.8564 12.6255 12.0237 25.1395 7.76348 37.3008C7.54445 37.9258 7.28118 38.5545 7.03942 39.1659C6.45933 37.9808 2.56022 28.1098 0.831862 28.7761C-0.178245 29.1655 0.350191 30.4323 0.552696 30.9436C2.01863 34.64 3.46072 37.9498 5.24058 41.5128C6.58017 44.1951 9.26479 43.399 11.9283 42.4846C15.9947 41.0885 16.3334 40.7147 20.5036 39.1241C21.1909 38.8619 21.9112 38.6446 22.5508 38.324C23.3029 37.9465 24.1215 37.1723 23.7555 36.3687C23.3407 35.4579 22.3695 35.5542 21.5304 35.9203C21.3552 35.9971 21.1775 36.068 20.9984 36.135C19.0306 36.8698 10.0816 40.7403 9.8076 40.143C9.7151 39.9419 9.75655 39.7031 9.80143 39.4794C11.0951 33.0248 14.1603 26.8178 17.727 21.122C20.1268 17.2892 23.1594 13.7995 26.6571 10.826C29.4678 8.43642 32.6152 6.38333 36.018 4.92699C39.6668 3.36509 43.1616 2.9557 47.0157 2.61282C49.2344 2.41564 47.5478 0.439553 46.3232 0.249997C44.9774 0.0412832 43.5126 0.540014 42.1883 0.845779C37.9988 1.81516 34.1492 3.42006 30.6508 5.52579Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="">Most popular!</p>
                </div>
              </div>
              {/* Pricing Card */}
              <PricingCard
                price={`$${sub.price}`}
                name={sub.name}
                features={sub.features}
                popular={true}
              />
            </div>
          ) : (
            <PricingCard
              key={sub._id || idx}
              price={`$${sub.price}`}
              name={sub.name}
              features={sub.features}
              popular={false}
            />
          )
        )}
      </div>
    </div>
  );
};
export default PricingSection;
