import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import GlobalStyles from "../../styles/globalStyles";
import mainTheme from "../../styles/mainTheme";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import Homepage from "./Homepage";
import { BrowserRouter } from "react-router-dom";

describe("Given a Navbar component", () => {
  describe("When it is rendered on mobile or tablets", () => {
    test("Then it should show a 'open menu' icon", () => {
      const iconAccessibleName = "Open menu";
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <Homepage />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );

      const expectedOpenMenuIcon = screen.queryByRole("link", {
        name: iconAccessibleName,
      });

      expect(expectedOpenMenuIcon).toBeInTheDocument();
    });

    test("Then it should show a 'close menu' icon", () => {
      const iconAccessibleName = "Close menu";
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <Homepage />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );

      const expectedCloseMenuIcon = screen.queryByRole("link", {
        name: iconAccessibleName,
      });

      expect(expectedCloseMenuIcon).toBeInTheDocument();
    });

    test("Then it should show a 'Home' anchor text", () => {
      const linkAccessibleName = "Home";
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <Homepage />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );

      const expectedLink = screen.queryByRole("link", {
        name: linkAccessibleName,
      });

      expect(expectedLink).toBeInTheDocument();
    });

    test("Then it should show a 'Your products' anchor text", () => {
      const linkAccessibleName = "Your products";
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <Homepage />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );

      const expectedLink = screen.queryByRole("link", {
        name: linkAccessibleName,
      });

      expect(expectedLink).toBeInTheDocument();
    });
  });
});
