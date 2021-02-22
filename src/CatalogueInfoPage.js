import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { ReactComponent as Img1 } from "./img/img1.svg";
import { ReactComponent as Img2 } from "./img/img2.svg";
import { ReactComponent as Img3 } from "./img/img3.svg";
import React from "react";

const useStyles = makeStyles((theme) => ({
  imgContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "0",
    alignItems: "flex-end",
  },
  img: {
    display: "flex",
    margin: "40px",
  },
}));

export const CatalogueInfoPage = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h5">
        Each product is assigned GOOD, OKAY, or BAD
      </Typography>
      <Box margin="15px">
        <Typography>
          See the overall score on the product catalogue page.
        </Typography>
      </Box>
      <Box className={classes.imgContainer}>
        <Img1 className={classes.img} />
        <Img2 className={classes.img} />
        <Img3 className={classes.img} />
      </Box>
    </>
  );
};
