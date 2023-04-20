import styled from "styled-components";
import colors from "../../styles/colors";

const LoaderStyled = styled.div`
  background-color: ${colors.main};
  width: 100vw;
  position: fixed;
  left: 0rem;
  z-index: 8;
  height: calc(100vh + 1.5rem);
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  .loader {
    width: 16px;
    left: -1.5rem;
    height: 16px;
    box-shadow: 0 30px, 0 -30px;
    border-radius: 4px;
    background: currentColor;
    display: block;
    margin: -50px auto 0;
    position: relative;
    color: #fff;
    transform: translateY(30px);
    box-sizing: border-box;
    animation: animloader 2s ease infinite;
  }
  .loader::after,
  .loader::before {
    content: "";
    box-sizing: border-box;
    width: 16px;
    height: 16px;
    box-shadow: 0 30px, 0 -30px;
    border-radius: 4px;
    background: currentColor;
    color: #fff;
    position: absolute;
    left: 30px;
    top: 0;
    animation: animloader 2s 0.2s ease infinite;
  }
  .loader::before {
    animation-delay: 0.4s;
    left: 60px;
  }

  @keyframes animloader {
    0% {
      top: 0;
      color: white;
    }
    50% {
      top: 30px;
      color: rgba(255, 255, 255, 0.2);
    }
    100% {
      top: 0;
      color: white;
    }
  }
`;

export default LoaderStyled;
