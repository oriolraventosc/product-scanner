import styled from "styled-components";
import colors from "../../styles/colors";

const NavbarStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: right;
  z-index: 8;
  position: relative;
  .navbar {
    background-color: #060b26;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
  }

  .container-menu-bars {
    display: flex;
    justify-content: right;
    align-items: center;
  }

  .menu-bars {
    margin-left: 2rem;
    font-size: 2.5rem;
    background: none;
    margin-top: 0.7rem;
    color: ${colors.main};
  }

  .menu-bars-close {
    margin-left: 0rem;
    font-size: 2.5rem;
    background: none;
    margin-top: 0.7rem;
    color: ${colors.main};
  }

  .nav-menu {
    background-color: ${colors.dark};
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: -100%;
    transition: 850ms;
  }

  .nav-menu.active {
    left: 0;
    transition: 350ms;
  }

  .nav-text {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px 0px 8px 16px;
    list-style: none;
    height: 90px;
    padding-left: 0;
    padding-top: 0;
    padding-bottom: 0;
  }

  .nav-text a {
    text-decoration: none;
    color: #f5f5f5;
    font-size: 1.5rem;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;
  }

  .item-name {
    margin-left: 0;
  }

  .nav-text a:hover {
    color: ${colors.main};
  }

  .nav-menu-items {
    width: 100%;
    padding-inline-start: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0;
    margin-bottom: 0;
  }

  .navbar-toggle {
    background-color: ${colors.dark};
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
    justify-content: center;
  }

  span {
    margin-left: 16px;
  }
`;

export default NavbarStyled;
