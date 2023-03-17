import React from "react";
import { NavLink } from "react-router-dom";

export const NavBarBrand = () => {
  return (
    <div className="nav-bar__brand">
      <NavLink to="/">
        <img
          className=""
          src="https://github.com/fraineralex/fraineralex/blob/main/logo.png"
          alt="company logo"
          width="50"
          height="100"
        />
        <strong className="title"> Work Match</strong>
      </NavLink>
    </div>
  );
};
