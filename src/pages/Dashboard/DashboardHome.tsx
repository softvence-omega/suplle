import MenuCard from "@/components/shared/MenuCard";
import PrimaryButton from "@/components/shared/PrimaryButton";

const DashboardHome = () => {
  return <div>
    <div className="p-5">
      <PrimaryButton>hello</PrimaryButton>
    </div>
    <div className="p-5">
      <MenuCard
      title="Pizza"
      size="Large"
      availability="Available"
      price="$10.99"
      description="Delicious cheese pizza with fresh ingredients."
      imageUrl="https://example.com/pizza.jpg"  // Replace with your image URL
    />
    </div>
    <div className="p-5">
      <MenuCard
      title="Pizza"
      size="Large"
      availability="Available"
      price="$10.99"
      description="Delicious cheese pizza with fresh ingredients."
      imageUrl="https://example.com/pizza.jpg"  // Replace with your image URL
    />
    </div>
    <div className="p-5">
      <MenuCard
      title="Pizza"
      size="Large"
      availability="Available"
      price="$10.99"
      description="Delicious cheese pizza with fresh ingredients."
      imageUrl="https://example.com/pizza.jpg"  // Replace with your image URL
    />
    </div>
  </div>;
};

export default DashboardHome;
