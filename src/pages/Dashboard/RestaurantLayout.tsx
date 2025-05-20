import { useState } from "react";
import qrCode from "../../assets/demoQR.png";
import SectionHeader from "@/components/ui/sectionHeader";
import { IoMenu, IoClose } from "react-icons/io5";
import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
import CreateLayoutModal from "@/components/dashboard/UserViewForOwner/CreateLayoutModal";

interface TableProps {
  id: number;
  qrCode: string;
}

const RestaurantLayout = () => {
  const [selectedFloor, setSelectedFloor] = useState("Ground Floor");
  const [numTables, setNumTables] = useState("12");
  const [capacity, setCapacity] = useState("6");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [tables, _setTables] = useState<TableProps[]>(
    Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      qrCode: qrCode,
    }))
  );

  // Function to handle QR code download
  const handleDownloadQR = (tableId: number) => {
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = qrCode;
    link.download = `table_${tableId}_qr_code.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className=" min-h-screen">
      <div className="flex gap-4 items-center justify-between">
        <SectionHeader className="flex-1" title="Restaurant Layout" />

        <button
          className="md:hidden p-2 rounded-lg bg-teal-500 text-white"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
        </button>
      </div>
      <div className="flex justify-end py-5">
        {/* <Button>Create Layout</Button> */}
        <CreateLayoutModal ButtonText="Create Layout" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-6 relative">
        {/* Left Sidebar */}
        <div
          className={cn(
            "space-y-6 col-span-3 md:col-span-1",
            "fixed md:relative top-0 right-0 h-full w-3/4 md:w-auto",
            " p-4 md:p-0 z-50 transform transition-transform duration-300 ease-in-out",
            "shadow-lg md:shadow-none",
            isSidebarOpen
              ? "translate-x-0"
              : "translate-x-full md:translate-x-0"
          )}
        >
          {/* Mobile Close Button */}
          <button
            className="md:hidden absolute top-4 left-4 p-2 rounded-lg bg-teal-500 text-white dark:bg-primary-dark dark:text-white"
            onClick={toggleSidebar}
          >
            <IoClose size={24} />
          </button>

          {/* Floor Management */}
          <div className="bg-white p-4 rounded-lg shadow mt-12 md:mt-0 dark:bg-primary-dark">
            <h2 className="font-medium mb-4 dark:text-white">Floors</h2>
            <button className="w-full bg-teal-500 text-white py-2 px-4 rounded-full hover:bg-teal-600 mb-4">
              Add New Floor
            </button>
            {["Ground Floor", "First Floor"].map((floor) => (
              <button
                key={floor}
                className={cn(
                  "w-full py-2 px-4 rounded-md mb-2",
                  selectedFloor === floor
                    ? "bg-teal-500 text-white"
                    : "bg-gray-400 hover:bg-gray-200"
                )}
                onClick={() => setSelectedFloor(floor)}
              >
                {floor}
              </button>
            ))}
          </div>

          {/* Table Properties */}
          <div className="bg-white p-4 rounded-lg shadow dark:bg-primary-dark">
            <h2 className="font-medium mb-4 dark:text-white">Table Properties</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1 dark:text-white">
                  Number of Tables
                </label>
                <input
                  type="number"
                  value={numTables}
                  onChange={(e) => setNumTables(e.target.value)}
                  className="w-full border rounded-md p-2 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1 dark:text-white">
                  Capacity
                </label>
                <input
                  type="number"
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                  className="w-full border rounded-md p-2"
                />
              </div>
              <button className="w-full bg-teal-500 text-white py-2 px-4 rounded-full hover:bg-teal-600">
                Generate QR Code
              </button>
            </div>
          </div>
        </div>

        {/* Overlay for mobile when sidebar is open */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            onClick={toggleSidebar}
          />
        )}

        {/* Table Grid */}
        <div className="col-span-3 ">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
            {tables.map((table) => (
              <div
                key={table.id}
                className="bg-white dark:bg-gray-400 p-4 rounded-lg shadow text-center"
              >
                <h3 className="font-medium mb-2">Table {table.id}</h3>
                <img
                  src={table.qrCode}
                  alt={`QR Code for Table ${table.id}`}
                  className="w-28 h-28 rounded mx-auto mb-2"
                />
                <button
                  onClick={() => handleDownloadQR(table.id)}
                  className="w-full bg-teal-500 text-white p-1 md:py-2 md:px-3 rounded-full hover:bg-teal-600"
                >
                  Download QR
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantLayout;
