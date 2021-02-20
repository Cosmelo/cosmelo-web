import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
import { theme } from "./Theme.ts";
import { Colours } from "./utils/Constants";
import Typography from "@material-ui/core/Typography";
import MobileStepper from "@material-ui/core/MobileStepper";
import { ScoringInfoPanel } from "./ScoringInfoPanel";
import { ProductBarInfoPage } from "./ProductBarInfoPage";
import { CatalogueInfoPage } from "./CatalogueInfoPage";
import { FinishPage } from "./FinishPage";

const useStyles = makeStyles((theme) => ({
  app: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
  navContainer: {
    position: "absolute",
    bottom: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  navButtons: {
    display: "flex",
    flexDirection: "row",
    margin: "auto",
  },
  skipButton: {
    position: "absolute",
    bottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  stepper: {
    background: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  stepperDotActive: {
    background: Colours.Skobeloff,
  },
}));

function App() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    setActiveStep(3);
  };

  const handleFinish = () => {
    window.open("http://www.sephora.com");
  };

  return (
    <div className={classes.app}>
      {activeStep === 0 && <ScoringInfoPanel />}
      {activeStep === 1 && <ProductBarInfoPage />}
      {activeStep === 2 && <CatalogueInfoPage />}
      {activeStep === 3 && <FinishPage />}
      <ThemeProvider theme={theme}>
        <Box className={classes.navContainer}>
          <Box className={classes.navButtons}>
            <Button onClick={handleBack} disabled={activeStep === 0}>
              <Typography variant="button">
                {activeStep === 0 ? "" : "back"}
              </Typography>
            </Button>
            <Button
              variant="contained"
              onClick={activeStep === 3 ? handleFinish : handleNext}
            >
              <Typography variant="button">
                {activeStep === 3 ? "finish" : "next"}
              </Typography>
            </Button>
          </Box>
          <MobileStepper
            variant="dots"
            steps={4}
            position="static"
            activeStep={activeStep}
            classes={{
              root: classes.stepper,
              dotActive: classes.stepperDotActive,
            }}
          />
        </Box>
        <Button onClick={handleSkip} className={classes.skipButton}>
          <Typography variant="caption">Skip tutorial</Typography>
        </Button>
      </ThemeProvider>
    </div>
  );
}

export default App;
