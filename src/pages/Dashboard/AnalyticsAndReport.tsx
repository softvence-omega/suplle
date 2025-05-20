import SectionHeader from "@/components/ui/sectionHeader";
import { generateRandomId } from "@/utils/utils";
import DollarIcon from "@/components/icons/DollerIcon";
import RestaurantIcon from "@/components/icons/RestaurantIcon";
import MountainSvg from "@/components/icons/MountainSvg";
import OwnerAnalyticsChart from "@/components/dashboard/analytics/OwnerAnalyticsChart";
import { Star } from "lucide-react";

const cardList = [
  {
    id: generateRandomId(),
    label: "Total Revenue",
    value: 35428.09,
    icon: DollarIcon,
    isSvg: true,
    chart: MountainSvg,
  },
  {
    id: generateRandomId(),
    label: "Avg Order Value",
    value: 415,
    icon: RestaurantIcon,
    isSvg: true,
    chart: MountainSvg,
  },
  {
    id: generateRandomId(),
    label: "Customer Rating",
    value: 415,
    icon: RestaurantIcon,
    isSvg: true,
    chart: MountainSvg,
  },
];

const staffPerformanceList = [
  {
    id: generateRandomId(),
    name: "John Smith",
    order: 145,
    rating: 4.9,
  },
  {
    id: generateRandomId(),
    name: "Sarah Johnson",
    order: 132,
    rating: 4.9,
  },
  {
    id: generateRandomId(),
    name: "Mike Wilson",
    order: 128,
    rating: 4.9,
  },
  {
    id: generateRandomId(),
    name: "Emily Brown",
    order: 120,
    rating: 4.9,
  },
];

const AnalyticsAndReport = () => {
  return (
    <div className="space-y-3">
      <SectionHeader title="Analytics & Reports" className="px-3" />
      <div className="flex flex-wrap gap-6">
        {cardList.map((item) => {
          const Icon = item.icon;
          const Chart = item.chart;
          return (
            <div
              key={item.id}
              className="flex-1 sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 shadow-lg p-6 bg-white dark:bg-[#161616] dark:text-white rounded-lg space-y-5"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[#425166] dark:text-white text-xl font-medium">
                    {item.label}
                  </p>
                  <p className="text-[#203849] dark:text-white text-2xl font-medium">
                    {item.value}
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="bg-[#0F9996] p-4 rounded-full">
                    <Icon color="white" />
                  </div>
                </div>
              </div>
              <div>{item.isSvg && <Chart />}</div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-[70%] shadow-lg p-6 bg-white dark:bg-[#161616] dark:text-white rounded-lg space-y-5">
          <p className="text-[18px] text-[#131313]">Sales Trends</p>
          <OwnerAnalyticsChart />
        </div>
        <div className="w-full lg:w-[30%] shadow-lg p-6 bg-white dark:bg-[#161616] dark:text-white rounded-lg space-y-5">
          <p className="text-[18px] text-[#131313]">Staff Performance</p>
          <div className="space-y-3">
            {staffPerformanceList.map((item) => {
              return (
                <div className="bg-[#F5F6F6] dark:bg-[#030303] dark:text-white rounded-sm flex justify-between p-3">
                  <p>{item.name}</p>
                  <div className="flex items-center gap-4">
                    <p>{item.order} orders</p>
                    <p className="flex items-center gap-1 text-[#DFB300]">
                      <Star fill="#DFB300" size={18} /> {item.rating}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsAndReport;
