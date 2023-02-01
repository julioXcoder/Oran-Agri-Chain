import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// import Link from "next/link";
import Image from "next/image";

import SkipNextOutlinedIcon from "@mui/icons-material/SkipNextOutlined";
import SkipPreviousOutlinedIcon from "@mui/icons-material/SkipPreviousOutlined";

interface SliderProps {
  items: {
    title: string;
    color: string;
    subTitle: string;
    text: string;
    src: string;
    alt: string;
  }[];

  seconds: number;
}

const Slider = ({ items, seconds }: SliderProps) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [currentItem, setCurrentItem] = React.useState(0);
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentItem((currentItem) => (currentItem + 1) % items.length);
    }, seconds * 1000);
    return () => clearInterval(intervalId);
  });

  const handlePrev = () => {
    if (currentItem === 0) {
      setCurrentItem(items.length - 1);
    } else {
      setCurrentItem(currentItem - 1);
    }
  };

  const handleNext = () => {
    setCurrentItem((currentItem + 1) % items.length);
  };

  return (
    <section key={currentItem} className="container" id="slider">
      <div className="slider-text">
        <h1 className="title" style={{ color: items[currentItem].color }}>
          {items[currentItem].title}
        </h1>
        <p className="sub-title">
          <br /> {items[currentItem].subTitle}
        </p>
        <Button
          className="btn"
          onClick={() => {
            setIndex(currentItem);
            handleOpen();
          }}
        >
          Read More...
        </Button>
      </div>
      <div className="slider-img">
        <Image
          width={600}
          height={400}
          src={items[currentItem].src}
          alt={items[currentItem].alt}
        ></Image>
      </div>
      <div className="nav-buttons">
        <button
          style={{
            background: "transparent",
            outline: "none",
            border: "none",
            cursor: "pointer",
            color: items[currentItem].color,
          }}
          onClick={handlePrev}
        >
          <SkipPreviousOutlinedIcon />
        </button>
        <button
          style={{
            background: "transparent",
            outline: "none",
            border: "none",
            cursor: "pointer",
            color: items[currentItem].color,
          }}
          onClick={handleNext}
        >
          <SkipNextOutlinedIcon />
        </button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, background: items[index].color }}>
          <Typography
            sx={{ color: "#252c32" }}
            id="modal-modal-title"
            variant="h6"
            component="h1"
          >
            Oran Agri Chain
          </Typography>
          <Typography
            sx={{ color: "white" }}
            id="modal-modal-title"
            variant="h5"
            component="h1"
          >
            {items[index].title} {items[index].subTitle}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, color: "black" }}
          >
            {items[index].text}
          </Typography>
        </Box>
      </Modal>
    </section>
  );
};

export default Slider;

// import React, { useState, useEffect } from "react";

// import Link from "next/link";
// import Image from "next/image";

// interface SliderProps {
//   items: {
//     title: string;
//     color: string;
//     subTitle: string;
//     src: string;
//     alt: string;
//   }[];

//   seconds: number;
// }

// const Slider = ({ items, seconds }: SliderProps) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentItem, setCurrentItem] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentItem((currentItem) => (currentItem + 1) % items.length);
//     }, seconds * 1000);
//     return () => clearInterval(intervalId);
//   });
//   return (
//     <section key={currentItem} className="container" id="slider">
//       <div className="slider-text">
//         <h1 className="title" style={{ color: items[currentItem].color }}>
//           {items[currentItem].title}
//         </h1>
//         <p className="sub-title">
//           <br /> {items[currentItem].subTitle}
//         </p>
//         <button className="btn" onClick={() => setIsModalOpen(true)}>
//           read more...
//         </button>
//       </div>
//       <div className="slider-img">
//         <Image
//           width={600}
//           height={400}
//           src={items[currentItem].src}
//           alt={items[currentItem].alt}
//         ></Image>
//       </div>
//     </section>
//   );
// };

// export default Slider;
