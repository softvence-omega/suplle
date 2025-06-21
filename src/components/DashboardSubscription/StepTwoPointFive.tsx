import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const StepTwoPointFive = ({
  planId,
  month,
  setMonth,
  setClientSecret,
}: {
  planId: string | null;
  month: string;
  setMonth: (m: string) => void;
  setClientSecret: (secret: string) => void;
}) => {
  const [, setSelectMonth] = useState("1");

  console.log(planId);

  const handleChange = (month: string) => {
    setSelectMonth(month);
    setMonth(month);
  };

  const token = Cookies.get("accessToken");

  useEffect(() => {
    if (planId && month) {
      // Example API call
      fetch(
        "https://suplle-server-v2-2.onrender.com/api/v1/subscription/create-subscription-intent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token ?? "",
          },
          body: JSON.stringify({
            planId,
            months: Number(month),
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log("API response in mmmmmmmmmm:", data);
          setClientSecret(data.clientSecret);
        });
    }
  }, [planId, month, setClientSecret, token]);

  //   console.log(selectMonth, "monthhhhhhhhhh");

  return (
    <div>
      <select
        name="month"
        className="border rounded px-2 py-1 w-full mt-6"
        required
        value={month}
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="">Select Month</option>
        {[...Array(12)].map((_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StepTwoPointFive;
