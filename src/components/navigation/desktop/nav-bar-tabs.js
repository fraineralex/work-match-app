import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { NavBarTab } from "./nav-bar-tab";

export const NavBarTabs = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="nav-bar__tabs">
      <NavBarTab path="/profile" label="Perfil" />
      <NavBarTab path="/public" label="Público" />
      {isAuthenticated && (
        <>
          <NavBarTab path="/protected" label="Protegido" />
          <NavBarTab path="/admin" label="Administrador" />
        </>
      )}
    </div>
  );
};
