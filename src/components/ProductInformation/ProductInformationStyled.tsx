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
        width: 85%;
        text-align: center;
      }
      &_description {
        width: 85%;
        text-align: center;
      }
      &_main-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
      &_ingredients-title {
        padding-left: 1rem;
        padding-top: 1.5rem;
      }
      &_ingredients-recipe {
        padding-left: 1rem;
        padding-top: 0.5rem;
        padding-right: 1rem;
      }
      &_brands-title {
        padding-left: 1rem;
        padding-top: 1.5rem;
      }
      &_brands-names {
        padding-left: 1rem;
        padding-top: 0.5rem;
        padding-right: 1rem;
      }
      &_measures-title {
        padding-left: 1rem;
        padding-top: 1.5rem;
      }
      &_measures-names {
        padding-left: 1rem;
        padding-top: 0.5rem;
        padding-right: 1rem;
      }
      &_benefits-title {
        padding-left: 1rem;
        padding-top: 1.5rem;
      }
      &_benefits-list {
        padding-left: 1rem;
        padding-top: 0.5rem;
        padding-right: 1rem;
      }
    }
  }
  img {
    height: 50%;
    width: 75%;
    border-radius: 5px;
    mix-blend-mode: multiply;
    padding-top: 2rem;
  }
  .button-desktop-container {
    display: none;
  }
  .button-mobile-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 1rem;
    padding-top: 1rem;
  }
  .add {
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-size: 1.3rem;
  }
  .button-mobile {
    color: ${colors.dark};
    background-color: ${colors.main};
  }
  .button-mobile:hover {
    color: ${colors.main};
    background-color: ${colors.dark};
  }
  @media (min-width: 1024px) {
    position: relative;
    left: -3rem;
    .button-mobile-container {
      display: none;
    }
    .button-desktop-container {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-bottom: 1rem;
      padding-top: 1rem;
      width: 100%;
    }
    .button-desktop {
      width: 100%;
      margin-right: 15%;
      margin-left: 15%;
      display: inline-flex;
      color: ${colors.dark};
      background-color: ${colors.main};
    }
    .button-desktop:hover {
      color: ${colors.main};
      background-color: ${colors.dark};
    }
    margin-top: 0;
    .product-information {
      &-header {
        margin-top: 0;
        display: flex;
        flex: 1 auto;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        &_main-info {
          flex: 1;
          align-items: center;
        }
        &_name {
          text-align: left;
          max-width: 70%;
          margin-bottom: 0.5rem;
        }
        &_description {
          text-align: left;
          max-width: 70%;
          width: 100%;
          margin-bottom: 0.5rem;
        }
      }
      &-details {
        &_ingredients-title {
          padding-left: 4rem;
          padding-top: 3.5rem;
        }
        &_ingredients-recipe {
          padding-left: 4rem;
          padding-top: 0.5rem;
          padding-right: 4rem;
        }
        &_brands-title {
          padding-left: 4rem;
          padding-top: 1.5rem;
        }
        &_brands-names {
          padding-left: 4rem;
          padding-top: 0.5rem;
          padding-right: 4rem;
        }
        &_measures-title {
          padding-left: 4rem;
          padding-top: 1.5rem;
        }
        &_measures-names {
          padding-left: 4rem;
          padding-top: 0.5rem;
          padding-right: 4rem;
        }
        &_benefits-title {
          padding-left: 4rem;
          padding-top: 1.5rem;
        }
        &_benefits-list {
          padding-left: 4rem;
          padding-top: 0.5rem;
          padding-right: 4rem;
        }
      }
    }
    img {
      width: 100%;
      height: auto;
      max-width: 500px;
      block-size: auto;
      flex: 1;
    }
  }
  @media (min-width: 1300px) {
    img {
      max-width: 600px;
    }
  }
  @media (min-width: 1500px) {
    img {
      max-width: 700px;
    }
  }
  @media (min-width: 1600px) {
    img {
      max-width: 800px;
    }
  }
  @media (min-width: 1600px) {
    img {
      max-width: 800px;
    }
  }
`;

export default ProductInformationStyled;
