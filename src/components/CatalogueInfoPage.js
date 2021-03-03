import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { ReactComponent as GoodExample } from "../assets/good-example.svg";
import { ReactComponent as OkayExample } from "../assets/okay-example.svg";
import { ReactComponent as BadExample } from "../assets/bad-example.svg";
import { ReactComponent as UnsureExample } from "../assets/unsure-example.svg";

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
        <GoodExample className={classes.img} />
        <OkayExample className={classes.img} />
        <BadExample className={classes.img} />
        <UnsureExample className={classes.img} />
      </Box>
    </>
  );
};
