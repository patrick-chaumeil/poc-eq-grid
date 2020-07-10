import React from "react";
import { Box, Divider } from "@material-ui/core";
import Columns from "./Columns";
import Rows from "./Rows";
import makeStyles from "@material-ui/styles/makeStyles";
import Add from "./Add";

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
    <Box
      position="absolute"
      bottom={0}
      left={0}
      right={0}
      bgcolor="background.paper"
    >
      <Divider />
      <Box className={classes.content}>
        <Add />
        <Columns />
        <Rows />
      </Box>
    </Box>
  );
};

export default PropsPanel;
