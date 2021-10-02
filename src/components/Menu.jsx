import React from "react";
import NavbarMenu from "./NavbarMenu";
// import Projects from "../views/Projects";
import Home from "../views/Home";

const Menu = () => {
  return (
    <div className="menu nav-active">

      <NavbarMenu />

      <div className="site-content">
        {/* <h1 className="site-content__headline">Another menu concept</h1> */}
        <Home />
      </div>
    </div>
  );
};

export default Menu;
