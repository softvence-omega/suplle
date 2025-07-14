import RecentyActivityItem, {
  type RecentItem,
} from "@/components/admin-panel/dashboard/RecentActivitiyItem";
import PeopleGroupIcon from "@/components/icons/PeopleGroupIcon";
import QRIcon from "@/components/icons/QRIcon";
import SectionHeader from "@/components/ui/sectionHeader";
import { generateRandomId } from "@/utils/utils";

const mockOrders: RecentItem[] = [
  { id: "1023", vendor: "Pizza Place", status: "Pending", time: "2 min ago" },
  {
    id: "1024",
    vendor: "Pizza Place",
    status: "Processing",
    time: "5 min ago",
  },
  {
    id: "1025",
    vendor: "Pizza Place",
    status: "Completed",
    time: "10 min ago",
  },
  {
    id: "1026",
    vendor: "Pizza Place",
    status: "Cancelled",
    time: "30 min ago",
  },
  {
    id: "1027",
    vendor: "Pizza Place",
    status: "Completed",
    time: "10 min ago",
  },
  { id: "1028", vendor: "Pizza Place", status: "Pending", time: "2 min ago" },
  {
    id: "1029",
    vendor: "Pizza Place",
    status: "Cancelled",
    time: "30 min ago",
  },
  {
    id: "1030",
    vendor: "Pizza Place",
    status: "Completed",
    time: "10 min ago",
  },
  {
    id: "1031",
    vendor: "Pizza Place",
    status: "Processing",
    time: "5 min ago",
  },
  {
    id: "1032",
    vendor: "Pizza Place",
    status: "Cancelled",
    time: "30 min ago",
  },
  {
    id: "1033",
    vendor: "Pizza Place",
    status: "Processing",
    time: "5 min ago",
  },
  {
    id: "1034",
    vendor: "Pizza Place",
    status: "Cancelled",
    time: "30 min ago",
  },
];

const cardList = [
  {
    id: generateRandomId(),
    label: "Total Users",
    value: 2340,
    icon: PeopleGroupIcon,
    orderBy: "QR",
  },
  {
    id: generateRandomId(),
    label: "QR Oders",
    value: 4512,
    icon: QRIcon,
    orderBy: "QR",
  },

  {
    id: generateRandomId(),
    label: "Total Restaurant",
    value: 4512,
    icon: QRIcon,
    orderBy: "Outlets",
  },
];

const AdminDashboardHome = () => {
  return (
    <div className="space-y-5">
      <div>
        <SectionHeader
          title="Overview"
          className="bg-transparent border-none px-0 dark:bg-transparent"
          titleClassName="!text-2xl"
        />
        <div className="flex flex-wrap gap-6">
          {cardList.map((card) => {
            const Icon = card.icon;
            return (
              <div className="flex-1 sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 shadow-lg p-6 bg-white dark:bg-[#161616] dark:text-white rounded-lg text-center space-y-3">
                <div className="flex justify-center">
                  <div className="bg-[#D1FADF] p-4 rounded-full">
                    <div className="bg-[#b8f4cc] p-[14px] rounded-full">
                      <Icon color="#0F9996" size={30} />
                    </div>
                  </div>
                </div>
                <p className="text-[#565656] dark:text-white text-xl">
                  {card.label}
                </p>
                <p className="text-black dark:text-white text-3xl">
                  {card.value.toLocaleString()}
                </p>
                <p className="text-sm text-[#667085] dark:text-white">
                  Order via {card.orderBy}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <SectionHeader
          title="Recent Activity"
          className="bg-transparent border-none px-0 dark:bg-transparent"
          titleClassName="text-2xl font-light"
        />
        <div className="divide-y divide-gray-200">
          {mockOrders.length > 0 ? (
            mockOrders.map((item) => (
              <RecentyActivityItem
                key={item.id}
                item={item}
                onClick={() => {}}
              />
            ))
          ) : (
            <div className="p-6 text-center text-gray-500">
              No orders found in this category.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardHome;
