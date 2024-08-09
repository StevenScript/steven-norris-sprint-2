import React from "react";
import { Link } from "react-router-dom";
import BrandLogo from "./BrandLogo";
import GaryLogo from "./GaryLogo";
import NavbarButton from "./NavbarButton";

const Header = () => {
  return (
    <header>
      <nav className="bufferbar"></nav>
      <nav className="navbar">
        <Link to="/index">
          <BrandLogo imgSrc="img/image-2.png" altText="Gary Blue Logo" />
        </Link>
        <Link to="/index">
          <GaryLogo text="GARY BLUE'S DINER" />
        </Link>
        <Link to="/index">
          <BrandLogo imgSrc="img/image-2.png" altText="Gary Blue Logo" />
        </Link>
        <div className="navbarbuttons">
          <Link to="/order">
            <NavbarButton text="ORDER" />
          </Link>
          <Link to="/chicken-menu">
            <NavbarButton text="MENU" />
          </Link>
          <Link to="/chicken-menu">
            <NavbarButton text="OFFERS" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
