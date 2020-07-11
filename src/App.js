import React, { useState } from "react";
import Container from "./Container";
import PropsPanel from "./PropsPanel";
import { Box } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectForm } from "./selectors";

export default function App() {
  const [selectedId, setSelected] = useState();
  const form = useSelector(selectForm);
  return (
    <Box
      bgcolor="background.default"
      display="flex"
      flexDirection="column"
      height="calc(100vh - 16px)"
    >
      <Box flex={1} onClick={() => setSelected(undefined)}>
        <Container
          items={form}
          onSelect={id => setSelected(id)}
          selectedId={selectedId}
        />
      </Box>
      <PropsPanel />
    </Box>
  );
}
