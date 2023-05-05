import { styled } from "@mui/material";
import colors from "../../styles/colors";

const SearchBarStyled = styled("section")`
  .products-list {
    display: block;
  }
  width: 100%;
  left: 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: fit-content;
  margin-top: 1rem;
  .input-box {
    position: relative;
    height: 76px;
    width: 100%;
    background: #fff;
    border-radius: 8px;
    margin-top: 1rem;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }
  .input-box i,
  .input-box .button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .input-box i {
    left: 20px;
    font-size: 30px;
    color: #707070;
  }
  .input-box input {
    height: 100%;
    max-width: 50%;
    outline: none;
    font-size: 1.2rem;
    font-weight: 400;
    border: none;
    padding-left: 1rem;
    background-color: transparent;
  }
  .input-box .button {
    right: 20px;
    font-size: 1.2rem;
    font-weight: 400;
    color: #fff;
    border: none;
    padding: 12px 30px;
    border-radius: 6px;
    background-color: ${colors.main};
    color: ${colors.dark};
    cursor: pointer;
  }
  .input-box .button:hover {
    background-color: ${colors.dark};
    color: ${colors.main};
    transition: 0.2s;
  }
  .input-box .button:active {
    transform: translateY(-50%) scale(0.98);
  }
  .products-list {
    width: 100%;
    margin-bottom: 1rem;
    &_item {
      width: inherit;
      margin-top: 1rem;
      border: 1.5px solid #c0bcbc57;
      border-radius: 5px;
    }

    img {
      width: 100%;
      height: auto;
      border-radius: 5px;
    }
  }
  @media (min-width: 768px) {
    .input-box input {
      width: 100%;
      max-width: 75%;
    }
    .products-list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }
  @media (min-width: 1024px) {
    .input-box input {
      width: 100%;
      max-width: 80%;
    }
    .input-box {
      margin-left: 4rem;
      margin-right: 4rem;
    }
    .products-list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1rem;
    }
  }
`;

export default SearchBarStyled;
