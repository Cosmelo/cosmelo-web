import React, { useState } from "react";
import {
  ScoreCategories,
  ProductInfo,
  categories,
  orderedCategories,
  scoringByCategory,
} from "./utils/helper";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Colours } from "./utils/Constants";

const useOptionStyles = makeStyles({
  wrapper: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    width: "46px",
    margin: "20px 20px 20px 0",
  },
  circle: {
    display: "inline-block",
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    cursor: "pointer",
    position: "absolute",
    right: 0,
  },
  selected: {
    display: "inline-block",
    borderRadius: "20px",
    width: "46px",
    height: "20px",
    position: "absolute",
    right: 0,
  },
});

const CategoryOption = ({
  category,
  selected,
  onClick,
}: {
  category: keyof ProductInfo;
  selected: boolean;
  onClick: () => void;
}) => {
  const classes = useOptionStyles();

  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      margin="28px 0"
      alignSelf="left"
    >
      <div className={classes.wrapper}>
        <div
          className={selected ? classes.selected : classes.circle}
          style={{ backgroundColor: categories[category].colour }}
          onClick={onClick}
        />
      </div>
      <Box>
        <Typography variant="body2" style={{ fontWeight: "bold" }}>
          {categories[category].label}
        </Typography>
        <Typography variant="body2">{categories[category].subLabel}</Typography>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles({
  tableCard: {
    background: Colours.Grey,
    padding: "15px",
    borderRadius: "0 10px 10px 0",
  },
  lastTableRow: {
    "&:last-child td": {
      borderBottom: 0,
    },
  },
  select: {
    width: "100%",
    marginBottom: "5px",
  },
});

export const ScoringInfoPanel = () => {
  const classes = useStyles();
  const [selected, setSelected] = useState(ScoreCategories.Packaging);

  const handleChange = (newSelected: ScoreCategories) => {
    setSelected(newSelected);
  };

  return (
    <Box padding="21px 29px">
      <Typography variant="subtitle1" style={{ marginBottom: "27px" }}>
        Scoring
      </Typography>
      <Box
        className={classes.tableCard}
        style={{
          border: `2px solid ${categories[selected].colour}`,
          borderLeft: `20px solid ${categories[selected].colour}`,
        }}
      >
        <Typography variant="body2" style={{ fontWeight: "bold" }}>
          {categories[selected].label}
        </Typography>
        <Typography variant="body2">{categories[selected].subLabel}</Typography>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell style={{ fontWeight: "bold" }}>Metric</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="right">3</TableCell>
              <TableCell align="left">
                {scoringByCategory[selected]["3"]}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">2</TableCell>
              <TableCell align="left">
                {scoringByCategory[selected]["2"]}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">1</TableCell>
              <TableCell align="left">
                {scoringByCategory[selected]["1"]}
              </TableCell>
            </TableRow>
            <TableRow className={classes.lastTableRow}>
              <TableCell align="right">0</TableCell>
              <TableCell align="left">
                {scoringByCategory[selected]["0"]}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
      {orderedCategories.map((category) => (
        <CategoryOption
          category={category}
          selected={selected === category}
          onClick={() => handleChange(category as ScoreCategories)}
          key={category}
        />
      ))}
    </Box>
  );
};
