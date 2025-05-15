import SuppleForm from "@/components/Forms/SuplleForm";
import SuppleInput from "@/components/Forms/SuppleInput";
import SuppleSelect from "@/components/Forms/SuppleDropdown";
import SuppleFileUpload from "@/components/Forms/SuppleFileUpload";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/ui/sectionHeader";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SelectItem } from "@/components/ui/select";

const menuItemSchema = z.object({
  itemName: z.string().min(1, "Item name is required"),
  category: z.string().min(1, "Category is required"),
  price: z.string().min(1, "Price is required"),
  size: z.string().min(1, "Size is required"),
  availability: z.string().min(1, "Availability is required"),
  description: z.string().min(1, "Description is required"),
});

type MenuItemFormData = z.infer<typeof menuItemSchema>;

const FileIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 12V17M11 12V17M7 7V18.4C7 18.9601 7 19.2399 7.10899 19.4538C7.20487 19.6427 7.35785 19.7957 7.54686 19.8915C7.76074 20 8.03995 20 8.59835 20H15.4017C15.9601 20 16.2393 20 16.4532 19.8915C16.6422 19.7957 16.7951 19.6427 16.891 19.4538C17 19.2399 17 18.9601 17 18.4V7M7 7H9M7 7H5M9 7H15M9 7C9 6.06812 9 5.60216 9.15224 5.23462C9.35523 4.74457 9.74457 4.35523 10.2346 4.15224C10.6022 4 11.0681 4 12 4C12.9319 4 13.3978 4 13.7654 4.15224C14.2554 4.35523 14.6448 4.74457 14.8478 5.23462C15 5.60216 15 6.06812 15 7M15 7H17M17 7H19" stroke="#11A8A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MenuEditForOwner = () => {
  const availabilityOptions = ["Available", "Not Available"];

  const onSubmitMenuItem = async (data: MenuItemFormData) => {
    console.log("Menu item data:", data);
    // Add your API call here
  };

  const handleDeleteMenu = () => {
    // Add delete logic here
    console.log("Delete menu clicked");
  };

  return <>
    <SectionHeader title="Edit Menu" showBackButton={true} />
    
    <div className="mt-6">
      <SuppleForm<MenuItemFormData>
        onSubmit={onSubmitMenuItem}
        defaultValues={{
          itemName: "Cheeseburger",
          category: "Starters",
          price: "20",
          size: "Small",
          availability: "Available",
          description: "Satisfy your cravings with our best-selling Cheeseburger – the ultimate fast food indulgence! Made with a juicy beef patty, melted cheddar cheese, fresh lettuce, ripe tomatoes, crispy onions, and our signature burger sauce, all stacked inside a soft, toasted bun. Loved by foodies and burger lovers alike, this mouth-watering treat delivers bold flavour in every bite. Whether you're grabbing a quick lunch or treating yourself to a cheat meal, this burger never disappoints!",
        }}
        resolver={zodResolver(menuItemSchema)}
        className="space-y-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
          <div>
            <SuppleInput
              name="itemName"
              label="Item Name*"
              defaultValue="Cheeseburger"
            />
          </div>
          <div>
            <SuppleSelect
              name="category"
              label="Category*"
              defaultValue="Starters"
            >
              <SelectItem value="starters">Starters</SelectItem>
              <SelectItem value="main">Main Course</SelectItem>
              <SelectItem value="desserts">Desserts</SelectItem>
              <SelectItem value="drinks">Drinks</SelectItem>
            </SuppleSelect>
          </div>
          <div>
            <SuppleInput
              name="price"
              label="Price*"
              defaultValue="20"
              type="number"
            />
          </div>
          <div>
            <SuppleSelect
              name="size"
              label="Size*"
              defaultValue="Small"
            >
              <SelectItem value="small">Small</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="large">Large</SelectItem>
            </SuppleSelect>
          </div>
          <div>
            <SuppleSelect
              name="availability"
              label="Availability*"
              defaultValue="Available"
            >
              {availabilityOptions.map((option) => (
                <SelectItem key={option} value={option.toLowerCase()}>
                  {option}
                </SelectItem>
              ))}
            </SuppleSelect>
          </div>
          <div>
            <SuppleFileUpload
              label="Upload Item Image*"
              accept="image/*"
              defaultFileName="Burger-01.jpg"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <SuppleInput
            name="description"
            label="Description*"
            defaultValue="Satisfy your cravings with our best-selling Cheeseburger – the ultimate fast food indulgence! Made with a juicy beef patty, melted cheddar cheese, fresh lettuce, ripe tomatoes, crispy onions, and our signature burger sauce, all stacked inside a soft, toasted bun. Loved by foodies and burger lovers alike, this mouth-watering treat delivers bold flavour in every bite. Whether you're grabbing a quick lunch or treating yourself to a cheat meal, this burger never disappoints!"
          />
        </div>

        <SuppleFileUpload
          label="Upload Menu File*"
          accept=".xlsx,.csv"
          helperText="Upload Menu File ( .XLSX or .CSV )"
          icon={<FileIcon />}
          required
        />

        <div className="flex justify-end gap-4">
          <Button 
            type="button" 
            variant="ghost" 
            className="text-[#11A8A5] hover:text-[#0D8C89]"
            onClick={handleDeleteMenu}
          >
            Delete Menu
          </Button>
          <Button type="submit" className="bg-[#11A8A5] text-white hover:bg-[#0D8C89]">
            Save Menu
          </Button>
        </div>
      </SuppleForm>
    </div>
  </>;
};

export default MenuEditForOwner; 