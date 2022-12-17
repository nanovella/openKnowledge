import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/about" activestyle>
            About
          </NavLink>
          <NavLink to="/projects" activestyle>
            Project Library
          </NavLink>
          <NavLink to="/editor" activestyle>
            Editor
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;