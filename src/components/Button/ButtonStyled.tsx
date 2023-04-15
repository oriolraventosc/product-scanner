import { styled } from "@mui/material";
import colors from "../../styles/colors";

const ButtonStyled = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
  padding-top: 1rem;
  .button {
    color: ${colors.dark};
    background-color: ${colors.main};
  }
  .button:hover {
    color: ${colors.main};
    background-color: ${colors.dark};
  }
  .login-logout {
    color: ${colors.dark};
    font-size: 1.1rem;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  .login-logout:hover {
    color: ${colors.main};
  }
  .add {
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-size: 1.3rem;
  }
  .load-more {
    background-color: #fff;
    color: ${colors.dark};
    border: 1.5px solid ${colors.main};
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-size: 1.1rem;
    box-shadow: none;
  }
  .load-more:hover {
    background-color: ${colors.main};
    color: ${colors.dark};
  }
`;

export default ButtonStyled;
