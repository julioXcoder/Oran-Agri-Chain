import React, { useState } from "react";
import Image from "next/image";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="container" id="about">
      <div className="about-img">
        <Image src="/team.png" alt="coffee" width={600} height={400}></Image>
      </div>

      <div className="about-text">
        <span>ABOUT US</span>
        <h2>
          WE FEED <br />A HAPPY WORLD!
        </h2>
        <p>
          Oran Agri chain Limited is committed in contributing to sustainable
          development of rural areas, in particular through supporting the
          agricultural sector to adapt to new challenges, protecting the
          environment and the countryside. Especially in view of climate change,
          and improving the quality of life in rural areas, whilst ensuring
          growth and jobs in the countryside and produce high quality products
          that are safe for consumers.
        </p>
        <button className="btn" onClick={() => setIsModalOpen(true)}>
          read more
        </button>
      </div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="modal-title">ABOUT US</h2>
            <p className="modal-text">
              At Oran Agri Chain Limited, we are deeply committed to advancing
              sustainable development in rural areas through our support of the
              agricultural sector. We understand the importance of helping
              farmers adapt to new challenges and protecting the environment and
              countryside. Climate change is an ever-present concern, and we are
              dedicated to finding solutions that will help improve the quality
              of life in rural areas. Our commitment to sustainable practices is
              evident in all aspects of our operations. We take great care to
              ensure that our agricultural practices are not only productive,
              but also environmentally sound. Our efforts to promote growth and
              job opportunities in the countryside have a direct positive impact
              on the communities where we operate. We also place a high priority
              on producing high-quality products that are safe for consumers.
              From sourcing the best raw materials to implementing strict
              quality control measures, we go above and beyond to ensure that
              our products meet the highest standards. We believe that by
              providing safe, nutritious, and delicious products, we can make a
              positive impact on peoples lives and contribute to a happier
              world. Our vision is to be a leading provider of sustainable and
              high-quality agricultural products, contributing to the economic
              and social development of rural areas, and ensuring a better life
              for farmers and their families and our ultimate goal is to be a
              pioneer in sustainable agriculture, and to be recognized as a
              responsible company and a reliable supplier of high-quality
              products that meet consumers needs.
            </p>
            <button
              className="modal-close"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
