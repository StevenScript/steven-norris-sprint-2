import FooterButton from "./FooterButton";
import React from "react";

const Footer = () => {
  const buttons = [
    {
      to: "/chicken-menu",
      text: "FRIED<br>CHICKEN",
      backgroundImage: "url('/img/menu8-1.png')",
    },
    {
      to: "/ch-finger-menu",
      text: "CHICKEN<br>FINGERS",
      backgroundImage: "url('/img/menu5-1.png')",
    },
    {
      to: "/ch-burger-menu",
      text: "CHICKEN<br>BURGERS",
      backgroundImage: "url('/img/menu6-1.png')",
    },
    {
      to: "/nuggets-menu",
      text: "CHICKEN<br>NUGGETS",
      backgroundImage: "url('/img/menu4-1-1.png')",
    },
    {
      to: "/sides-menu",
      text: "<br>SIDES",
      backgroundImage: "url('/img/menu2-1.png')",
    },
    {
      to: "/gary-deals",
      text: "<br>GARY<br>DEALS",
      backgroundImage: "url('/img/menu3-1.png')",
    },
  ];

  return (
    <footer>
      <nav className="footerbar">
        <div className="footerbuttons">
          {buttons.map((button, index) => (
            <FooterButton
              key={index}
              to={button.to}
              text={button.text}
              backgroundImage={button.backgroundImage}
            />
          ))}
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
