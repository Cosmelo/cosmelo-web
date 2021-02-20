import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { theme } from "./Theme.ts";
import Typography from "@material-ui/core/Typography";
import MobileStepper from "@material-ui/core/MobileStepper";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
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
    console.log("skippppp");
  };
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Button onClick={handleBack} disabled={activeStep === 0}>
          <Typography variant="button">back</Typography>
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.margin}
          onClick={handleNext}
        >
          <Typography variant="button">
            {activeStep === 5 ? "finish" : "next"}
          </Typography>
        </Button>
        <MobileStepper
          variant="dots"
          steps={6}
          position="static"
          activeStep={activeStep}
        />
        <Button onClick={handleSkip}>
          <Typography variant="caption">Skip tutorial</Typography>
        </Button>
      </ThemeProvider>
    </div>
  );
}

export default App;
