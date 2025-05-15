import SuppleForm from "@/components/Forms/SuplleForm";
import SuppleInput from "@/components/Forms/SuppleInput";
import SuppleSelect from "@/components/Forms/SuppleDropdown";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/ui/sectionHeader";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SelectItem } from "@/components/ui/select";

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
        }}
        resolver={zodResolver(menuItemSchema)}
        className="space-y-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
            {categories.map((category) => (
              <SelectItem key={category.id} value={category.id}>
                {category.name}
              </SelectItem>
            ))}
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
            {sizes.map((size) => (
              <SelectItem key={size} value={size.toLowerCase()}>
                {size}
              </SelectItem>
            ))}
          </SuppleSelect>
          <SuppleSelect
            name="availability"
            label="Availability"
            placeholder="Availability"
            required
          >
            {availabilityOptions.map((option) => (
              <SelectItem key={option} value={option.toLowerCase()}>
                {option}
              </SelectItem>
            ))}
          </SuppleSelect>
            <div className="text-center">
              <SuppleInput
              name="image"
              label="Upload Item Image*"
                type="file"
                accept="image/*"
                className="w-full"
              />
            </div>
         
        </div>
          <div className="md:col-span-2">
            <SuppleInput
              name="description"
              label="Description"
              placeholder="Description"
              required
            />
          </div>

        {/* File Upload Section */}
        <div className="space-y-4">
          <div className="border-2 border-dashed border-gray-200 p-4 rounded-md">
            <div className="text-center">
              <p className="text-sm text-gray-500">Upload Menu File* (.XLSX or .CSV)</p>
              <input
                type="file"
                accept=".xlsx,.csv"
                className="w-full mt-2"
              />
            </div>
          </div>


        </div>

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
