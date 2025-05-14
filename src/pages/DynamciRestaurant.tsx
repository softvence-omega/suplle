import { useParams } from "react-router-dom";

const DynamicRestaurant = () => {
  const { id } = useParams();
  console.log(id);
  return <div>DynamicRestaurant</div>;
};

export default DynamicRestaurant;
