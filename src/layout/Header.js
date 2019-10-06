import React from "react";
import Menu from "../components/Menu";
import { NavLink } from "react-router-dom";
import Logo from "../images/orange_leaf_img.png";

const Header = () => {
  return (
    <div className="header__wrapper">
      <img src={Logo} alt="Zarysy twarzy - rysunek" className="header__logo" />
      <NavLink to="/" exact className="header__title">
        <span className="header__title--name">Sprężyna wydarzeń</span>
        <span className="header__title--subtitle">- razem do celu</span>
      </NavLink>
      <Menu />
    </div>
  );
};

export default Header;
