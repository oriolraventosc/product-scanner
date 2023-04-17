/* eslint-disable react/style-prop-object */
import sidebardata from "./SidebarData";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import NavbarStyled from "./NavbarStyled";
import { useState } from "react";
import FlipIcon from "@mui/icons-material/Flip";
import { Typography } from "@mui/material";
import ButtonComponent from "../Button/Button";

const Navbar = (): JSX.Element => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <NavbarStyled>
      <div className="mobile-tablet">
        <article className="container-menu-bars">
          <div className="app-logo">
            <NavLink to="/" className="app-logo_icon">
              <FlipIcon sx={{ fontSize: "2rem", pt: "1.4rem" }} />
            </NavLink>
            <NavLink to="/" className="app-logo_text">
              <Typography
                variant="body2"
                sx={{
                  fontSize: {
                    xxl: "2.5rem",
                    xl: "2.5rem",
                    lg: "1.3rem",
                    md: "2.5rem",
                    sm: "1.8rem",
                    xs: "1.8rem",
                  },
                  fontWeight: "regular",
                  display: "inline",
                  pl: "0.5rem",
                }}
              >
                SCANNER
              </Typography>
            </NavLink>
          </div>
          <NavLink to={"#"} className="menu-bars" aria-label="Open menu">
            <FaBars onClick={showSidebar} />
          </NavLink>
        </article>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <NavLink
                to="#"
                className="menu-bars-close"
                aria-label="Close menu"
              >
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
            <ButtonComponent text="Log in" style={"button login-logout"} />
          </ul>
        </nav>
      </div>
      <div className="desktop">
        <article className="container-menu-bars">
          <div className="app-logo">
            <NavLink to="/" className="app-logo_icon">
              <FlipIcon sx={{ fontSize: "3rem", pt: "0.4rem" }} />
            </NavLink>
            <NavLink to="/" className="app-logo_text">
              <Typography
                variant="body2"
                sx={{
                  fontSize: {
                    xxl: "2.5rem",
                    xl: "2.5rem",
                    lg: "2rem",
                    md: "2.5rem",
                    sm: "2rem",
                    xs: "2rem",
                  },
                  fontWeight: "regular",
                  display: "inline",
                  pl: "0.5rem",
                }}
              >
                SCANNER
              </Typography>
            </NavLink>
          </div>
        </article>
        <article className="desktop-items">
          <NavLink to="/" className={"desktop-items_link"}>
            <Typography
              variant="body2"
              sx={{
                fontSize: {
                  xxl: "1.5rem",
                  xl: "1.5rem",
                  lg: "1.5rem",
                  md: "2rem",
                  sm: "2rem",
                  xs: "2rem",
                },
                fontWeight: "regular",
                display: "inline",
                pl: "0.5rem",
              }}
            >
              Scan product
            </Typography>
          </NavLink>
          <ButtonComponent text="Log in" style={"button login-logout"} />
        </article>
      </div>
    </NavbarStyled>
  );
};

export default Navbar;
