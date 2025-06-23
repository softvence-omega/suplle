import { useEffect, useState } from "react";
import { DesignCard } from "@/components/admin-panel/qr-design/DesignCard";
import Cookies from "js-cookie";

// You may want to adjust this type based on your actual Design type
interface QrPurchase {
  _id: string;
  price: number;
  tableQuantity: number;
  status: string;
  qrCodeDesign: string;
  // Add more fields as needed
}

const QrAllDesign = () => {
  const [purchases, setPurchases] = useState<QrPurchase[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = Cookies.get("accessToken");
    fetch(
      "https://suplle-server-v2-2.onrender.com/api/v1/qr-code-purchase/get-all-qr-code-purchase",
      {
        headers: {
          Authorization: token || "",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setPurchases(data.data.result);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {purchases.map((purchase) => (
        <DesignCard
          key={purchase._id}
          design={{
            id: purchase._id,
            status: ["available", "comingSoon", "unavailable"].includes(
              purchase.status
            )
              ? (purchase.status as "available" | "comingSoon" | "unavailable")
              : "unavailable",
            imageUrl: "https://via.placeholder.com/100", // Replace with actual image if available
            name: `Design ID: ${purchase.qrCodeDesign}`,
            category: "QR Purchase",
            description: `Table Quantity: ${purchase.tableQuantity}`,
            price: purchase.price,
          }}
          onEdit={() => alert(`Edit purchase ${purchase._id}`)}
          onStatusChange={() => alert(`Change status for ${purchase._id}`)}
          statusChangeLabel={purchase.status}
        />
      ))}
    </div>
  );
};

export default QrAllDesign;
