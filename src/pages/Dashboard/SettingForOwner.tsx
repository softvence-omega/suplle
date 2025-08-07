import RestaurantProfileForm from "@/components/dashboard/ownerSetting/RestaurantProfileForm";
import { useAppSelector } from "@/hooks/useRedux";

const SettingForOwner = () => {
  const selectedRestaurant = useAppSelector(
    (state) => state.switchAccount.selectedRestaurant
  );

  console.log(
    "selectedRestaurant in RestaurantProfileForm:",
    selectedRestaurant
  );
  return (
    <div>
      <RestaurantProfileForm />
    </div>
  );
};

export default SettingForOwner;
