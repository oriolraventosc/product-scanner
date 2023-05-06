import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import NoResultsStyled from "./NoResultsStyled";
import { Typography } from "@mui/material";

const NoResults = (): JSX.Element => {
  return (
    <>
      <NoResultsStyled>
        <TravelExploreIcon sx={{ fontSize: "15rem", color: "primary.dark" }} />
        <Typography
          variant="h2"
          className="product-information-header_name"
          sx={{
            fontSize: {
              xxl: "2.5rem",
              xl: "2.5rem",
              lg: "2.5rem",
              md: "2.5rem",
              sm: "2.5rem",
              xs: "2.5rem",
            },
            fontWeight: "700",
            color: "primary.main",
            textAlign: "center",
            pt: "1rem",
            width: "80%",
          }}
        >
          Sorry! No results found...
        </Typography>
      </NoResultsStyled>
    </>
  );
};

export default NoResults;
