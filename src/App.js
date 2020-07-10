import React, { useState } from "react";
import data from "./data";
import Container from "./Container";
import PropsPanel from "./PropsPanel";
import { Box } from "@material-ui/core";

export default function App() {
  const [selectedId, setSelected] = useState(undefined);

  return (
    <Box bgcolor="background.default">
      <PropsPanel />
      <Container
        items={data}
        onSelect={id => setSelected(id)}
        selectedId={selectedId}
      />
    </Box>
  );
}
