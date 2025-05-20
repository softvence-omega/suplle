import { Check } from "lucide-react";

const StepTwo = () => {
  return (
    <div className="mt-10  rounded-sm max-w-[50%]">
      <div className="border rounded-lg p-6 cursor-pointer hover:border-teal-500 transition-colors">
        <h3 className="font-medium text-lg"> Standard Plan ( 3 Months ) </h3>
        <p className="text-2xl font-bold mt-2">
          9.99
          <span className="text-sm font-normal text-gray-500">/month</span>
        </p>
        <ul className="mt-4 space-y-2">
          <li className="flex items-center gap-2">
            <Check className="h-4 w-4 text-teal-500" />
            <span className="text-sm font-light">Unlimited QR codes</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="h-4 w-4 text-teal-500" />
            <span className="text-sm font-light">Analytics dashboard</span>
          </li>

          <li className="flex items-center gap-2">
            <Check className="h-4 w-4 text-teal-500" />
            <span className="text-sm font-light">Priority support</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StepTwo;
