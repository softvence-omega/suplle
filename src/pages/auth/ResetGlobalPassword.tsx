import logo from "@/assets/logo.png";
import computerImage from "@/assets/Auth/computer.png";
import PrimaryButton from "@/components/shared/PrimaryButton";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { resetPassword } from "@/store/features/auth/authSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResetGlobalPassword = () => {
  const dispatch = useAppDispatch();
  const { error, loading } = useAppSelector((state) => state.auth);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await dispatch(resetPassword({ newPassword })).unwrap();
      alert("Password reset successful. Please login.");
      navigate("/login");
    } catch (err) {
      console.error("Reset password failed:", err);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-[#0F9996] to-[#56DAAB] dark:bg-gradient-to-r dark:from-[#030303] dark:to-[#030303]">
      <div className="flex justify-center md:justify-start md:px-[100px] pt-3 md:pt-6">
        <img src={logo} width={150} height={60} alt="Logo" />
      </div>
      <div className="flex h-full flex-col md:flex-row md:items-center gap-5 md:gap-10 py-[50px]">
        {/* Left side */}
        <div className="w-full md:w-1/2 flex flex-col gap-10">
          <div className="flex justify-center">
            <div className="max-w-[500px] w-full text-white flex flex-col gap-3">
              <h2 className="text-center text-5xl font-semibold">
                Reset Password
              </h2>
              <p className="text-[32px] font-light text-center">
                Please enter your new password
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <img src={computerImage} alt="Computer Desk" />
          </div>
        </div>

        {/* Right side */}
        <div className="w-full h-full md:w-1/2 p-4 bg-white dark:bg-primary-dark md:rounded-l-[50px] flex justify-center items-center">
          <div className="max-w-[445px] w-full">
            <div className="space-y-10">
              <div className="flex flex-col items-center gap-3">
                <p className="text-[#333] dark:text-white text-2xl font-medium">
                  Set Your New Password
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* New password */}
                <input
                  type="password"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="border p-3 border-[#EDF1F3] rounded-lg w-full text-lg focus:outline-none"
                  required
                />

                {/* Confirm password */}
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="border p-3 border-[#EDF1F3] rounded-lg w-full text-lg focus:outline-none"
                  required
                />

                {error && <p className="text-center text-red-500">{error}</p>}

                <PrimaryButton
                  className="w-full text-base font-medium cursor-pointer"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Resetting..." : "Reset Password"}
                </PrimaryButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetGlobalPassword;
