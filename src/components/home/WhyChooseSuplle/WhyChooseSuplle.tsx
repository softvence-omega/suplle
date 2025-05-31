import logo1 from "../../../assets/whyChooseSuplle/1.png";
import logo2 from "../../../assets/whyChooseSuplle/2.png";
import logo3 from "../../../assets/whyChooseSuplle/3.png";

const whyChooseSuplleData = [
  {
    id: 1,
    icon: logo1,
    title: "Solve Problems Real Time",
    description:
      "Manage operations instantly with live updates and smart coordination.",
  },
  {
    id: 2,
    icon: logo2,
    title: "Secured & Safe Payments",
    description: "Encrypted, safe, and hassle-free payments for every order.",
  },
  {
    id: 3,
    icon: logo3,
    title: "24/7 Customer Support",
    description:
      "Round-the-clock assistance to keep your business running smoothly.",
  },
];

const WhyChooseSuplle = () => {
  return (
    <div className="w-full bg-white py-20 px-4 sm:px-6 lg:px-12">
      <h1 className="text-3xl sm:text-4xl lg:text-6xl text-center font-bold">
        Why Choose <span className="text-primary">Suplle</span>
      </h1>

      <div className="mt-20 flex flex-col lg:flex-row gap-12 lg:gap-24 justify-center items-center max-w-7xl mx-auto">
        {whyChooseSuplleData.map((data, index) => (
          <div
            key={data.id}
            className={`flex flex-col items-center text-center gap-5 px-4 lg:px-8 max-w-sm ${
              index !== whyChooseSuplleData.length - 1
                ? "lg:border-r lg:border-gray-300"
                : ""
            }`}
          >
            <img src={data.icon} alt={data.title} className="w-12 h-12 mb-4" />
            <h2 className="text-xl sm:text-2xl font-semibold">{data.title}</h2>
            <p className="text-gray-600 text-base sm:text-lg">
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseSuplle;
