import Banner from "@/components/home/Banner/Banner";
import FAQ from "@/components/home/FAQ/FAQ";
import HowSuplleHelps from "@/components/home/HowSuplleHelps/HowSuplleHelps";
import Story from "@/components/home/Story/Story";
import WhatIsSuplle from "@/components/home/WhatIsSuplle/WhatIsSuplle";
import WhyChooseSuplle from "@/components/home/WhyChooseSuplle/WhyChooseSuplle";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <WhatIsSuplle />
      <Story />
      <WhyChooseSuplle />
      <HowSuplleHelps />
      <FAQ />
    </div>
  );
};

export default Home;
