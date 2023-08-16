import React from "react";
import Home from "./Home";
import About from "./About";
import Hotels from "./Hotels";
import Flights from "./Flights";

import Holidays from "./Holidays";
import Contact from "./Contact";
import Footer from "./Footer";

const Hero = () => {
  return (
    <div>
      <Home />
      <About />
      <Hotels />
      <Flights />
      <Holidays />
      <Contact />
      <Footer />
    </div>
  );
};

export default Hero;
