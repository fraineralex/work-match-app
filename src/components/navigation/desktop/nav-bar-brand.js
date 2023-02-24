import React from "react";
import { NavLink } from "react-router-dom";

export const NavBarBrand = () => {
  return (
    <div className="nav-bar__brand">
      <NavLink to="/">
        <img
          className=""
          src="https://cdn-icons-png.flaticon.com/64/3800/3800024.png"
          alt="company logo"
          width="50"
          height="50"
        />
      </NavLink>
    </div>
  );
};
