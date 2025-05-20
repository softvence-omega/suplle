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
    title: "24//7 Customer Support",
    description:
      "Round-the-clock assistance to keep your business running smoothly.",
  },
];

const WhyChooseSuplle = () => {
  return (
    <div className="lg:h-[679px] bg-[#FFFFFF] lg:mt-[485px]">
      <h1 className="text-6xl text-center">
        Why Choose <span className="text-primary">Suplle</span>
      </h1>
      <div className="mt-44 flex gap-24 items-center justify-center mx-auto w-[80%]">
        {whyChooseSuplleData.map((data, index) => (
          <div
            key={data.id}
            className={`flex flex-col gap-5 py-8 ${
              index !== whyChooseSuplleData.length - 1
                ? "border-r border-gray-300 pr-24"
                : ""
            }`}
          >
            <img
              src={data.icon}
              alt={data.title}
              className="w-10 h-11 flex mx-auto mb-8"
            />
            <h1 className="text-center text-2xl font-medium">{data.title}</h1>
            <p className="flex mx-auto w-[80%] text-lg text-center">
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseSuplle;
