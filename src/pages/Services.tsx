import React from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/sections/Navigation";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { Footer } from "@/components/sections/Footer";

const Services = () => {
  return (
    <div className="relative">
      <Navigation />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default Services;