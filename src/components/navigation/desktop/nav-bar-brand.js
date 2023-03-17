import React from "react";
import { NavLink } from "react-router-dom";
import logoImage from "../../../../public/images/logo.png"

export const NavBarBrand = () => {
  return (
    <div className="nav-bar__brand">
      <NavLink to="/">
        <img
          className=""
          src={logoImage}
          alt="company logo"
          width="25"
          height="25"
        />
        <h1 className="home-barner"> Work Match</h1>
      </NavLink>
    </div>
  );
};
