import { createTheme } from "@mui/material";

const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#FB8351",
      dark: "#333237",
      light: "#ADD4D3",
      contrastText: "#757780",
    },
  },
  shape: {
    borderRadius: 5,
  },
});

export default mainTheme;
