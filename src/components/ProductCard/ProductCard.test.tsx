/* eslint-disable react/style-prop-object */
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import GlobalStyles from "../../styles/globalStyles";
import mainTheme from "../../styles/mainTheme";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import ProductCard from "./ProductCard";

describe("Given a ProductCard component", () => {
  describe("When it is rendered", () => {
    test("Then it should an image", () => {
      const name =
        "Tortilla de patatas sin cebolla Classic' sin gluten sin lactosa";
      const image =
        "https://newluxbrand.com/wp-content/uploads/2022/01/tortilla-de-patatas-Newlux-optimized.jpg";
      render(
        <Provider store={store}>
          <ThemeProvider theme={mainTheme}>
            <GlobalStyles />
            {} <ProductCard name={name} image={image} />
          </ThemeProvider>
        </Provider>
      );

      const expectedImage = screen.queryByLabelText(name);

      expect(expectedImage).toBeInTheDocument();
    });
  });
});
