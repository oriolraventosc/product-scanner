import { Product } from "../../types/types";

const ProductInformation = (product: Product): JSX.Element => {
  return (
    <>
      <h2>{product.name}</h2>
    </>
  );
};

export default ProductInformation;
