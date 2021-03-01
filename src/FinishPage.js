import React from "react";
import Typography from "@material-ui/core/Typography";
import { ReactComponent as ProductPageSvg } from "./img/product-page.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  img: {
    display: "flex",
    flexDirection: "column",
    margin: "40px",
  },
}));

export const FinishPage = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h5">
        The product page breaks down the score further.
      </Typography>
      <ProductPageSvg className={classes.img} />
      <Typography>
        Click on the “Cosmelo” icon in your chrome bar to see how the product
        earned the score.
      </Typography>
    </>
  );
};
