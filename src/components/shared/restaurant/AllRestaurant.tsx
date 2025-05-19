import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Eye, PenLine } from "lucide-react";
const AllRestaurant = () => {
  const invoices = [
    {
      invoice: "INV001",
      name: "John Doe",
      mail: "john@example.com",
      order: "ORD001",
      status: "Active",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
      icons: ["eye", "edit"],
    },
    {
      invoice: "INV002",
      name: "Jane Smith",
      mail: "jane@example.com",
      order: "ORD002",
      status: "Pending",
      image: "https://randomuser.me/api/portraits/women/21.jpg",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
      icons: ["eye", "edit"],
    },
    {
      invoice: "INV003",
      name: "Alice Johnson",
      mail: "alice@example.com",
      order: "ORD003",
      status: "Active",
      image: "https://randomuser.me/api/portraits/women/31.jpg",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
      icons: ["eye", "edit"],
    },
    {
      invoice: "INV004",
      name: "Bob Williams",
      mail: "bob@example.com",
      order: "ORD004",
      status: "Pending",
      image: "https://randomuser.me/api/portraits/men/41.jpg",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
      icons: ["eye", "edit"],
    },
    {
      invoice: "INV005",
      name: "Emily Davis",
      mail: "emily@example.com",
      order: "ORD005",
      status: "Active",
      image: "https://randomuser.me/api/portraits/women/51.jpg",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
      icons: ["eye", "edit"],
    },
    {
      invoice: "INV006",
      name: "Chris Brown",
      mail: "chris@example.com",
      order: "ORD006",
      status: "Pending",
      image: "https://randomuser.me/api/portraits/men/61.jpg",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
      icons: ["eye", "edit"],
    },
    {
      invoice: "INV007",
      name: "Sarah Wilson",
      mail: "sarah@example.com",
      order: "ORD007",
      status: "Active",
      image: "https://randomuser.me/api/portraits/women/71.jpg",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
      icons: ["eye", "edit"],
    },
  ];
  return (
    <div className="space-y-4 mt-7">
      <h1 className="font-rubik text-sm sm:text-[18px] ">All Restaurants</h1>
      {/* MAIN TABLE */}
      <div>
        <Table>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell>
                  <div className="flex items-center gap-x-4">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={invoice.image} alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <h1 className="text-xs sm:text-sm">{invoice.name}</h1>
                  </div>
                </TableCell>
                <TableCell>{invoice.status}</TableCell>
                <TableCell>{invoice.mail}</TableCell>
                <TableCell>{invoice.order}</TableCell>
                <TableCell className="">
                  <div className="flex items-center space-x-4">
                    <Eye />
                    <div className="h-[1px] w-[1px]" />
                    <PenLine />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AllRestaurant;
