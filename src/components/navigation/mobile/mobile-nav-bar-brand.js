import React from "react";
import { NavLink } from "react-router-dom";

export const MobileNavBarBrand = ({ handleClick }) => {
  return (
    <div onClick={handleClick} className="mobile-nav-bar__brand">
      <NavLink to="/">
        <img
          className="mobile-nav-bar__logo"
          src="https://cdn-icons-png.flaticon.com/64/3800/3800024.png"
          alt="company logo"
          width="82"
          height="24"
        />
      </NavLink>
    </div>
  );
};
