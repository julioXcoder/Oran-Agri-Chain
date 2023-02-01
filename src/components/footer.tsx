import React from "react";

import Link from "next/link";

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <section id="contact">
      <div className="footer">
        <div className="main">
          <div className="col">
            <h4>Explore</h4>
            <ul>
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
          </div>
          <div className="col">
            <h4>Our Services</h4>
            <ul>
              <li>
                <Link href="/#services">Bulk and graded coffee.</Link>
              </li>
              <li>
                <Link href="/#services">Maize and Rice.</Link>
              </li>
              <li>
                <Link href="/#services">Water supply.</Link>
              </li>
              <li>
                <Link href="/#services">Milk product.</Link>
              </li>
              <li>
                <Link href="/#services">Transportation.</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h4>Info</h4>
            <ul>
              <li>
                <h5>Phone:</h5>
                <p>+255 625 239 207</p>
              </li>
              <li>
                <h5>Fax:</h5>
                <p>+255 625 239 207</p>
              </li>
              <li>
                <h5>Email:</h5>
                <p>julioXcoder@gmail.com</p>
              </li>
              <li>
                <h5>Located:</h5>
                <p>
                  Tanzania Mbeya <br /> Mbalizi
                </p>
              </li>
            </ul>
          </div>
          <div className="col">
            <h4>Contact</h4>
            <div className="social">
              <Link
                target="_blank"
                href="https://facebook.com/OranAgriChainLtd"
              >
                <FacebookOutlinedIcon />
              </Link>
              <Link
                target="_blank"
                href="https://facebook.com/OranAgriChainLtd"
              >
                <InstagramIcon />
              </Link>
              <Link target="_blank" href="https://twitter.com/oranagrichain">
                <TwitterIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
