import styled from "styled-components";
import colors from "../../styles/colors";

const NavbarStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: right;
  z-index: 8;
  padding-top: 1.75rem;
  padding-bottom: 2rem;
  background-color: ${colors.dark};
  width: 100vw;
  left: -1rem;
  position: relative;
  .desktop {
    display: none;
  }
  .mobile-tablet {
    position: fixed;
    background-color: ${colors.dark};
    height: 93px;
    display: flex;
  }
  .app-logo {
    padding-left: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .app-logo_icon {
    color: ${colors.main};
  }
  .app-logo_icon:hover {
    color: #fff;
    transition: 0.2s;
  }
  .app-logo_text {
    margin-left: 1rem;
    font-size: 2rem;
    color: #fff;
    font-weight: bold;
    margin-left: 0;
    padding-top: 1.4rem;
  }
  .app-logo_text:hover {
    color: ${colors.main};
    transition: 0.2s;
  }
  .navbar {
    background-color: #060b26;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
  }

  .container-menu-bars {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
  }

  .menu-bars {
    margin-left: 2rem;
    font-size: 2rem;
    background: none;
    margin-top: 1.7rem;
    color: ${colors.main};
    padding-right: 1rem;
  }

  .menu-bars-close {
    margin-left: 0rem;
    font-size: 2rem;
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
  @media (min-width: 814px) {
    height: 50px;
    left: -1rem;
    .app-logo_text {
      padding-top: 0.4rem;
    }
    .mobile-tablet {
      display: none;
    }
    .desktop {
      display: flex;
      position: fixed;
      background-color: ${colors.dark};
      height: 120px;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
    .container-menu-bars {
      width: 0;
    }
    .desktop-items {
      position: relative;
      padding-right: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      &_link {
        color: #fff;
      }
      &_link:hover {
        color: ${colors.main};
        transition: 0.2s;
      }
    }
  }
`;

export default NavbarStyled;
