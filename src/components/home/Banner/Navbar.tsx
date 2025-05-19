import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-black/15 w-full flex justify-between items-center px-12 py-7 rounded-[50px]">
      <div className="text-primary-gradient text-4xl font-bold">Suplle</div>
      <div className="flex gap-4 justify-center items-center">
        <Button
          className="bg-transparent border-1 border-primary rounded-3xl text-lg text-primary hover:text-white px-6 py-5"
          onClick={() => {
            navigate("/login");
          }}
        >
          Log In
        </Button>
        <Button
          className="rounded-3xl text-lg  px-6 py-5"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
