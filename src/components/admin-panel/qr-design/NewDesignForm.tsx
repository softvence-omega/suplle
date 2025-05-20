import React from "react";
import { CircleDollarSign, Upload } from "lucide-react";

import type { Design } from "./data/type";
import SuppleForm from "@/components/Forms/SuplleForm";
import SuppleInput from "@/components/Forms/SuppleInput";
import SuppleTextarea from "@/components/Forms/SuppleTextarea";
import SuppleFileUpload from "@/components/Forms/SuppleFileUpload";

interface NewDesignFormProps {
  initialData?: Partial<Design>;
  onSubmit: (design: Partial<Design>) => void;
  onCancel?: () => void;
  buttonLabel?: string;
}

export const NewDesignForm: React.FC<NewDesignFormProps> = ({
  initialData = {},
  onSubmit,
  onCancel,
  buttonLabel = "Save New Design",
}) => {
  return (
    <SuppleForm<Partial<Design>>
      onSubmit={onSubmit}
      defaultValues={{
        name: "",
        description: "",
        price: undefined,
        imageUrl: "",
        category: "",
        ...initialData,
      }}
      className="space-y-4"
    >
      <SuppleInput
        name="name"
        label="Design Name"
        placeholder="Enter Design Name"
        required
        fullWidth
        className="h-[45px]"
      />

      <SuppleInput
        name="category"
        label="Category"
        placeholder="Enter QR code category"
        required
        fullWidth
        className="h-[45px]"
      />

      <SuppleTextarea
        name="description"
        label="Description"
        placeholder="Short Description..."
        rows={5}
        required
        fullWidth
        className="h-[45px]"
      />

      <SuppleInput
        name="price"
        label="Price (USD)"
        type="number"
        step="0.01"
        placeholder="USD"
        fullWidth
        endIcon={<CircleDollarSign className="w-4 h-4" />}
        className="h-[45px]"
      />
      <SuppleFileUpload
        name="imageUrl"
        label="Upload Image"
        helperText="Click to upload image (JPG, PNG)"
        accept="image/*"
        required
        icon={<Upload className="w-4 h-4 text-gray-400" />}
        onChange={(file) => {

          if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
              console.log("Image preview URL:", reader.result);

            };
            reader.readAsDataURL(file);
          }
        }}
        InputClassName="px-4 py-6 text-center dark:bg-black "
      />

      <div className="flex space-x-4 pt-2">
        <button
          type="submit"
          className="px-4 py-2 bg-primary text-white rounded-md border-transparent md:text-base text-sm"
        >
          {buttonLabel}
        </button>

        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-white border border-primary text-primary rounded-md md:text-base text-sm dark:bg-[#161616]"
          >
            Cancel
          </button>
        )}
      </div>
    </SuppleForm>
  );
};
