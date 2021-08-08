import React from "react";
import NavbarMenu from "./NavbarMenu";

const Menu = () => {
  return (
    <div className="menu nav-active">

      <NavbarMenu />

      <div className="site-content">
        <h1 className="site-content__headline">Another menu concept</h1>
      </div>
    </div>
  );
};

export default Menu;
