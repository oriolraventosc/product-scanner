/* eslint-disable react/style-prop-object */
import { Button, Typography } from "@mui/material";
import { Product } from "../../types/types";
import ProductInformationStyled from "./ProductInformationStyled";

const ProductInformation = (product: Product): JSX.Element => {
  return (
    <>
      <ProductInformationStyled className="product-information">
        <div className="product-information-header">
          <img src={product.image} alt={product.name} />
          <article className="product-information-header_main-info">
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
            <div className="button-desktop-container">
              <Button
                variant="contained"
                className={"button-desktop add"}
                disableRipple
              >
                Add to favourites
              </Button>
            </div>
            <div className="button-mobile-container">
              <Button
                variant="contained"
                className={"button-mobile add"}
                disableRipple
              >
                Add to favourites
              </Button>
            </div>
          </article>
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
