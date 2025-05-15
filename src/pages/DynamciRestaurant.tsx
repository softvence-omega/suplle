import { Navbar } from "@/components/dynamicResturants/Navbar";
import { useParams } from "react-router-dom";

const DynamicRestaurant = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>Hello world</h1>
      <Navbar />
    </div>
  );
};

export default DynamicRestaurant;
