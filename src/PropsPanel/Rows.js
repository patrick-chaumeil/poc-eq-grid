import React from "react";
import { Box, Button, ButtonGroup, Typography } from "@material-ui/core";
import makeStyles from "@material-ui/styles/makeStyles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    "& > *": {
      margin: "0 8px"
    }
  }
});
export default () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography>Rows</Typography>
      <ButtonGroup color="primary">
        <Button variant="contained">1</Button>
        <Button>2</Button>
        <Button>3</Button>
      </ButtonGroup>
    </Box>
  );
};
