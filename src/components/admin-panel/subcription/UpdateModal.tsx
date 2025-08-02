import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
// import SuppleInput from "./SuppleInput";
import { IoMdCloseCircle } from "react-icons/io";
import { FiPlus, FiMinus } from "react-icons/fi";
import type { SubscriptionPlanData } from "@/components/dashboard/dashboardItem/data/Type";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
// import SuppleInput from "@/components/Forms/SuppleInput";

interface UpdateModalProps {
  showUpdateModal: boolean;
  setShowUpdateModal: (show: boolean) => void;
  planData: SubscriptionPlanData;
  onSubmit: (data: Partial<SubscriptionPlanData>) => void;
}

const UpdateModal = ({
  showUpdateModal,
  setShowUpdateModal,
  planData,
  onSubmit,
}: UpdateModalProps) => {
  const { control, handleSubmit, setValue } = useForm<
    Partial<SubscriptionPlanData>
  >({
    defaultValues: {
      name: planData.name,
      price: planData.price,
      maxRestaurants: planData.maxRestaurants,
      maxFloor: planData.maxFloor,
      maxTables: planData.maxTables,
      maxMenu: planData.maxMenu,
      features: [...planData.features],
      maxUsers: planData.maxUsers,
      maxQRCodes: planData.maxQRCodes,
    },
  });

  const [newFeature, setNewFeature] = useState("");

  const handleAddFeature = () => {
    if (newFeature.trim()) {
      setValue("features", [
        ...(control._formValues.features || []),
        newFeature,
      ]);
      setNewFeature("");
    }
  };

  const handleRemoveFeature = (index: number) => {
    const updatedFeatures = [...(control._formValues.features || [])];
    updatedFeatures.splice(index, 1);
    setValue("features", updatedFeatures);
  };

  const onFormSubmit = (data: Partial<SubscriptionPlanData>) => {
    onSubmit(data);
    setShowUpdateModal(false);
  };

  if (!showUpdateModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white dark:bg-primary-dark p-5 rounded-lg shadow-lg w-full max-w-lg max-h-[90vh] overflow-y-auto relative">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold">Update Plan</h1>
          <button onClick={() => setShowUpdateModal(false)}>
            <IoMdCloseCircle className="text-red-500 w-7 h-7 hover:text-red-700" />
          </button>
        </div>

        <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">
          {/* Name */}
          <Controller
            name="name"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input {...field} placeholder="Plan Name" required />
            )}
          />

          {/* Price */}
          <Controller
            name="price"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input {...field} placeholder="Price" type="number" required />
            )}
          />

          <div className="grid grid-cols-2 gap-4">
            {/* Max Restaurants */}
            <Controller
              name="maxRestaurants"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Max Restaurants"
                  type="number"
                  required
                />
              )}
            />
            {/* Max Floors */}
            <Controller
              name="maxFloor"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Max Floors"
                  type="number"
                  required
                />
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Max Tables */}
            <Controller
              name="maxTables"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Max Tables"
                  type="number"
                  required
                />
              )}
            />
            {/* Max Menu Items */}
            <Controller
              name="maxMenu"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Max Menu Items"
                  type="number"
                  required
                />
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Max Users */}
            <Controller
              name="maxUsers"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Max Users"
                  type="number"
                  required
                />
              )}
            />
            {/* Max QR Codes */}
            <Controller
              name="maxQRCodes"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Max QR Codes"
                  type="number"
                  required
                />
              )}
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium">Features</Label>
            <div className="space-y-2">
              {control._formValues.features?.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Input
                    value={feature}
                    onChange={(e) => {
                      const updatedFeatures = [...control._formValues.features];
                      updatedFeatures[index] = e.target.value;
                      setValue("features", updatedFeatures);
                    }}
                    className="flex-1"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveFeature(index)}
                    className="text-red-500 hover:text-red-700 p-2"
                  >
                    <FiMinus />
                  </button>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <Input
                value={newFeature}
                onChange={(e) => setNewFeature(e.target.value)}
                placeholder="Add new feature"
                className="flex-1"
              />
              <button
                type="button"
                onClick={handleAddFeature}
                className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
              >
                <FiPlus />
              </button>
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <button
              type="button"
              onClick={() => setShowUpdateModal(false)}
              className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Update Plan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateModal;
