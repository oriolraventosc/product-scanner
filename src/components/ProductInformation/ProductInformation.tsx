/* eslint-disable react/style-prop-object */
import { Typography } from "@mui/material";
import { Product } from "../../types/types";
import ProductInformationStyled from "./ProductInformationStyled";
import ButtonComponent from "../Button/Button";

const ProductInformation = (product: Product): JSX.Element => {
  return (
    <>
      <ProductInformationStyled className="product-information">
        <div className="product-information-header">
          <img src={product.image} alt={product.name} />
          <Typography
            variant="h2"
            className="product-information-header_name"
            sx={{
              fontSize: {
                xxl: "2rem",
                xl: "2rem",
                lg: "2rem",
                md: "2rem",
                sm: "2rem",
                xs: "2rem",
              },
              fontWeight: "700",
              color: "primary.dark",
              textAlign: "center",
              pt: "1rem",
            }}
          >
            {product.name}
          </Typography>
          <Typography
            variant="body2"
            className="product-information-header_description"
            sx={{
              fontSize: {
                xxl: "1.5rem",
                xl: "1.5rem",
                lg: "1.5rem",
                md: "1.5rem",
                sm: "1.5rem",
                xs: "1.5rem",
              },
              fontWeight: "500",
              color: "primary.dark",
              textAlign: "center",
              pt: "0.5rem",
            }}
          >
            {product.description}
          </Typography>
          <ButtonComponent text="Add to favourites" style="button add" />
        </div>
        <div className="product-information-details">
          <article className="product-information-details_ingredients">
            <Typography
              variant="h3"
              className="product-information-details_ingredients-title"
              sx={{
                fontSize: {
                  xxl: "1.9rem",
                  xl: "1.9rem",
                  lg: "1.9rem",
                  md: "1.9rem",
                  sm: "1.9rem",
                  xs: "1.9rem",
                },
                fontWeight: "700",
                color: "primary.dark",
                textAlign: "left",
                pt: "1.5rem",
                pl: "1rem",
              }}
            >
              Ingredients
            </Typography>
            <Typography
              variant="body2"
              className="product-information-details_ingredients-recipe"
              sx={{
                fontSize: {
                  xxl: "1.4rem",
                  xl: "1.4rem",
                  lg: "1.4rem",
                  md: "1.4rem",
                  sm: "1.4rem",
                  xs: "1.4rem",
                },
                fontWeight: "500",
                color: "primary.dark",
                textAlign: "left",
                pt: "0.5rem",
                pl: "1rem",
                pr: "1rem",
              }}
            >
              {product.ingredients}
            </Typography>
          </article>
          <article className="product-information-details_brands">
            <Typography
              variant="h3"
              className="product-information-details_brands-title"
              sx={{
                fontSize: {
                  xxl: "1.9rem",
                  xl: "1.9rem",
                  lg: "1.9rem",
                  md: "1.9rem",
                  sm: "1.9rem",
                  xs: "1.9rem",
                },
                fontWeight: "700",
                color: "primary.dark",
                textAlign: "left",
                pt: "1.5rem",
                pl: "1rem",
              }}
            >
              Brands
            </Typography>
            {product.brand.map((brand, index) => (
              <Typography
                key={index}
                variant="body2"
                className="product-information-details_brands-names"
                sx={{
                  fontSize: {
                    xxl: "1.4rem",
                    xl: "1.4rem",
                    lg: "1.4rem",
                    md: "1.4rem",
                    sm: "1.4rem",
                    xs: "1.4rem",
                  },
                  fontWeight: "500",
                  color: "primary.main",
                  textAlign: "left",
                  pt: "0.5rem",
                  pl: "1rem",
                  pr: "1rem",
                }}
              >
                {brand}
              </Typography>
            ))}
          </article>
          <article className="product-information-details_measures">
            <Typography
              variant="h3"
              className="product-information-details_measures-title"
              sx={{
                fontSize: {
                  xxl: "1.9rem",
                  xl: "1.9rem",
                  lg: "1.9rem",
                  md: "1.9rem",
                  sm: "1.9rem",
                  xs: "1.9rem",
                },
                fontWeight: "700",
                color: "primary.dark",
                textAlign: "left",
                pt: "1.5rem",
                pl: "1rem",
              }}
            >
              Measures
            </Typography>

            <Typography
              variant="body2"
              className="product-information-details_measures-names"
              sx={{
                fontSize: {
                  xxl: "1.4rem",
                  xl: "1.4rem",
                  lg: "1.4rem",
                  md: "1.4rem",
                  sm: "1.4rem",
                  xs: "1.4rem",
                },
                fontWeight: "500",
                color: "primary.dark",
                textAlign: "left",
                pt: "0.5rem",
                pl: "1rem",
                pr: "1rem",
              }}
            >
              Net content: {product.weight}g
            </Typography>
          </article>
          <article className="product-information-details_benefits">
            <Typography
              variant="h3"
              className="product-information-details_benefits-title"
              sx={{
                fontSize: {
                  xxl: "1.9rem",
                  xl: "1.9rem",
                  lg: "1.9rem",
                  md: "1.9rem",
                  sm: "1.9rem",
                  xs: "1.9rem",
                },
                fontWeight: "700",
                color: "primary.dark",
                textAlign: "left",
                pt: "1.5rem",
                pl: "1rem",
              }}
            >
              Nutritional benefits
            </Typography>
            {product.benefits.map((benefit, index) => (
              <Typography
                key={index}
                variant="body2"
                className="product-information-details_benefits-list"
                sx={{
                  fontSize: {
                    xxl: "1.4rem",
                    xl: "1.4rem",
                    lg: "1.4rem",
                    md: "1.4rem",
                    sm: "1.4rem",
                    xs: "1.4rem",
                  },
                  fontWeight: "500",
                  color: "primary.dark",
                  textAlign: "left",
                  pt: "0.5rem",
                  pl: "1rem",
                  pr: "1rem",
                }}
              >
                • {benefit}
              </Typography>
            ))}
          </article>
        </div>
      </ProductInformationStyled>
    </>
  );
};

export default ProductInformation;
