import React from "react";
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
  const handleSubmit = async (data: typeof defaultValues) => {
    console.log("Submitted Data:", data);
    // Perform actual API call here
  };

  const handleError = (error: unknown) => {
    console.error("Form Error:", error);
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
              placeholder="Restaurant Name"
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
              placeholder="Tagline"
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
            placeholder="Description"
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
