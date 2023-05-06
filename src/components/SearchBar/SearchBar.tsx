import { useEffect, useState } from "react";
import SearchBarStyled from "./SearchBarStyled";
import useProduct from "../../hooks/useProduct/useProduct";
import { useAppSelector } from "../../redux/hooks";
import { Typography } from "@mui/material";
import NoResults from "../NoResults/NoResults";

const SearchBar = (): JSX.Element => {
  const [product, setProduct] = useState("");
  const products = useAppSelector((state) => state.productActions.myProducts);
  const handleChangeProduct = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProduct(event.target.value);
  };
  const { loadProducts } = useProduct();
  useEffect(() => {
    loadProducts(product);
  }, [loadProducts, product]);
  return (
    <>
      <SearchBarStyled>
        <div className="input-box">
          <i className="uil uil-search"></i>
          <input
            type="text"
            placeholder="Search here..."
            onChange={handleChangeProduct}
            value={product.toLowerCase()}
          />
          <button className="button" onClick={() => loadProducts(product)}>
            Search
          </button>
        </div>
        <div className="products">
          {products.length > 0 && (
            <div className="products-list">
              {products.map((product, index) => (
                <article className="products-list_item" key={index++}>
                  <img src={product.image} alt={product.name} />
                  <Typography
                    variant="h2"
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
                      pb: "1rem",
                    }}
                  >
                    {product.name.toUpperCase()}
                  </Typography>
                </article>
              ))}
            </div>
          )}
          {products.length === 0 && <NoResults />}
        </div>
      </SearchBarStyled>
    </>
  );
};

export default SearchBar;
