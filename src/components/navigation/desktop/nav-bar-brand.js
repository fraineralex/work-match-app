import React from "react";
import { NavLink } from "react-router-dom";

export const NavBarBrand = () => {
  return (
    <div className="nav-bar__brand">
      <NavLink to="/">
        <img
          className=""
          src="https://i.postimg.cc/zGb3LB3y/logo.png"
          alt="company logo"
          width="230"
          height="129"
        />
        {/* <strong className="title"> Work Match</strong> */}
      </NavLink>
    </div>
  );
};
