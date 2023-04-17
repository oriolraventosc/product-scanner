import axios from "axios";
import { loadProductActionCreator } from "../../redux/features/ProductSlicer/ProductSlicer";
import { useCallback } from "react";
import { useAppDispatch } from "../../redux/hooks";

const useProduct = () => {
  const dispatch = useAppDispatch();
  const apiUrl = process.env.REACT_APP_URL;
  const loadProduct = useCallback(
    async (id: string) => {
      const url = `${apiUrl}product/${id}`;
      try {
        const response = await axios.get(url);
        const apiResponse = response.data;
        dispatch(loadProductActionCreator(apiResponse.productInformation));
      } catch {}
    },
    [apiUrl, dispatch]
  );
  return { loadProduct };
};

export default useProduct;
