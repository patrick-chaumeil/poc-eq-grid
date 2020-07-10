import React, { useState } from "react";
import data from "./data";
import Container from "./Container";

export default function App() {
  const [selectedId, setSelected] = useState(undefined);

  return (
    <Container
      items={data}
      onSelect={id => setSelected(id)}
      selectedId={selectedId}
    />
  );
}
