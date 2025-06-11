import logo from "@/assets/logo.png";
import computerImage from "@/assets/Auth/computer.png";
import GoogleIcon from "@/components/icons/GoogleIcon";
import FacebookIcon from "@/components/icons/FacebookIcon";
import { Link } from "react-router-dom";
import PrimaryButton from "@/components/shared/PrimaryButton";
import MessageSquareIcon from "@/components/icons/MessageSquareIcon";
import LockIcon from "@/components/icons/LockIcon";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { loginUser } from "@/store/features/auth/authSlice";

const Login = () => {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create a new FormData object from the form
    const formData = new FormData(e.target as HTMLFormElement);
    // Get the email and password values
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // Log the values
    console.log("Email:", email);
    console.log("Password:", password);
    // Here, you can send the values to an API or perform other actions

    dispatch(loginUser({ email, password }));
  };
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-[#0F9996] to-[#56DAAB] dark:bg-gradient-to-r dark:from-[#030303] dark:to-[#030303]">
      <div className="flex justify-center md:justify-start md:px-[100px] pt-3 md:pt-6">
        <img src={logo} width={150} height={60} alt="Logo" />
      </div>
      <div className="flex flex-col md:flex-row gap-5 md:gap-10 py-[50px]">
        <div className="w-full md:w-1/2 flex flex-col gap-10">
          <div className="flex justify-center">
            <div className="max-w-[390px] w-full text-white flex flex-col gap-3">
              <h2 className="text-center text-5xl font-semibold">Hello !</h2>
              <p className="text-[40px] font-light text-center">
                Please log in to your account.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <img src={computerImage} alt="Computer Desk" />
          </div>
        </div>
        <div className="py-10 w-full md:w-1/2 bg-white dark:bg-primary-dark md:rounded-l-[50px] flex justify-center items-center">
          <div className="max-w-[445px] w-full">
            <div className="space-y-10">
              <div className="flex flex-col items-center gap-3">
                <p className="text-[#333] dark:text-white text-2xl font-medium">
                  Sign In
                </p>
              </div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="text-[#9B9FA8] space-y-3">
                  <div>
                    <label
                      className="text-[#484B52] dark:text-white text-sm"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <div className="relative w-full">
                      <MessageSquareIcon
                        className="absolute left-3 top-1/2 transform -translate-y-1/2"
                        size={18}
                      />
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter Email Address"
                        className="border border-[#EDF1F3] rounded-lg py-[13px] pl-10 pr-4 w-full focus:outline-none"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className="text-[#484B52] dark:text-white text-sm"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <div className="relative w-full">
                      <LockIcon
                        className="absolute left-3 top-1/2 transform -translate-y-1/2"
                        size={18}
                        color="#CDCDCD"
                      />
                      <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        className="border border-[#EDF1F3] rounded-lg py-[13px] pl-10 pr-4 w-full focus:outline-none"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Link
                      to={"/forgot-password"}
                      type="button"
                      className="text-green-800 dark:text-white text-sm"
                    >
                      Forgot Password ?
                    </Link>
                  </div>
                  <PrimaryButton
                    className="w-full text-base font-medium cursor-pointer"
                    type="submit"
                  >
                    {loading ? "Loggin in..." : "Log In"}
                  </PrimaryButton>
                  {error && <p style={{ color: "red" }}>{error}</p>}
                </div>
              </form>

              <div className="w-full space-y-3">
                <div className="flex justify-center border-[1px] border-[#F4F5F7] rounded-[10px] w-full py-[13px] text-[#050505] dark:text-white">
                  <Link className="flex gap-4" to={"/login"}>
                    <GoogleIcon />
                    <p className="text-sm">Continue with Google</p>
                  </Link>
                </div>
                <div className="flex justify-center border-[1px] border-[#F4F5F7] rounded-[10px] w-full py-[13px]">
                  <Link className="flex gap-4" to={"/login"}>
                    <FacebookIcon />
                    <p className="text-sm">Continue with Facebook</p>
                  </Link>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-center text-[#59606E] text-sm">
                  Don’t have an account?{" "}
                  <span className="text-primary">
                    <Link to={"/signup"}>Sign Up</Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
