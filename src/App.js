import React, { useState } from "react";
import data from "./data";
import Container from "./Container";
import PropsPanel from "./PropsPanel";
import { Box } from "@material-ui/core";

export default function App() {
  const [selectedId, setSelected] = useState();

  return (
    <Box
      bgcolor="background.default"
      display="flex"
      flexDirection="column"
      height="calc(100vh - 16px)"
    >
      <Box flex={1} onClick={() => setSelected(undefined)}>
        <Container
          items={data}
          onSelect={id => setSelected(id)}
          selectedId={selectedId}
        />
      </Box>
      <PropsPanel />
    </Box>
  );
}
