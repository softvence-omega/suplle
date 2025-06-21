import type React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface StepThreeProps {
  clientSecret: string;
}

const StepThree = ({ clientSecret }: StepThreeProps) => {
  const [showSubscription, setShowSubscription] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const cardNo = form.number.value;
    const date = form.date.value;
    const cvc = form.cvc.value;
    const cardName = form.names.value;
    const formData = {
      cardNo,
      date,
      cvc,
      cardName,
    };
    console.log(formData, "form-dataaaa");
    if (formData) {
      setShowSubscription(true);
    }
  };

  console.log(clientSecret, "oooooooooo");
  return (
    <div className="mt-10 space-y-7">
      <div
        className={cn(
          "border border-green-50 w-full space-y-5 rounded-md px-4 py-2"
        )}
      >
        <h1>Cost Summary</h1>
        <div className="flex items-center justify-between font-light ">
          <p className="text-sm sm:text-[15px]">QR Codes ( 10 x $5 )</p>
          <p className="text-sm sm:text-[15px]">$50</p>
        </div>
        <div className="flex items-center justify-between font-light">
          <p className="text-sm sm:text-[15px]">3 months Subscription</p>
          <p className="text-sm sm:text-[15px]">$50</p>
        </div>
        <div className="flex items-center justify-between font-light">
          <p className="text-sm sm:text-[15px]">Taxes</p>
          <p className="text-sm sm:text-[15px]">$20</p>
        </div>
        <div className="w-full h-[1px] bg-green-50" />
        <div className="flex items-center justify-between font-light">
          <p className="text-sm sm:text-[15px]">Total</p>
          <p className="text-sm sm:text-[15px]">$20</p>
        </div>
      </div>
      {/* PAYMENT CHECKOUT */}
      <div
        className={cn(
          "border border-green-50 w-full space-y-5 rounded-md px-4 py-2"
        )}
      >
        <h2 className="">Payment Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="font-light">
            <label className="block text-sm sm:text-[15px] font-light mb-1 ">
              Card Number
            </label>
            <input
              name="number"
              type="text"
              placeholder="1234 5465 454 45"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-100 "
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="font-light">
              <label className="block text-sm sm:text-[15px] font-light mb-1">
                Expiry Date
              </label>
              <input
                name="date"
                type="text"
                placeholder="MM/YY"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className="font-light">
              <label className="block text-sm sm:text-[15px] font-light mb-1">
                CVC
              </label>
              <input
                name="cvc"
                type="text"
                placeholder="123"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>
          <div className="font-light">
            <label className="block text-sm sm:text-[15px] font-light mb-1">
              Name on Card
            </label>
            <input
              name="names"
              type="text"
              placeholder="Kazi Mehedi Hasan"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <button className="w-full bg-green-500 text-white rounded-md py-2 px-3 cursor-pointer">
            Complete Purchase{" "}
          </button>
        </form>
      </div>

      {/* <QrDesign/>  it's a next page for user successfully subscription. when subscription buying successful, then show this page! work done, just you can add condition wise */}
      {showSubscription && (
        <div>
          {/* Add your QrDesign component here */}
          {/* <QrDesign/> */}
        </div>
      )}
    </div>
  );
};

export default StepThree;
