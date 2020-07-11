import React from "react";
import { Box, Button, ButtonGroup, Typography } from "@material-ui/core";
import makeStyles from "@material-ui/styles/makeStyles";
import { useDispatch, useSelector } from "react-redux";
import { selectSelectedItem } from "../selectors";
import { setItemLayout } from "../reducer";

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
  const dispatch = useDispatch();
  const { layout } = useSelector(selectSelectedItem);
  const eqRow = layout?.eqRow;
  function handleClick(e) {
    const value = parseInt(e.target.innerText, 10) || undefined;
    dispatch(setItemLayout({ ...layout, eqRow: value }));
  }
  return (
    <Box className={classes.root}>
      <Typography>Rows</Typography>
      <ButtonGroup color="primary" onClick={handleClick}>
        <Button variant={!eqRow && "contained"}>none</Button>
        <Button variant={eqRow === 2 && "contained"}>2</Button>
        <Button variant={eqRow === 3 && "contained"}>3</Button>
      </ButtonGroup>
    </Box>
  );
};
