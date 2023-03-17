import React from "react";
import { NavLink } from "react-router-dom";

export const NavBarBrand = () => {
  return (
    <div className="nav-bar__brand">
      <NavLink to="/">
        <img
          className=""
          src="../../../../public/images/logo.png"
          alt="company logo"
          width="25"
          height="25"
        />
        <strong className="home-barner"> Work Match</strong>
      </NavLink>
    </div>
  );
};
