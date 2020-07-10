import React from "react";
import { Box, Typography } from "@material-ui/core";
import { FilterRounded } from "@material-ui/icons";

const FormTitle = () => (
  <Box display="flex" alignItems="center">
    <Box mr={2}>
      <FilterRounded />
    </Box>
    <Typography variant="h4" title="My form name" noWrap>
      My form name
    </Typography>
  </Box>
);

export default FormTitle;
