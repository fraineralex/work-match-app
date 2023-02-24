import React from "react";
import { NavLink } from "react-router-dom";

export const NavBarBrand = () => {
  return (
    <div className="nav-bar__brand">
      <NavLink to="/">
        <img
          className="nav-bar__logo"
          src="https://icons8.com/icon/baTWeZAqG8lF/old-vmware-logo"
          alt="company logo"
          width="122"
          height="36"
        />
      </NavLink>
    </div>
  );
};
