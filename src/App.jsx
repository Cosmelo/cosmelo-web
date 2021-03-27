import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
import { theme } from "./styles/theme.ts";
import { Colours } from "./utils/Constants";
import Typography from "@material-ui/core/Typography";
import MobileStepper from "@material-ui/core/MobileStepper";
import { ScoringInfoPage } from "./components/ScoringInfoPage";
import { SourceInfoPage } from "./components/SourceInfoPage";
import { ProductBarInfoPage } from "./components/ProductBarInfoPage";
import { CatalogueInfoPage } from "./components/CatalogueInfoPage";
import { FinishPage } from "./components/FinishPage";
import { ReactComponent as TopCorner } from "./assets/top-corner.svg";
import { ReactComponent as BottomCorner } from "./assets/bottom-corner.svg";

const useStyles = makeStyles((theme) => ({
  page: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  navContainer: {
    position: "relative",
    marginTop: "20px",
  },
  backButton: {
    display: "inline-block",
    position: "absolute",
    left: "-72px",
    paddingTop: "10px",
    paddingBottom: "10px",
    "&:hover": { background: "none" },
    "&:focus": {
      boxShadow:
        "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
    },
  },
  centred: {
    display: "flex",
    flexDirection: "column",
  },
  nextButton: {
    "&:hover": { backgroundColor: Colours.Grey, color: Colours.Black },
    display: "flex",
    margin: "auto",
    backgroundColor: Colours.NaplesYellow,
    width: "148px",
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  skipButton: {
    paddingTop: "10px",
    paddingBottom: "10px",
    "&:hover": { background: "none" },
    "&:focus": {
      boxShadow:
        "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
    },
  },
  stepper: {
    background: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  stepperDotActive: {
    background: Colours.Skobeloff,
  },
  topRightImg: {
    zIndex: "-1",
    position: "absolute",
    top: "0px",
    right: "0px",
    overflow: "visible",
  },
  bottomLeftImg: {
    zIndex: "-1",
    position: "absolute",
    bottom: "0px",
    left: "0px",
    overflow: "visible",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "475px",
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
    setActiveStep(4);
  };

  const handleFinish = () => {
    window.open("http://www.sephora.com");
  };

  return (
    <ThemeProvider theme={theme}>
      <TopCorner className={classes.topRightImg} />
      <main>
        <Box className={classes.page}>
          <Box className={classes.contentContainer}>
            {activeStep === 0 && <ScoringInfoPage />}
            {activeStep === 1 && <SourceInfoPage />}
            {activeStep === 2 && <ProductBarInfoPage />}
            {activeStep === 3 && <CatalogueInfoPage />}
            {activeStep === 4 && <FinishPage />}
          </Box>
          <Box className={classes.navContainer}>
            <Button
              onClick={handleBack}
              disabled={activeStep === 0}
              disableRipple
              className={classes.backButton}
              aria-label="back"
            >
              {activeStep !== 0 && (
                <Typography
                  variant="button"
                  style={{ color: Colours.TextGrey }}
                >
                  {activeStep === 0 ? "" : "back"}
                </Typography>
              )}
            </Button>
            <Box className={classes.centred}>
              <Box>
                <Button
                  variant="contained"
                  className={classes.nextButton}
                  onClick={activeStep === 4 ? handleFinish : handleNext}
                  aria-label={activeStep === 4 ? "finish" : "next"}
                >
                  <Typography variant="button">
                    {activeStep === 4 ? "finish" : "next"}
                  </Typography>
                </Button>
              </Box>
              <MobileStepper
                variant="dots"
                steps={5}
                position="static"
                activeStep={activeStep}
                classes={{
                  root: classes.stepper,
                  dotActive: classes.stepperDotActive,
                }}
              />
            </Box>
          </Box>
          <Button
            onClick={handleSkip}
            disableRipple
            className={classes.skipButton}
            aria-label="skip tutorial"
          >
            <Typography variant="button" style={{ color: Colours.TextGrey }}>
              Skip tutorial
            </Typography>
          </Button>
        </Box>
      </main>
      <BottomCorner className={classes.bottomLeftImg} />
    </ThemeProvider>
  );
}

export default App;
