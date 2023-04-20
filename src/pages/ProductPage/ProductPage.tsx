import { useParams } from "react-router-dom";
import useProduct from "../../hooks/useProduct/useProduct";
import { useAppSelector } from "../../redux/hooks";
import Loader from "../../components/Loader/Loader";

import { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProductInformation from "../../components/ProductInformation/ProductInformation";

const ProductPage = (): JSX.Element => {
  const { loadProduct } = useProduct();
  const { id } = useParams();
  const product = useAppSelector((state) => state.productActions.product);
  const isLoading = useAppSelector((state) => state.uiActions.loading);

  useEffect(() => {
    loadProduct(id!);
  }, [id, loadProduct]);
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
      />
    </>
  );
};

export default ProductPage;
