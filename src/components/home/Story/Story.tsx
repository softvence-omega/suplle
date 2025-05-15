import { useState, useEffect } from "react";

const Story = () => {
  // State with explicit number type
  const [users, setUsers] = useState<number>(0);
  const [restaurants, setRestaurants] = useState<number>(0);
  const [orders, setOrders] = useState<number>(0);

  // Function to animate numbers with typed parameters
  const animateNumber = (
    setNumber: React.Dispatch<React.SetStateAction<number>>,
    target: number,
    duration: number
  ) => {
    let start = 0;
    const increment = target / (duration / 50); // Adjust speed
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setNumber(target);
        clearInterval(timer);
      } else {
        setNumber(Math.floor(start));
      }
    }, 50);
  };

  // Run animation on component mount
  useEffect(() => {
    animateNumber(setUsers, 10000, 2000); // 10,000+ users in 2 seconds
    animateNumber(setRestaurants, 500, 1500); // 500+ restaurants in 1.5 seconds
    animateNumber(setOrders, 3000, 1800); // 3,000+ orders in 1.8 seconds
  }, []);

  return (
    <div className="lg:h-[675px] relative">
      <div className="lg:flex justify-center items-center gap-2 z-10">
        <div>
          <h1 className="text-6xl lg:w-[653px]">
            Numbers <span className="text-primary">Are Telling</span> Our Story
          </h1>
          <p className="mt-10 lg:w-[653px] text-2xl">
            Suplle is transforming how restaurants, pubs, and bars operate — and
            the numbers speak for themselves.
          </p>
        </div>
        <div className="bg-[url(/background/Ellipse33.svg)] w-1/2 h-[1000px] lg:relative">
          <div className="lg:absolute top-[200px] left-[220px] bg-white w-[510px] h-[631px] py-12">
            <div className="flex flex-col gap-8">
              <div className="px-8">
                <h1 className="text-primary text-7xl">
                  {users.toLocaleString()}+
                </h1>
                <p className="text-gray-400 text-lg mt-5">Active Users</p>
              </div>
              <hr className="w-full h-px border-0 bg-[linear-gradient(98deg,_#6DDCFF_0%,_#7F60F9_100%)]" />
              <div className="px-8">
                <h1 className="text-primary text-7xl">
                  {restaurants.toLocaleString()}+
                </h1>
                <p className="text-gray-400 text-lg mt-5">
                  Restaurant Onboarded
                </p>
              </div>
              <hr className="w-full h-px border-0 bg-[linear-gradient(98deg,_#6DDCFF_0%,_#7F60F9_100%)]" />
              <div className="px-8">
                <h1 className="text-primary text-7xl">
                  {orders.toLocaleString()}+
                </h1>
                <p className="text-gray-400 text-lg mt-5">
                  Order Processed Monthly
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
