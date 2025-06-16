import { Button } from "@/components/ui/button";

const SignInBox = () => {
  return (
    <div className="w-full max-w-screen-xl min-h-[250px] bg-[#F5FFFF] mx-auto px-4 sm:px-6 py-16 rounded-3xl mt-24 dark:bg-black dark:border dark:border-amber-100 ">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-center">
        Already have an <span className="text-primary">account?</span>
      </h1>
      <Button className="bg-transparent border border-primary hover:bg-primary hover:text-white px-10 sm:px-20 py-4 sm:py-6 rounded-3xl text-primary text-base sm:text-lg flex mx-auto mt-10">
        Sign In
      </Button>
    </div>
  );
};

export default SignInBox;

