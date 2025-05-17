import { useState } from 'react';

interface TableProps {
  id: number;
  qrCode: string;
}

const RestaurantLayout = () => {
  const [selectedFloor, setSelectedFloor] = useState('Ground Floor');
  const [numTables, setNumTables] = useState('12');
  const [capacity, setCapacity] = useState('6');
  const [tables, setTables] = useState<TableProps[]>(
    Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      qrCode: 'https://via.placeholder.com/150x150.png?text=QR+Code',
    }))
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold mb-6">Restaurant Layout</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left Sidebar */}
        <div className="space-y-6">
          {/* Floor Management */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-medium mb-4">Floors</h2>
            <button className="w-full bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 mb-4">
              Add New Floor
            </button>
            <button 
              className={`w-full py-2 px-4 rounded-md mb-2 ${
                selectedFloor === 'Ground Floor' 
                ? 'bg-teal-500 text-white' 
                : 'bg-gray-100 hover:bg-gray-200'
              }`}
              onClick={() => setSelectedFloor('Ground Floor')}
            >
              Ground Floor
            </button>
            <button 
              className={`w-full py-2 px-4 rounded-md ${
                selectedFloor === 'First Floor' 
                ? 'bg-teal-500 text-white' 
                : 'bg-gray-100 hover:bg-gray-200'
              }`}
              onClick={() => setSelectedFloor('First Floor')}
            >
              First Floor
            </button>
          </div>

          {/* Table Properties */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-medium mb-4">Table Properties</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Number of Tables</label>
                <input
                  type="number"
                  value={numTables}
                  onChange={(e) => setNumTables(e.target.value)}
                  className="w-full border rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Capacity</label>
                <input
                  type="number"
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                  className="w-full border rounded-md p-2"
                />
              </div>
              <button className="w-full bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600">
                Generate QR Code
              </button>
            </div>
          </div>
        </div>

        {/* Table Grid */}
        <div className="col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tables.map((table) => (
              <div key={table.id} className="bg-white p-4 rounded-lg shadow text-center">
                <h3 className="font-medium mb-2">Table {table.id}</h3>
                <img
                  src={table.qrCode}
                  alt={`QR Code for Table ${table.id}`}
                  className="w-32 h-32 mx-auto mb-2"
                />
                <button className="w-full bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600">
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
