import axios from "axios";
import { loadProductActionCreator } from "../../redux/features/ProductSlicer/ProductSlicer";
import { useCallback } from "react";
import { useAppDispatch } from "../../redux/hooks";

const useProduct = () => {
  const dispatch = useAppDispatch();
  const loadProduct = useCallback(
    async (id: string) => {
      const url = `https://scanner-api.onrender.com/product/${id}`;
      try {
        const response = await axios.get(url);
        const apiResponse = response.data;
        dispatch(loadProductActionCreator(apiResponse.productInformation));
      } catch {}
    },
    [dispatch]
  );
  return { loadProduct };
};

export default useProduct;
