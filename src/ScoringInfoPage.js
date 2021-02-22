import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import React from "react";

import { ScoringInfoPanel } from "./ScoringInfoPanel";

export const ScoringInfoPage = () => {
  return (
    <>
      <Typography variant="h5">
        We score products based on 5 measures of sustainability
      </Typography>
      <Box margin="15px">
        <Typography>Select a category to see how it's scored</Typography>
      </Box>
      <ScoringInfoPanel />
    </>
  );
};
