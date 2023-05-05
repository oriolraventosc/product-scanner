import { useAppSelector } from "../../redux/hooks";
import Loader from "../../components/Loader/Loader";

import Navbar from "../../components/Navbar/Navbar";
import ProductInformation from "../../components/ProductInformation/ProductInformation";

const ProductPage = (): JSX.Element => {
  const product = useAppSelector((state) => state.productActions.product);
  const isLoading = useAppSelector((state) => state.uiActions.loading);

  return (
    <>
      {isLoading && <Loader />}
      <Navbar />
      <ProductInformation
        name={product.name}
        benefits={product.benefits}
        brand={product.brand}
        ean={product.ean}
        image={product.image}
        ingredients={product.ingredients}
        weight={product.weight}
        status={product.status}
        description={product.description}
        howToUse={product.howToUse}
        sideEffects={product.sideEffects}
      />
    </>
  );
};

export default ProductPage;
