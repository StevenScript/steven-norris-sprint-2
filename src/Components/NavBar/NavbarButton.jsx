const NavbarButton = ({ href, text }) => (
  <div className="navbarbutton">
    <a href={href} className="navbarbuttontext">
      {text}
    </a>
  </div>
);

export default NavbarButton;
