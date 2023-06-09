import {
  ProductInitialState,
  ProductReducer,
  loadProductActionCreator,
} from "./ProductSlicer";
import { productMock } from "../../../mocks/productMocks/productMock";

describe("Given a Product reducer", () => {
  describe("When it is invoked with the method loadProduct", () => {
    test("Then it should return an object with 'Tomato sauce' product data", () => {
      const action = loadProductActionCreator([productMock]);
      const expectedState = {
        product: {
          name: "",
          image: "",
          ingredients: "",
          description: "",
          brand: [""],
          weight: 0,
          benefits: [""],
          ean: "",
          status: "",
          sideEffects: "",
          howToUse: "",
        },
        myProducts: [productMock],
      };

      const newState = ProductReducer(ProductInitialState, action);

      expect(newState).toStrictEqual(expectedState);
    });
  });
});
