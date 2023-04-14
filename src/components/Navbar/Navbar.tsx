import sidebardata from "./SidebarData";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import NavbarStyled from "./NavbarStyled";
import { useState } from "react";

const Navbar = (): JSX.Element => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <NavbarStyled>
      <div className="container-menu-bars">
        <NavLink to={"#"} className="menu-bars" aria-label="Open menu">
          <FaBars onClick={showSidebar} />
        </NavLink>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <NavLink to="#" className="menu-bars-close" aria-label="Close menu">
              <AiOutlineClose onClick={showSidebar} />
            </NavLink>
          </li>
          {sidebardata.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <NavLink to={item.path}>
                  <span className="item-name">{item.title}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </NavbarStyled>
  );
};

export default Navbar;
