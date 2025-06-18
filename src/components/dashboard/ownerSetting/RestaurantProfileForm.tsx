import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import SuppleForm from "@/components/Forms/SuplleForm";
import SuppleInput from "@/components/Forms/SuppleInput";
import SuppleFileUpload from "@/components/Forms/SuppleFileUpload";
import SuppleTextarea from "@/components/Forms/SuppleTextarea";
import { FileUp } from "lucide-react";
import owner1 from "../../../assets/ownerset1.jpg"
import owner2 from "../../../assets/ownerset2.jpg"
import owner3 from "../../../assets/ownerset3.jpg"
import PasswordInput from "./PasswordInput";
import Cookies from "js-cookie";
import { fetchRestaurantById } from "@/store/features/restaurant/fetchrestaurantSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";


const coverImages = [
  owner1,
  owner2,
  owner3,
];

const defaultValues = {
  restaurantName: "",
  logo: "",
  tagline: "",
  coverUpload: "",
  description: "",
  businessName: "",
  businessEmail: "",
  businessPhone: "",
  address: "",
  gstRate: "",
  cgstRate: "",
  sgstRate: "",
  currentPassword: "",
  newPassword: "",
};

const RestaurantProfileForm: React.FC = () => {
  const dispatch = useAppDispatch()
  const restaurantState = useAppSelector((state) => state.fetchRestaurant);
  console.log(restaurantState.data, "restaurantState in restaurant profile form");
  const { description, restaurantName, tagline,logo,coverPhoto } = restaurantState.data ?? {};
  // const data = restaurantState.restaurants;
  // const loading = restaurantState.loading;
  // const error = restaurantState.error;

  //  console.log(data, "data in restaurant profile form")

  const userString = Cookies.get("user");
  const user = userString ? JSON.parse(userString) : null;
  const restaurantId = user?.restuarant;
  console.log(restaurantId, "restaurantId in restaurant profile form");


  useEffect(() => {
    if (restaurantId) {
      dispatch(fetchRestaurantById(restaurantId));
    }
  }, [dispatch, restaurantId])

 
  const handleSubmit = async (data: typeof defaultValues) => {
  await handleRestaurantInfo(data);
  await handleBussinessInfo(data);
};

  const handleError = (error: unknown) => {
    console.error("Form Error:", error);
  };
 const handleRestaurantInfo = async (data: typeof defaultValues) => {
  try {
    const token = Cookies.get("accessToken");
    if (!token) throw new Error("No token found");

    // const userString = Cookies.get("user");
    // const user = userString ? JSON.parse(userString) : null;
    // const restaurantId = user?.restuarant;

    // if (!restaurantId) throw new Error("No restaurant ID found");

    const payload = {
      restaurantName: data.restaurantName,
      tagline: data.tagline,
      description: data.description,
      logo: data.logo,
      coverUpload: data.coverUpload,
    }

    const formData = new FormData();
    formData.append("data", JSON.stringify(payload));
    if (data.logo) formData.append("logo", data.logo);
    if (data.coverUpload) formData.append("coverPhoto", data.coverUpload);

    const res = await fetch(
      `https://suplle-server-v2-2.onrender.com/api/v1/restaurant/update-restaurant`,
      {
        method: "PUT",
        headers: {
          Authorization: ` ${token}`,
        },
        body: formData,
      }
    );

    const result = await res.json();
    if (!res.ok) throw new Error(result.message || "Failed to update restaurant");

    console.log("Update Success:", result);
    console.log("Restaurant Info Updated Successfully",1);
  } catch (error) {
    console.error("Update Failed:", error);
  }
};

const handleBussinessInfo = async (data: typeof defaultValues) => {
  try {
    const token1 = Cookies.get("accessToken");
    if (!token1) throw new Error("No token found");

    const requestData = {
      businessName: data.businessName,
      businessEmail: data.businessEmail,
      restaurantAddress: data.address,
      // referralCode: data.referralCode,
      gstRate: data.gstRate,
      cgstRate: data.cgstRate,
      sgstRate: data.sgstRate,
    };

    const res = await fetch(
      `https://suplle-server-v2-2.onrender.com/api/v1/owner/update-owner`,
      {
        method: "PUT",
        headers: {
          Authorization: `${token1}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      }
    );

    const result = await res.json();
    console.log("Response:", result);

    if (!res.ok) throw new Error(result.message || "Failed to update business info");

    console.log("Business Info Updated Successfully");
  } catch (error) {
    console.error("Update Failed:", error);
  }
};


  return (
    <SuppleForm
      onSubmit={handleSubmit}
      onError={handleError}
      defaultValues={defaultValues}
      className="mx-auto space-y-10"
    >
      {/* Restaurant Info */}
      <div className=" shadow-[0px_0px_1px_2px_rgba(0,0,0,.04)] rounded-md">
        <div className="space-y-6 p-6 bg-white rounded-md dark:bg-[#161616]">
          <h2 className="text-lg font-normal text-[#333333] dark:text-white">Restaurant Information</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <SuppleInput
              name="restaurantName"
              label="Restaurant Name"
              placeholder={restaurantName}
              className="h-[45px]" />

            <SuppleFileUpload
              name="logo"
              label="Logo"
              accept="image/*"
              helperText="Upload Image"
              InputClassName="px-4 py-3 dark:bg-[#161616]"
              icon={<FileUp className="w-4 h-4 text-gray-400" />}

            />

            <SuppleInput
              name="tagline"
              label="Tagline"
              placeholder={tagline}
              className="h-[45px]" />

            <SuppleFileUpload
              name="coverUpload"
              label="Upload Your Own Cover Image"
              accept="image/*"
              helperText="Upload Cover Image"
              InputClassName="px-4 py-3 dark:bg-[#161616]"
              icon={<FileUp className="w-4 h-4 text-gray-400" />}
            />
          </div>

          <div>
            <label className="text-sm font-medium block mb-2">Select Your Cover Image</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {coverImages.map((img, idx) => (
                <div key={idx} className="h-[300px] rounded overflow-hidden border border-gray-300">
                  <img src={img} alt={`cover-${idx}`} className=" h-full w-full" />
                </div>
              ))}
            </div>
          </div>

          <SuppleTextarea
            name="description"
            label="Description"
            placeholder={description}
            rows={5} />

          <Button type="submit" className="bg-[#E7F6F6]  text-[#11A8A5] hover:text-white">Save Changes</Button>
          
        </div>
      </div>

      {/* Business Info */}
      <div className="shadow-[0px_0px_1px_2px_rgba(0,0,0,.04)] rounded-md">
        <div className="space-y-4 p-6 bg-white dark:bg-[#161616]">
          <h2 className="text-lg font-normal text-[#333333] dark:text-white">Business Information</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <SuppleInput
              name="businessName"
              label="Business Name"
              placeholder="Business Name"
              className="h-[45px]" />
            <SuppleInput
              name="businessEmail"
              label="Business Email"
              placeholder="Business Email"
              type="email"
              className="h-[45px]" />
            <SuppleInput
              name="businessPhone"
              label="Business Phone Number"
              placeholder="Business Phone Number"
              className="h-[45px]" />
            <SuppleInput
              name="address"
              label="Address"
              placeholder="Address"
              className="h-[45px]" />
          </div>
          <div className="space-y-4">
            <h2 className="text-base font-normal text-[#203849] dark:text-white">Tax Information</h2>

            <div className="grid md:grid-cols-3 gap-4">
              <SuppleInput
                name="gstRate"
                placeholder="GST Rate (%)"
                type="number"
                className="h-[45px]" />
              <SuppleInput
                name="cgstRate"
                placeholder="CGST Rate (%)"
                type="number"
                className="h-[45px]" />
              <SuppleInput
                name="sgstRate"
                placeholder="SGST Rate (%)"
                type="number"
                className="h-[45px]" />
            </div>
            <Button type="submit" className="bg-[#E7F6F6]  text-[#11A8A5] hover:text-white">Save Changes</Button>
          </div>
        </div>
      </div>

      {/* Account Settings */}
      <div className="shadow-[0px_0px_1px_2px_rgba(0,0,0,.04)] rounded-md">
        <div className="space-y-4 p-6 bg-white dark:bg-[#161616]">
          <h2 className="text-lg font-normal text-[#333333] dark:text-white">Account Settings</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <PasswordInput name="currentPassword" label="Current Password" />
            <PasswordInput name="newPassword" label="New Password" />
          </div>
          <Button type="submit" className="bg-[#E7F6F6] text-[#11A8A5] hover:text-white">
            Save Changes
          </Button>
        </div>
      </div>

    </SuppleForm>
  );
};

export default RestaurantProfileForm;
