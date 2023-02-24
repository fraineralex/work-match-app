import React from "react";
import { NavLink } from "react-router-dom";

export const NavBarBrand = () => {
  return (
    <div className="nav-bar__brand">
      <NavLink to="/">
        <img
          className="nav-bar__logo"
          src="https://cdn-icons-png.flaticon.com/128/3800/3800024.png"
          alt="company logo"
          width="128"
          height="128"
        />
      </NavLink>
    </div>
  );
};
