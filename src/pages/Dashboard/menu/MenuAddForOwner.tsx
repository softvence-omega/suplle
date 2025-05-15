import SuppleForm from "@/components/Forms/SuplleForm";
import SuppleInput from "@/components/Forms/SuppleInput";
import SuppleSelect from "@/components/Forms/SuppleDropdown";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/ui/sectionHeader";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SelectItem } from "@/components/ui/select";
import SuppleFileUpload from "@/components/Forms/SuppleFileUpload";
import SuppleTextarea from "@/components/Forms/SuppleTextarea";

// Category Form Schema
const categorySchema = z.object({
  category: z.string().min(1, "Category name is required")
});

type CategoryFormData = z.infer<typeof categorySchema>;

// Menu Item Form Schema
const menuItemSchema = z.object({
  itemName: z.string().min(1, "Item name is required"),
  category: z.string().min(1, "Category is required"),
  price: z.string().min(1, "Price is required"),
  size: z.string().min(1, "Size is required"),
  availability: z.string().min(1, "Availability is required"),
  description: z.string().min(1, "Description is required"),
  image: z.string().min(1, "Item image is required"),
  menuFile: z.string().optional(),
});

type MenuItemFormData = z.infer<typeof menuItemSchema>;

const MenuAddForOwner = () => {
  // Example categories - replace with your actual data
  const categories = [
    { id: "1", name: "Starters", items: 2 },
    { id: "2", name: "Main Course", items: 2 },
    { id: "3", name: "Desserts", items: 2 },
    { id: "4", name: "Drinks", items: 2 }
  ];

  const sizes = ["Small", "Medium", "Large"];
  const availabilityOptions = ["In Stock", "Out of Stock"];

  const onSubmitCategory = async (data: CategoryFormData) => {
    console.log("Category data:", data);
    // Add your API call here
  };

  const onSubmitMenuItem = async (data: MenuItemFormData) => {
    console.log("Menu item data:", data);
    // Add your API call here
  };

  const handleDeleteCategory = (categoryId: string) => {
    console.log("Delete category:", categoryId);
    // Add your delete logic here
  };

  return <>
    <SectionHeader title="Categories" showBackButton={true} />

    {/* Categories Section */}
    <div className="mt-4">
      <SuppleForm<CategoryFormData>
        onSubmit={onSubmitCategory}
        defaultValues={{ category: "" }}
        resolver={zodResolver(categorySchema)}
        className="flex gap-2.5"
      >
        <SuppleInput
          name="category"
          placeholder="Enter Category Name"
          fullWidth
        />
        <Button variant="ghost" type="submit" className="text-[#11A8A5]">
          Add Category
        </Button>
      </SuppleForm>
    </div>

    {/* Categories List */}
    <div className="mt-4 flex flex-wrap gap-4">
      {categories.map((category) => (
        <div key={category.id} className="flex flex-col gap-2 bg-[#E7F6F6] border border-[#E8E8E8] p-3 rounded-md">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">{category.name}</span>
            <Button
              variant="ghost"
              size="sm"
              className="text-red-500 hover:text-red-700"
              onClick={() => handleDeleteCategory(category.id)}
            >
              Delete
            </Button>
          </div>
          <span className="text-sm text-gray-500">{category.items} items</span>
        </div>
      ))}
    </div>

    {/* Create Menu Section */}
    <div className="mt-8">
      <h2 className="text-lg font-semibold mb-4">Create Menu</h2>
      <SuppleForm<MenuItemFormData>
        onSubmit={onSubmitMenuItem}
        defaultValues={{
          itemName: "",
          category: "",
          price: "",
          size: "",
          availability: "",
          description: "",
          image: "",
          menuFile: "",
        }}
        resolver={zodResolver(menuItemSchema)}
        className="space-y-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SuppleInput
            name="itemName"
            label="Item Name"
            placeholder="Item"
            required
          />
          <SuppleSelect
            name="category"
            label="Category"
            placeholder="Category"
            required
          >
            <SelectItem value="starters">Starters</SelectItem>
            <SelectItem value="main">Main Course</SelectItem>
            <SelectItem value="desserts">Desserts</SelectItem>
            <SelectItem value="drinks">Drinks</SelectItem>
          </SuppleSelect>
          <SuppleInput
            name="price"
            label="Price"
            placeholder="$0"
            type="number"
            required
          />
          <SuppleSelect
            name="size"
            label="Size"
            placeholder="Size"
            required
          >
            <SelectItem value="small">Small</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="large">Large</SelectItem>
          </SuppleSelect>
          <SuppleSelect
            name="availability"
            label="Availability"
            placeholder="Availability"
            required
          >
            <SelectItem value="available">Available</SelectItem>
            <SelectItem value="not_available">Not Available</SelectItem>
          </SuppleSelect>
          <SuppleFileUpload
            name="image"
            label="Upload Item Image*"
            accept="image/*"
            required
          />
        </div>

        <div className="md:col-span-2">
          <SuppleTextarea
            name="description"
            label="Description"
            className="w-full"
            placeholder="Description"
            required
          />
        </div>

        <SuppleFileUpload
          name="menuFile"
          label="Upload Menu File (.XLSX or .CSV)"
          accept=".xlsx,.csv"
          helperText="Upload Menu File ( .XLSX or .CSV )"
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 12V17M11 12V17M7 7V18.4C7 18.9601 7 19.2399 7.10899 19.4538C7.20487 19.6427 7.35785 19.7957 7.54686 19.8915C7.76074 20 8.03995 20 8.59835 20H15.4017C15.9601 20 16.2393 20 16.4532 19.8915C16.6422 19.7957 16.7951 19.6427 16.891 19.4538C17 19.2399 17 18.9601 17 18.4V7M7 7H9M7 7H5M9 7H15M9 7C9 6.06812 9 5.60216 9.15224 5.23462C9.35523 4.74457 9.74457 4.35523 10.2346 4.15224C10.6022 4 11.0681 4 12 4C12.9319 4 13.3978 4 13.7654 4.15224C14.2554 4.35523 14.6448 4.74457 14.8478 5.23462C15 5.60216 15 6.06812 15 7M15 7H17M17 7H19" stroke="#11A8A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
        />

        <div className="flex justify-end">
          <Button type="submit" className="bg-[#11A8A5] text-white hover:bg-[#0D8C89]">
            Create Menu Item
          </Button>
        </div>
      </SuppleForm>
    </div>
  </>;
};

export default MenuAddForOwner;
