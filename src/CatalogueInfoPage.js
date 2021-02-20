import { Box } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import React from "react";

import { theme } from "./Theme";

export const CatalogueInfoPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h5">
        Each product is assigned GOOD, OKAY, or BAD.
      </Typography>
      <Typography>
        See the overall score on the product catalogue page.
      </Typography>
      <Box display="flex" flexDirection="row" padding="10px"></Box>
    </ThemeProvider>
  );
};
