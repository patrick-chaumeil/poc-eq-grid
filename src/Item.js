import React from "react";
import { Box, Typography } from "@material-ui/core";
import * as Comps from "./comps";

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
  const TheComp = Comps[component];
  return (
    <Box
      className={className}
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
