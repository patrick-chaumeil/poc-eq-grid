import React from "react";
import { Box, Typography } from "@material-ui/core";
import * as Comps from "./comps";
import { makeStyles } from "@material-ui/core/styles";
import cx from "clsx";

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

const Item = ({
  className,
  component,
  options,
  children,
  onClick,
  isSelected
}) => {
  const classes = useStyles();
  const TheComp = Comps[component];
  return (
    <Box
      className={cx(className, classes.root)}
      onClick={onClick}
      border={2}
      borderColor={isSelected ? "primary.main" : "transparent"}
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
