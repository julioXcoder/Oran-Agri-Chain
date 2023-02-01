import React from "react";

import Image from "next/image";

interface ServicesProps {
  items: {
    title: string;
    description: string;
    imagePath: string;
    alt: string;
  }[];
}

const Services = ({ items }: ServicesProps) => {
  return (
    <section id="services" className="services">
      <div className="heading">
        <span>Specialists & Services</span>
        <h2>&quot;Your One-Stop Solution for Expert Solutions&quot;</h2>
      </div>
      <div className="service-container">
        {items.map((item, i) => {
          return (
            <div className="s-box" key={i}>
              <Image
                src={item.imagePath}
                alt={item.alt}
                width={100}
                height={100}
              ></Image>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
