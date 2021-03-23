import React from "react";
import Typography from "@material-ui/core/Typography";
import { ReactComponent as SourceInfoPageSvg } from "../assets/source-info.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  img: {
    display: "flex",
    flexDirection: "column",
    margin: "40px",
  },
  description: {
    marginTop: "38px",
    maxWidth: "700px",
    textAlign: "center",
  },
}));

export const SourceInfoPage = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h5">
        The product scoring is based on industry research
      </Typography>
      <Typography className={classes.description}>
        The product scoring is based on industry research on how sustainability
        is scored in cosmetic and fashion research. Cosmelo aimed to develop a
        comprehensive score that judges sustainability of the entire life cycle
        of products based on company policies and initiatives. The
        sustainability categories are based on the 2018 release of the BPC
        (Beauty and Personal Care) Sustainability Rating, simplified to 4
        general categories that are digestible for users. Data for each product
        is retrieved from the company website and scored if it meets a benchmark
        in each category. If no information can be found for a given category on
        the company’s website or from contact with the company, it will be
        scored 0, but will be noted.
      </Typography>
      <SourceInfoPageSvg className={classes.img} />
    </>
  );
};
