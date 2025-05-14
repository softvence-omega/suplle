import Navbar from "./Navbar";

const Banner = () => {
  return (
    <div className="relative h-screen lg:h-[1080px] bg-[url(/banner/banner-image.jpg)] bg-cover bg-center flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      <div className="absolute top-8 w-[90%] justify-center">
        <Navbar />
      </div>
      <div className="lg:w-[1262px] lg:h-[500px] w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-white lg:text-8xl z-10 relative font-rubik">
          Welcome to <span className="text-primary">Suplle</span>
        </h1>
        <p className="lg:w-[1060px] text-white z-10 relative font-rubik text-center mt-5 text-2xl">
          Simplify operations. Delight customers. Empower your staff. We help
          Restaurants, Pubs, Cafes, and Bars seamlessly manage their in-house
          operations with QR-based menus, staff management, and real-time order
          tracking.
        </p>
      </div>
    </div>
  );
};

export default Banner;
