import React from "react";
import { makeStyles, Box, Tooltip } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { calculateScore, categories, orderedCategories } from "./utils/helper";
import { randomInfo } from "./utils/data";
import { Colours } from "./utils/Constants";
import GoodIcon from "./GoodIcon";
import { ReactComponent as Arrow } from "./img/arrow.svg";

const useStyles = makeStyles({
  circle: {
    display: "inline-block",
    backgroundColor: Colours.Black,
    borderRadius: "50%",
    width: "3px",
    height: "3px",
    margin: "5px",
  },
  bar: {
    display: "flex",
    flexDirection: "row",
    height: "64px",
    width: "570px",
    position: "relative",
    borderRadius: "0 32px 32px 0",
    overflow: "hidden",
  },
  barInner: {
    height: "100%",
    overflow: "hidden",
  },
});

const NiceTooltip = withStyles({
  tooltip: {
    fontSize: "1em",
    color: Colours.Black,
    backgroundColor: Colours.Grey,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    padding: "5px",
    display: "flex",
    alignItems: "center",
    maxWidth: "1000px",
  },
  arrow: {
    color: "#F5F5F5",
  },
})(Tooltip);

export const ProductBarInfoPage = () => {
  const classes = useStyles();
  const score = calculateScore(randomInfo);
  let colour;
  if (score >= 10) {
    colour = Colours.Success;
  } else if (score >= 5) {
    colour = Colours.Warning;
  } else {
    colour = Colours.Error;
  }
  return (
    <>
      <Typography variant="h5">
        Each category adds points to an overall product score
      </Typography>
      <Box display="flex" flexDirection="row" padding="60px">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box margin="20px 0 20px 0">
            <GoodIcon style={{ fontSize: "64px" }} />
          </Box>
          <Box padding="10px">
            <Arrow />
          </Box>
          <Typography>overall score</Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            className={classes.bar}
            border={`4px solid ${colour}`}
            width="300px"
            margin="20px 0 20px 10px"
          >
            {orderedCategories.map((category) => (
              <NiceTooltip
                title={
                  <>
                    {randomInfo[category].score}
                    <Box className={classes.circle} />
                    {categories[category].label}
                  </>
                }
                arrow
                key={"tooltip" + categories[category].label}
                placement="top"
              >
                <Box
                  className={classes.barInner}
                  key={categories[category].label}
                  style={{
                    background: categories[category].colour,
                    width: `${(randomInfo[category].score / 15) * 567}px`,
                  }}
                />
              </NiceTooltip>
            ))}
          </Box>
          <Box padding="10px">
            <Arrow />
          </Box>
          <Typography>category breakdown</Typography>
        </Box>
      </Box>
      <Typography>
        Each category is scored out of 3 points. There are 5 categories,
        amounting to a score out of 15 (3 points x 5 categories) for each
        product.
      </Typography>
    </>
  );
};
