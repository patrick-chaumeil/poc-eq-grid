import React from "react";
import { Box, Divider } from "@material-ui/core";
import Columns from "./Columns";
import Rows from "./Rows";
import makeStyles from "@material-ui/styles/makeStyles";
import Add from "./Add";
import Remove from "./Remove";

const useStyles = makeStyles({
  content: {
    display: "flex",
    padding: 8,
    alignItems: "center",
    justifyContent: "space-around",
    flexWrap: "wrap",
    "& > *": {
      margin: 8
    }
  }
});

const PropsPanel = () => {
  const classes = useStyles();
  return (
    <Box bgcolor="background.paper">
      <Divider />
      <Box className={classes.content}>
        <Add />
        <Remove />
        <Columns />
        <Rows />
      </Box>
    </Box>
  );
};

export default PropsPanel;
