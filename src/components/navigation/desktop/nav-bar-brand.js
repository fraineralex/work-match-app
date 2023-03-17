import React from "react";
import { NavLink } from "react-router-dom";

export const NavBarBrand = () => {
  return (
    <div className="nav-bar__brand">
      <NavLink to="/">
        <img
          className=""
          src="https://cdn-icons-png.flaticon.com/64/187/187879.png"
          alt="company logo"
          width="25"
          height="25"
        />
        <h1 className="home-barner"> Work Match</h1>
      </NavLink>
    </div>
  );
};
