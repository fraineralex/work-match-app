import React from "react";
import { NavLink } from "react-router-dom";

export const NavBarBrand = () => {
  return (
    <div className="nav-bar__brand">
      <NavLink to="/">
        <img
          className=""
          src="https://i.postimg.cc/xTZ2h35Z/logo-wm.png"
          alt="company logo"
          width="60"
          height="60"
        />
        <strong className="title">Work Match</strong>
      </NavLink>
    </div>
  );
};
