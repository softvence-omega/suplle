import PeopleGroupIcon from "@/components/icons/PeopleGroupIcon";
import QRIcon from "@/components/icons/QRIcon";
import SectionHeader from "@/components/ui/sectionHeader";
import { generateRandomId } from "@/utils/utils";

const cardList = [
  {
    id: generateRandomId(),
    label: "Total Users",
    value: 2340,
    icon: PeopleGroupIcon,
  },
  {
    id: generateRandomId(),
    label: "QR Oders",
    value: 4512,
    icon: QRIcon,
  },
  {
    id: generateRandomId(),
    label: "Total Restaurant",
    value: 4512,
    icon: QRIcon,
  },
];

const AdminDashboardHome = () => {
  return (
    <div>
      <SectionHeader
        title="Overview"
        className="bg-transparent border-none px-0"
        titleClassName="!text-2xl"
      />
      <div className="flex gap-3">
        {cardList.map((card) => {
          const Icon = card.icon;
          return (
            <div className="flex-1 shadow-lg p-6 bg-white rounded-lg text-center space-y-3">
              <div className="flex justify-center">
                <div className="bg-[#D1FADF] p-4 rounded-full">
                  <div className="bg-[#b8f4cc] p-[14px] rounded-full">
                    <Icon color="#0F9996" size={30} />
                  </div>
                </div>
              </div>
              <p className="text-[#565656] text-xl">{card.label}</p>
              <p className="text-black text-3xl">
                {card.value.toLocaleString()}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminDashboardHome;
