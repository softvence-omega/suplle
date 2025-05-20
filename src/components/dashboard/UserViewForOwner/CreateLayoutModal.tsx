import { Button } from "@/components/ui/button";
import SuppleInput from "@/components/Forms/SuppleInput";
import SuppleForm from "@/components/Forms/SuplleForm";
import SuppleSelect from "@/components/Forms/SuppleDropdown";
import { SelectItem } from "@/components/ui/select";
import { z } from "zod";
import type { FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "@/components/ui/modal";
import { useState } from "react";
import { zoneType } from "@/constants/zone";

const CreateLayoutModal = ({ ButtonText }: { ButtonText: string }) => {
  const [open, setOpen] = useState(false);
  const validData = z.object({
    zoneName: z.string().min(1, { message: "Zone name is required" }),
    zoneType: z.enum([
      "east",
      "west",
      "south",
      "north",
      "upper",
      "lower",
      "outside",
    ]),
    table: z.enum(["east", "west", "south", "north"]),
    tableSetting: z.enum(["upper", "lower", "outside"]),
    seatingCapability: z.coerce
      .number()
      .min(1, { message: "Seating Capability is required" }),
  });

  const onSubmit = (data: FieldValues) => {
    console.log("Form data:", data);
    setOpen(false);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onOpenChange={setOpen}
      trigger={<Button>{ButtonText}</Button>}
      title="Create A Layout"
      description="Fill in the details below to create a new sub user account"
    >
      <SuppleForm
        resolver={zodResolver(validData)}
        onSubmit={onSubmit}
        className="grid gap-2"
      >
        <div className="">
          <SuppleInput
            name="zoneName"
            label="Zone Name"
            placeholder="Zone Name"
            type="text"
          />
        </div>
        <div className="">
          <SuppleSelect name="zoneType" label="Zone Name">
            {zoneType.map((zone) => (
              <SelectItem key={zone.value} value={zone.value}>
                {zone.label}
              </SelectItem>
            ))}
          </SuppleSelect>
        </div>
        <div className="">
          <SuppleSelect name="table" label="Table">
            {zoneType.map((zone) => (
              <SelectItem key={zone.value} value={zone.value}>
                {zone.label}
              </SelectItem>
            ))}
          </SuppleSelect>
        </div>
        <div className="">
          <SuppleSelect name="tableSetting" label="Table Setting">
            {zoneType.map((zone) => (
              <SelectItem key={zone.value} value={zone.value}>
                {zone.label}
              </SelectItem>
            ))}
          </SuppleSelect>
        </div>
        <div className="">
          <SuppleSelect name="tableName" label="Table Name">
            {zoneType.map((zone) => (
              <SelectItem key={zone.value} value={zone.value}>
                {zone.label}
              </SelectItem>
            ))}
          </SuppleSelect>
        </div>

        <div className="">
          <SuppleInput
            name="seatingCapability"
            label="Seating Capability"
            placeholder="Seating Capability"
            type="number"
          />
        </div>

        <div className="flex items-center space-x-2 justify-end">
          <Button
            onClick={closeModal}
            type="button"
            variant={"outline"}
            className="mt-4"
          >
            Cancel
          </Button>
          <Button type="submit" className="mt-4">
            Create User
          </Button>
        </div>
      </SuppleForm>
    </Modal>
  );
};

export default CreateLayoutModal;
