import { styled } from "@mui/material";
import colors from "../../styles/colors";

const ProductInformationStyled = styled("section")`
  .product-information {
    &-header {
      background-color: #f6f5f8;
      width: 100vw;
      left: -1rem;
      position: relative;
      margin-top: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding-bottom: 2rem;
      &_name {
        width: 100%;
      }
      &_description {
        width: 85%;
      }
    }
    &-details {
      background-color: #fff;
      width: 100vw;
      left: -1rem;
      position: relative;
      border-radius: 10px 10px 0px 0px;
      margin-top: -1rem;
      padding-bottom: 1rem;
    }
  }
  img {
    height: 50%;
    width: 75%;
    border-radius: 5px;
    mix-blend-mode: multiply;
  }
`;

export default ProductInformationStyled;
