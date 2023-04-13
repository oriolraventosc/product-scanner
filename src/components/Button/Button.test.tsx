/* eslint-disable react/style-prop-object */
import ButtonComponent from "./Button";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import GlobalStyles from "../../styles/globalStyles";
import mainTheme from "../../styles/mainTheme";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

describe("Given a ButtonComponent", () => {
  describe("When it is rendered", () => {
    test("Then it should have the text 'Log in'", () => {
      const text = "Log in";
      const className = "button login-logout";
      render(
        <Provider store={store}>
          <ThemeProvider theme={mainTheme}>
            <GlobalStyles />
            {} <ButtonComponent text={text} style={className} />
          </ThemeProvider>
        </Provider>
      );

      const loginButton = screen.queryByRole("button", {
        name: "Log in",
      });

      expect(loginButton).toBeInTheDocument();
      expect(loginButton).toHaveClass("button login-logout");
    });
  });
});
