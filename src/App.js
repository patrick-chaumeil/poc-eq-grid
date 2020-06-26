import React, { useState } from "react";
import {
  AppBar,
  Button,
  Container,
  Paper,
  TextField,
  Toolbar,
  Typography
} from "@material-ui/core";
import { initEqGrid } from "eq-grid";
import cx from "classnames";

initEqGrid(16, 1, "rem");
export default function App() {
  const [components, setComponents] = useState([]);
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
              insertComponent({ classNames: "eq-col" }, selectedIndex)
            }
          >
            Insert
          </Button>
          <Typography>{selectedIndex}</Typography>
          {selectedComponent && (
            <TextField
              label="Class"
              onChange={e => {
                updateComponent(
                  { ...selectedComponent, classNames: e.target.value },
                  selectedIndex
                );
              }}
              value={selectedComponent.classNames}
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
          <Paper {...o} onClick={() => setSelected(i)}>
            I'm {i}
          </Paper>
        ))}
      </eq-grid>
    </Container>
  );
}
