import img1 from "../../../assets/HowSuplleHelps/1.jpg";

const howSuplleHelpsData = [
  {
    id: 1,
    title: "🔗 Automated Vendor Coordination",
    description:
      "Connect directly with suppliers. No more back-and-forth calls.",
  },
  {
    id: 2,
    title: "📦 Real-time Inventory Monitoring",
    description: "See what’s low, get alerts before you run out.",
  },
  {
    id: 3,
    title: "📊 Smart Forecasting",
    description: "AI-driven suggestions for ordering based on trends.",
  },
  {
    id: 4,
    title: "⚙️ Seamless Order Management",
    description: "Track, modify, and confirm orders in one unified dashboard.",
  },
  {
    id: 5,
    title: "📈 Insightful Reporting & Analytics",
    description:
      "View performance metrics and supply trends to make better decisions.",
  },
];

const HowSuplleHelps = () => {
  return (
    <div className="mt-44 mb-12">
      <h1 className="text-6xl text-center mb-24">
        How Suplle <span className="text-primary">Helps</span>
      </h1>
      <div className="flex justify-center items-center gap-16">
        <div>
          <img
            src={img1}
            alt=""
            className="lg:w-[661px] lg:h-[564px] rounded-3xl"
          />
        </div>
        <div className="flex flex-col gap-2">
          {howSuplleHelpsData.map((data) => (
            <div key={data.id} className="border-b-1 border-black py-3">
              <h1 className="text-3xl mb-2">{data.title}</h1>
              <p className="text-xl">{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowSuplleHelps;
