import MenuCard from "@/components/shared/MenuCard";
import OrderCard from "@/components/shared/OrderCard";
import PopularMenuItems from "@/components/shared/PopularMenuItems";
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
    <div className="p-5">
      <PopularMenuItems
        imageUrl="https://i.imgur.com/xZQZfNJ.jpg"
        title="Biriyani polau"
        rating={5}
        reviewCount={150}
        likes="12k"
      />
    </div>
    <div className="p-5">	
      <OrderCard
        orderId="#001"
        table="Table 45"
        type="Dine-in"
        people={6}
        status="Pending"
        time="2:56 AM"
        total="133.50"
        items={[
          { name: "Margherita Pizza", quantity: 1 },
          { name: "Caesar Salad", quantity: 2 },
          { name: "BBQ Chicken", quantity: 3 },
        ]}
      />
    </div>
  </div>;
};

export default DashboardHome;
