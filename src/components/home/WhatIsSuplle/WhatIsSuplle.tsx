import { motion } from "framer-motion";
// import logo1 from "../../../assets/whatSuplleLogo/1.svg";
// import logo2 from "../../../assets/whatSuplleLogo/2.svg";
// import logo3 from "../../../assets/whatSuplleLogo/3.svg";

import SuplleCard from "./SuppleCard";
import RestaurantIcon from "@/components/icons/RestaurantIcon";
import CoffeeIcon from "@/components/icons/CoffeeIcon";
import GlassIcon from "@/components/icons/GlassIcon";

const suplleCardData = [
  {
    id: 1,
    icon: RestaurantIcon,
    category: "Restaurants",
    title: "Dine-in & Takeaway",
    description: "Manage orders, menus, and guest experiences with ease",
  },
  {
    id: 2,
    icon: CoffeeIcon,
    category: "Cafes & More",
    title: "Flexible Service",
    description: "Adapt to any in-house hospitality operation.",
  },
  {
    id: 3,
    icon: GlassIcon,
    category: "Pubs and Bars",
    title: "Live Order Flow",
    description: "Track and fulfill drink and food orders in real time.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const WhatIsSuplle = () => {
  return (
    <motion.div
      className="bg-white lg:h-[675px] w-full px-24"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        variants={itemVariants}
        className="text-primary-dark text-6xl lg:mt-64 text-center"
      >
        🚀 What is <span className="text-primary-gradient">Suplle?</span>
      </motion.div>
      <motion.p className="text-center mt-8 text-2xl" variants={itemVariants}>
        Suplle is a modern restaurant management platform built to streamline
        operations for
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        variants={containerVariants}
      >
        {suplleCardData.map((card) => {
          return (
            <motion.div key={card.id} variants={itemVariants}>
              <SuplleCard
                Icon={card.icon}
                category={card.category}
                title={card.title}
                description={card.description}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default WhatIsSuplle;
