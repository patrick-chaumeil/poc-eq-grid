import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Typography,
  FormControlLabel,
  Switch
} from "@material-ui/core";
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
      <Typography>Columns</Typography>
      <ButtonGroup color="primary">
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button variant="contained">4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>max</Button>
      </ButtonGroup>
      <FormControlLabel control={<Switch name="checkedA" />} label="Custom" />
    </Box>
  );
};
