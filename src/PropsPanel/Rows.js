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

  function handleClick(eqRow) {
    dispatch(setItemLayout({ ...layout, eqRow }));
  }
  return (
    <Box className={classes.root}>
      <Typography>Rows</Typography>
      <ButtonGroup color="primary">
        <Button
          variant={!layout?.eqRow && "contained"}
          onClick={() => handleClick()}
        >
          none
        </Button>
        <Button
          variant={layout?.eqRow === 2 && "contained"}
          onClick={() => handleClick(2)}
        >
          2
        </Button>
        <Button
          variant={layout?.eqRow === 3 && "contained"}
          onClick={() => handleClick(3)}
        >
          3
        </Button>
      </ButtonGroup>
    </Box>
  );
};
