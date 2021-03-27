import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import { ScoringInfoPanel } from "./ScoringInfoPanel";

export const ScoringInfoPage = () => {
  return (
    <Box height="450px">
      <Typography variant="h5" style={{ textAlign: "center" }}>
        We score products based on 4 measures of sustainability
      </Typography>
      <Typography style={{ textAlign: "center", marginTop: "15px" }}>
        Select a category to see how it's scored.
      </Typography>
      <ScoringInfoPanel />
    </Box>
  );
};
