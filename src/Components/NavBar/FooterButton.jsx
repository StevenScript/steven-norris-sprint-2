import React from "react";
import { Link } from "react-router-dom";

const FooterButton = ({ to, text, backgroundImage }) => {
  const lines = text.split("<br>");

  return (
    <div className="footerbutton" style={{ backgroundImage }}>
      <div className="button-wrapper">
        <Link to={to} className="footerbuttontext">
          {lines.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < lines.length - 1 && <br />}
            </React.Fragment>
          ))}
        </Link>
      </div>
    </div>
  );
};

export default FooterButton;
