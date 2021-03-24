import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { ReactComponent as SourceInfoPageSvg } from "../assets/source-info.svg";
import { makeStyles } from "@material-ui/core/styles";
import { Colours } from "../styles/Colours";

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
  link: {
    color: Colours.Skobeloff,
  },
}));

export const SourceInfoPage = () => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

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
        sustainability categories are based on the 2018 release of the{" "}
        <Link
          href="https://www.sustainabilityconsortium.org/wp-content/uploads/2018/04/TSC%C2%AE-BPC-Product-Sustainability-Rating-System.pdf"
          target="_blank"
          rel="noreferrer"
          className={classes.link}
        >
          BPC (Beauty and Personal Care) Sustainability Rating
        </Link>
        , simplified to 4 general categories that are digestible for users. Data
        for each product is retrieved from the company website and scored if it
        meets a benchmark in each category. If no information can be found for a
        given category on the company’s website or from contact with the
        company, it will be scored 0, but will be noted.
      </Typography>
      <SourceInfoPageSvg className={classes.img} />
    </>
  );
};
