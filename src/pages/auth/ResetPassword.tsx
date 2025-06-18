import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "@/components/shared/PrimaryButton";
import LockIcon from "@/components/icons/LockIcon";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { loginUser } from "@/store/features/auth/authSlice";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const ResetPassword = () => {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const resultAction = await dispatch(loginUser({ email: "", password }));
      if (loginUser.fulfilled.match(resultAction)) {
        const { role } = resultAction.payload.user;

        if (role === "admin") {
          navigate("/admin/dashboard");
        } else if (role === "owner") {
          navigate("/dashboard/menu/add");
        } else if (
          role === "staff" ||
          role === "waiter" ||
          role === "manager" ||
          role === "chef" ||
          role === "takeaway" ||
          role === "cashier"
        ) {
          navigate("/dashboard/order/dine-in");
        } else {
          navigate("/unauthorized");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center dark:from-[#030303] dark:to-[#030303]">
      <div className="w-full max-w-[600px]  p-8">
        <div className="space-y-10">
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="text-[#333] dark:text-white text-2xl font-medium">
              Enter a new password below and confirm it to reset your current password.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="text-[#9B9FA8] space-y-6">
              {/* New Password */}
              <div>
                <label className="text-[#484B52] dark:text-white text-sm" htmlFor="password">
                  New Password
                </label>
                <div className="relative w-full">
                  <LockIcon
                    className="absolute left-3 top-1/2 transform -translate-y-1/2"
                    size={18}
                    color="#CDCDCD"
                  />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter Password"
                    className="border border-[#B6B6B6] rounded-lg py-[13px] pl-10 pr-10 w-full focus:outline-none"
                    required
                  />
                  <div
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  >
                    {showPassword ? (
                      <EyeOffIcon size={18} color="#CDCDCD" />
                    ) : (
                      <EyeIcon size={18} color="#CDCDCD" />
                    )}
                  </div>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  className="text-[#484B52] dark:text-white text-sm"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <div className="relative w-full">
                  <LockIcon
                    className="absolute left-3 top-1/2 transform -translate-y-1/2"
                    size={18}
                    color="#CDCDCD"
                  />
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="border border-[#B6B6B6] rounded-lg py-[13px] pl-10 pr-10 w-full focus:outline-none"
                    required
                  />
                  <div
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  >
                    {showConfirmPassword ? (
                      <EyeOffIcon size={18} color="#CDCDCD" />
                    ) : (
                      <EyeIcon size={18} color="#CDCDCD" />
                    )}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <PrimaryButton
                className="w-full text-base font-medium cursor-pointer"
                type="submit"
              >
                {loading ? "Password Changing..." : "Change Password"}
              </PrimaryButton>

              {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
