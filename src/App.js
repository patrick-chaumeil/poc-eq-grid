import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Toolbar,
  Typography
} from "@material-ui/core";
import { initEqGrid } from "eq-grid";
import cx from "classnames";

initEqGrid(4, 1, "rem");
export default function App() {
  const [components, setComponents] = useState([
    { className: "eq-col" },
    { className: "eq-col" },
    { className: "eq-col" },
    { className: "eq-col-2" },
    { className: "eq-col" },
    { className: "eq-col-3" },
    { className: "eq-col" },
    { className: "eq-col" },
    { className: "eq-col" },
    { className: "eq-col" },
    { className: "eq-col" },
    { className: "eq-col" },
    { className: "eq-col" },
    { className: "eq-row-2" },
    { className: "eq-col" },
    { className: "eq-col" },
    { className: "eq-col" },
    { className: "eq-col" },
    { className: "eq-col" },
    { className: "eq-col" },
    { className: "eq-row-3 eq-col-2" },
    { className: "eq-col" },
    { className: "eq-col" },
    { className: "eq-col-5-collapse" },
    { className: "eq-col" },
    { className: "eq-col" },
    { className: "eq-col" },
    { className: "eq-col" },
    { className: "eq-col" },
    { className: "eq-col-max" },
    { className: "eq-col" },
    { className: "eq-col" }
  ]);
  const [selectedIndex, setSelected] = useState(-1);
  const selectedComponent =
    (selectedIndex >= 0 && components[selectedIndex]) || undefined;

  const updateComponent = (component, index) => {
    setComponents([
      ...components.slice(0, index),
      component,
      ...components.slice(index + 1)
    ]);
  };
  const insertComponent = (component, index) => {
    if (index < 0) {
      setComponents([...components, component]);
      return;
    }
    setComponents([
      ...components.slice(0, index + 1),
      component,
      ...components.slice(index + 1)
    ]);
  };
  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Button
            onClick={() =>
              insertComponent({ className: "eq-col" }, selectedIndex)
            }
          >
            Insert
          </Button>
          <Typography variant="subtitle2">
            {selectedIndex} is selected
          </Typography>
          {selectedComponent && (
            <TextField
              label="Class"
              onChange={e => {
                updateComponent(
                  { ...selectedComponent, className: e.target.value },
                  selectedIndex
                );
              }}
              value={selectedComponent.className}
            />
          )}
        </Toolbar>
      </AppBar>
      <eq-grid
        className={cx({
          "eq-grid-dense": false,
          "eq-grid-2-collapse": false,
          "eq-grid-gap-2": false
        })}
      >
        {components.map((o, i) => (
          <Box
            m={1}
            component={Paper}
            key={i}
            {...o}
            title={o.className}
            onClick={() => setSelected(i)}
            elevation={3}
          >
            I'm {i}
          </Box>
        ))}
      </eq-grid>
    </Container>
  );
}
