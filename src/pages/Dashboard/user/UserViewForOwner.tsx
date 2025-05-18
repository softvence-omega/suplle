import SuppleForm from "@/components/Forms/SuplleForm";
import SuppleSelect from "@/components/Forms/SuppleDropdown";
import SuppleInput from "@/components/Forms/SuppleInput";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/ui/sectionHeader";
import { SelectItem } from "@/components/ui/select";
import { SearchIcon } from "lucide-react";
import type { FieldValues } from "react-hook-form";

const UserViewForOwner = () => {

  // submit function
  const onSubmit = async (data: FieldValues) => {
    console.log("User data:", data);
    // Add your API call here
  };


  return (
    <>
      <SectionHeader showBackground={false} title="Usar Management" rightContent={<Button>Create User</Button>} />
      <SuppleForm onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SuppleSelect 
          name="User Role"
          label="User Role"
          placeholder="Select Role"

        >
          <SelectItem value="manager">Manager</SelectItem>
          <SelectItem value="dine-in">dine-in</SelectItem>
          <SelectItem value="waiter">Waiter</SelectItem>
          <SelectItem value="takeaway">Takeaway</SelectItem>
          <SelectItem value="chef">Chef</SelectItem>
          <SelectItem value="cashier">Cashier</SelectItem>
          <SelectItem value="maintenance">Maintenance</SelectItem>
        </SuppleSelect>

         <SuppleSelect 
          name="Status"
          label="Status"
          placeholder="Active / Inactive"

        >
          <SelectItem value="active">Active</SelectItem>
          <SelectItem value="inactive">inactive</SelectItem>
        </SuppleSelect>

         <SuppleInput
          name="Search"
          label="Search"
          placeholder="Search by name or email"
          endIcon={<SearchIcon className="w-3/4" />}
         />

      </SuppleForm>
    </>
  );
};

export default UserViewForOwner;
