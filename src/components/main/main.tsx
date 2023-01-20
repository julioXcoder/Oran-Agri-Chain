import React from "react";

import Slider from "./components/slider";
import About from "./components/about";

import { slider_items } from "@/utils/slider_items";

const Main = () => {
  return (
    <>
      <Slider items={slider_items} seconds={10} />
      <About />
    </>
  );
};

export default Main;
