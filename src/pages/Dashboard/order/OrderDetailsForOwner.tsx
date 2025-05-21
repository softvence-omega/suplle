// interface OrderItem {
//   name: string;
//   quantity: number;
//   priceEach: number;
//   note?: string;
// }

const itemData = [
  {
    orderId: "ORD-2024-001",
    table: "B1",
    type: "Dine in",
    date: "2024-02-10",
    time: "14:30",
    status: "Delivered",
    items: [
      {
        name: "Margherita Pizza",
        quantity: 2,
        priceEach: 14.99,
        note: "Extra Cheese",
      },
      {
        name: "Caesar salad",
        quantity: 2,
        priceEach: 14.99,
        note: "Dressing on side",
      },
      {
        name: "Chicken Alfredo",
        quantity: 2,
        priceEach: 14.99,
        note: "Dressing on side",
      },
    ],
    subtotal: 45.97,
    discountPercent: 10,
    paymentStatus: "Paid",
    paymentMethod: "Card",
  },
];

const OrderDetailsForOwner = () => {
  const {
    orderId,
    table,
    type,
    date,
    time,
    status,
    items,
    subtotal,
    discountPercent,
    paymentStatus,
    paymentMethod,
  } = itemData[0];

  const discount = subtotal * (discountPercent / 100);
  const total = subtotal - discount;

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow rounded-xl space-y-6 dark:bg-primary-dark">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium text-black dark:text-white">
          Order #{orderId}
        </h2>
        <p className="text-sm text-black font-semibold dark:text-white">
          Delivery Status : <span className="text-green-400">{status}</span>
        </p>
      </div>
      <div className="text-sm text-[#7D7D7D] flex items-center gap-4 dark:text-white">
        <span>🍴 {type}</span>
        <span>📍 Table {table}</span>
        <span>📅 {date}</span>
        <span>🕒 {time}</span>
      </div>

      <div>
        <h3 className="font-normal text-black border-b pb-1 mb-3 dark:text-white">
          Order Items
        </h3>
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-start border-b"
            >
              <div>
                <p className="font-normal text-black text-lg dark:text-white">
                  {item.name} x {item.quantity}
                </p>
                {item.note && (
                  <p className="text-sm text-[#7D7D7D] font-normal dark:text-white">
                    Note : {item.note}
                  </p>
                )}
              </div>
              <div className="text-right">
                <p className="font-normal text-black text-lg dark:text-white">
                  ${(item.quantity * item.priceEach).toFixed(2)}
                </p>
                <p className="text-sm text-[#7D7D7D] font-normal dark:text-white">
                  ${item.priceEach.toFixed(2)} each
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-lg p-4">
        <h3 className="font-normal text-lg text-black mb-2 dark:text-white">
          Bill Details
        </h3>
        <div className="text-sm space-y-1">
          <div className="flex justify-between">
            <span className="text-sm font-normal text-[#7D7D7D] dark:text-white">
              Subtotal
            </span>
            <span className="text-sm font-normal text-[#7D7D7D] dark:text-white">
              ${subtotal.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm font-normal text-[#7D7D7D] dark:text-white">
              Discount
            </span>
            <span className="text-sm font-normal text-[#7D7D7D] dark:text-white">
              {discountPercent}%
            </span>
          </div>
        </div>
        <div className="mt-3 border-t pt-3 flex justify-between font-semibold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="mt-2 text-sm">
          <div className="flex justify-between dark:text-white">
            <span>Payment Status</span>
            <span className="text-[#7AC29C] font-normal text-sm">
              {paymentStatus}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm font-normal text-[#7D7D7D] dark:text-white">
              Payment Method
            </span>
            <span className="text-sm font-semibold text-black dark:text-white">
              {paymentMethod}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsForOwner;
