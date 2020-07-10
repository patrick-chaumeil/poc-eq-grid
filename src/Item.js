import React from "react";
import { Box, Paper, Typography } from "@material-ui/core";
import Text from "./comps/Text";
import DateComp from "./comps/Date";
import PaperComp from "./comps/Paper";
const Item = ({
  className,
  component,
  options,
  children,
  onClick,
  bgcolor
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
    <Box m={1} className={className} onClick={onClick} bgcolor={bgcolor} clone>
      <Paper elevation={3}>
        <TheComp {...options}>{children}</TheComp>
      </Paper>
    </Box>
  );
};

export default Item;
