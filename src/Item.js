import React from "react";
import { Box, Typography } from "@material-ui/core";
import Text from "./comps/Text";
import DateComp from "./comps/Date";
import PaperComp from "./comps/Paper";
const Item = ({
  className,
  component,
  options,
  children,
  onClick,
  isSelected
}) => {
  let TheComp;
  switch (component) {
    case "text":
      TheComp = Text;
      break;
    case "date":
      TheComp = DateComp;
      break;
    case "paper":
      TheComp = PaperComp;
      break;
    default:
      TheComp = () => (
        <Typography color="error">
          unknown component type *{component}*
        </Typography>
      );
  }
  return (
    <Box
      className={className}
      onClick={onClick}
      border={2}
      borderColor={isSelected ? "primary.main" : "transparent"}
    >
      <TheComp {...options}>{children}</TheComp>
    </Box>
  );
};

export default Item;
