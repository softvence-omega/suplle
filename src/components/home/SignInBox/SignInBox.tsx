import { Button } from "@/components/ui/button";

const SignInBox = () => {
  return (
    <div className="lg:w-[1296px] lg:h-[318px] bg-[#F5FFFF] mx-auto pt-24 rounded-3xl mt-24">
      <h1 className="text-5xl font-light text-center p  t-24">
        Already have an <span className="text-primary">account?</span>
      </h1>
      <Button className="bg-transparent border-1 border-primary hover:bg-primary hover:text-white px-20 py-6 rounded-3xl text-primary text-lg flex mx-auto mt-16">
        Sign In
      </Button>
    </div>
  );
};

export default SignInBox;
