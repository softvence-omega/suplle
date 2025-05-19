import logo from "@/assets/logo.png";
import computerImage from "@/assets/Auth/computer.png";
import PrimaryButton from "@/components/shared/PrimaryButton";
import { useForm } from "react-hook-form";

const OTP = () => {
  const { register, handleSubmit } = useForm();

  // Handle form submission
  const onSubmit = (data: unknown) => {
    console.log("Form Data:", data);
    // Here, you can send the data to an API or perform other actions
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-[#0F9996] to-[#56DAAB] dark:bg-gradient-to-r dark:from-[#030303] dark:to-[#030303]">
      <div className="flex justify-center md:justify-start md:px-[100px] pt-3 md:pt-6">
        <img src={logo} width={150} height={60} alt="Logo" />
      </div>
      <div className="flex h-full flex-col md:flex-row md:items-center gap-5 md:gap-10 py-[50px]">
        <div className="w-full md:w-1/2 flex flex-col gap-10">
          <div className="flex justify-center">
            <div className="max-w-[500px] w-full text-white flex flex-col gap-3">
              <h2 className="text-center text-5xl font-semibold">
                Verify Your Account
              </h2>
              <p className="text-[40px] font-light text-center">
                Please enter the code below to verify your account
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <img src={computerImage} alt="Computer Desk" />
          </div>
        </div>
        <div className="w-full h-full md:w-1/2 p-4 bg-white dark:bg-primary-dark md:rounded-l-[50px] flex justify-center items-center">
          <div className="max-w-[445px] w-full">
            <div className="space-y-10">
              <div className="flex flex-col items-center gap-3">
                <p className="text-[#333] dark:text-white text-2xl font-medium">
                  Enter the confirmation code
                </p>
              </div>
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-center text-[#9B9FA8] space-x-3">
                  {Array(6)
                    .fill(null)
                    .map((_, index) => {
                      return (
                        <input
                          {...register(`${index + 1}`)}
                          className="border p-3 border-[#EDF1F3] rounded-lg h-[40px] w-[40px] pr-4 focus:outline-none"
                          required
                        />
                      );
                    })}
                </div>
                <p className="text-[#333] text-base px-4 text-center">
                  Verification code has been sent to the phone number Your
                  <span className="text-primary pl-2">0724****</span>
                </p>
                <div className="flex justify-center">
                  <button
                    type="button"
                    className="text-sm text-[#333] text-center cursor-pointer"
                  >
                    Resend Code
                  </button>
                </div>
                <PrimaryButton
                  className="w-full text-base font-medium cursor-pointer"
                  type="submit"
                >
                  Continue
                </PrimaryButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTP;
