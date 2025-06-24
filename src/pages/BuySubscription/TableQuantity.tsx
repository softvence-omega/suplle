import SuppleForm from "@/components/Forms/SuplleForm";
import SuppleInput from "@/components/Forms/SuppleInput";
import Cookies from "js-cookie";
import axios from "axios";

const TableQuantity = ({ selectId }: { selectId: string }) => {
  const token = Cookies.get("accessToken");

  const handleSubmit = async (data: { inputTable: string }) => {
    const payload = {
      qrCodeDesign: selectId,
      tableQuantity: Number(data.inputTable),
    };
    try {
      const response = await axios.post(
        "https://suplle-server-v2-2.onrender.com/api/v1/qr-code-purchase/qr-code-purchase",
        payload,
        {
          headers: {
            Authorization: token ? token : "",
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <SuppleForm defaultValues={{ inputTable: "" }} onSubmit={handleSubmit}>
        <SuppleInput
          name="inputTable"
          className=""
          containerClassName=""
          type="number"
          required
        />
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-primary text-white rounded"
        >
          Submit
        </button>
      </SuppleForm>
    </div>
  );
};

export default TableQuantity;
