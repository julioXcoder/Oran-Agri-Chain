import * as React from "react";

import Link from "next/link";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Header = () => {
  const [clicked, setClicked] = React.useState(false);

  let myClass = clicked ? "navbar active" : "navbar";
  return (
    <header>
      <Link href="/" className="logo">
        Oran Agri Chain
      </Link>

      <div id="menu-icon" onClick={() => setClicked(!clicked)}>
        <MenuOutlinedIcon style={{ fontSize: "2.3rem" }} />
      </div>

      <ul className={myClass}>
        <li>
          <Link href="/#slider">Home</Link>
        </li>
        <li>
          <Link href="/#about">About</Link>
        </li>
        <li>
          <Link href="/#services">Services</Link>
        </li>
        <li>
          <Link href="/#contact">Contact</Link>
        </li>
        <li>
          <Link href="/gallery">Gallery</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
