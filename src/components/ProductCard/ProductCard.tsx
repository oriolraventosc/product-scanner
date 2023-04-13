import { Typography } from "@mui/material";
import ProductCardStyled from "./ProductCardStyled";

interface ProductCardProps {
  image: string;
  name: string;
}

const ProductCard = ({ image, name }: ProductCardProps): JSX.Element => {
  return (
    <>
      <ProductCardStyled aria-label={name}>
        <img alt={name} src={image} />
        <Typography
          variant="h2"
          sx={{
            fontSize: {
              xxl: "2.5rem",
              xl: "1.8rem",
              lg: "1.8rem",
              md: "1.8rem",
              sm: "2rem",
              xs: "2rem",
            },
            color: "primary.dark",
            textAlign: "center",
            pt: "1rem",
            pb: "1rem",
          }}
        >
          {name}
        </Typography>
      </ProductCardStyled>
      <ProductCardStyled>
        <img alt={name} src={image} />
        <Typography
          variant="h2"
          sx={{
            fontSize: {
              xxl: "2.5rem",
              xl: "1.8rem",
              lg: "1.8rem",
              md: "1.8rem",
              sm: "2rem",
              xs: "2rem",
            },
            color: "primary.dark",
            textAlign: "center",
            pt: "1rem",
            pb: "1rem",
          }}
        >
          {name}
        </Typography>
      </ProductCardStyled>
    </>
  );
};

export default ProductCard;
