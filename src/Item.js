import React from "react";
import { Box, Typography } from "@material-ui/core";
import * as Comps from "./comps";
import { makeStyles } from "@material-ui/core/styles";
import cx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { selectSelectedItem } from "./selectors";
import { selectItem } from "./reducer";

const useStyles = makeStyles(theme => ({
  root: {
    "&:hover": {
      backgroundColor: theme.palette.action.hover
    }
  }
}));
const DefaultComp = ({ compName }) => (
  <Typography color="error">unknown component type *{compName}*</Typography>
);

const Item = ({ className, component, options, children, id }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { selectedId } = useSelector(selectSelectedItem);

  const TheComp = Comps[component].render;
  return (
    <Box
      className={cx(className, classes.root)}
      onClick={e => {
        dispatch(selectItem(id));
        e.stopPropagation();
      }}
      border={2}
      borderColor={selectedId === id ? "primary.main" : "transparent"}
    >
      {TheComp ? (
        <TheComp {...options}>{children}</TheComp>
      ) : (
        <DefaultComp compName={component} />
      )}
    </Box>
  );
};

export default Item;
