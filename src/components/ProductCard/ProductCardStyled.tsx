import { styled } from "@mui/material";
import colors from "../../styles/colors";

const ProductCardStyled = styled("article")`
  border: 1px solid #edebf0;
  border-radius: 5px;
  margin-bottom: 1rem;
  :hover {
    cursor: pointer;
    background-color: ${colors.main};
    transition: 0.3s;
    z-index: 8;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 5px 5px 0 0;
  }
  @media (min-width: 750px) {
    max-width: 18.75rem;
  }
`;

export default ProductCardStyled;
