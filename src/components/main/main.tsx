import React from "react";

import Slider from "./components/slider";
import About from "./components/about";
import Services from "./components/services";

import { slider_items } from "@/utils/slider_items";
import { services } from "@/utils/services";

const Main = () => {
  return (
    <>
      <Slider items={slider_items} seconds={10} />
      <About />
      <Services items={services} />
    </>
  );
};

export default Main;
