import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Typography,
  TextField
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { selectSelectedItem } from "../selectors";
import { useDispatch, useSelector } from "react-redux";
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
  const eqCol = layout?.eqCol;

  function handleColumnsClick(e) {
    const value =
      e.target.innerText === "MAX"
        ? "max"
        : parseInt(e.target.innerText, 10) || undefined;
    dispatch(setItemLayout({ ...layout, eqCol: value }));
  }

  return (
    <Box className={classes.root}>
      <Typography>Columns</Typography>
      <ButtonGroup color="primary" onClick={handleColumnsClick}>
        <Button variant={!eqCol && "contained"}>none</Button>
        <Button variant={eqCol === 1 && "contained"}>1</Button>
        <Button variant={eqCol === 2 && "contained"}>2</Button>
        <Button variant={eqCol === 3 && "contained"}>3</Button>
        <Button variant={eqCol === 4 && "contained"}>4</Button>
        <Button variant={eqCol === 5 && "contained"}>5</Button>
        <Button variant={eqCol === 6 && "contained"}>6</Button>
        <Button variant={eqCol === "max" && "contained"}>max</Button>
      </ButtonGroup>
      <TextField label="Custom" variant="outlined" size="small" />
    </Box>
  );
};
