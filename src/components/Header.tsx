import * as React from "react";

import Link from "next/link";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Header = () => {
  return (
    <header>
      <Link href="/" className="logo">
        Oran Agri Chain
      </Link>

      <div className="menu-icon">
        <MenuOutlinedIcon />
      </div>

      <ul className="navbar">
        <li>
          <Link href="#slider">Home</Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#services">Services</Link>
        </li>
        <li>
          <Link href="#">Contact</Link>
        </li>
        <li>
          <Link href="#">Gallery</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
