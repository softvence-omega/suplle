import { Navbar } from "@/components/dynamicResturants/Navbar";
import { useParams } from "react-router-dom";
import RestaurantBanner from "@/components/dynamicResturants/RestaurantBanner";
import { Search } from "lucide-react";
import FoodCategory from "@/components/dynamicResturants/FoodCategory";
import OfferItem from "@/components/dynamicResturants/OfferItem";
import FoodCategory1 from "@/components/dynamicResturants/FoodCategory1";
import FoodList from "@/components/dynamicResturants/FoodList";
import GoogleMap from "@/components/dynamicResturants/GoogleMap";
import Wrapper from "@/components/shared/Wrapper";
const DynamicRestaurant = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <Navbar />
      <RestaurantBanner />
      <Wrapper>
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
      </Wrapper>
      <FoodCategory />
      <OfferItem/>
      <FoodCategory1 />
      <FoodList />
      <GoogleMap/>
    </div>
  );
};

export default DynamicRestaurant;
