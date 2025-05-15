import { Navbar } from "@/components/dynamicResturants/Navbar";
import { useParams } from "react-router-dom";
import RestaurantBanner from "@/components/dynamicResturants/RestaurantBanner";
import { Search } from "lucide-react";

const DynamicRestaurant = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <Navbar />
      <RestaurantBanner />
      <div className="p-5 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white w-full">
        <p className="text-2xl md:text-3xl font-bold">
          All Offers from McDonald’s East London
        </p>

        <div className="relative w-full md:w-[300px]">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search from menu"
          className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2"
        />
        </div>
      </div>
    </div>
  );
};

export default DynamicRestaurant;
