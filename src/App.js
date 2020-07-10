import React, { useState } from "react";
import { initEqGrid } from "eq-grid";
import cx from "classnames";
import Item from "./Item";
import data from "./data";

initEqGrid(4, 1, "rem", 7);

const Containers = ({ items, setSelected, getBgcolor }) =>
  items?.map(o => (
    <Item
      key={o.id}
      {...o}
      onClick={e => {
        setSelected(o.id);
        e.stopPropagation();
      }}
      bgcolor={getBgcolor(o.id)}
    >
      <Containers {...o} setSelected={setSelected} getBgcolor={getBgcolor} />
    </Item>
  ));

export default function App() {
  const [selectedId, setSelected] = useState(undefined);

  return (
    <eq-grid
      className={cx({
        "eq-grid-dense": true,
        "eq-grid-2-collapse": false,
        "eq-grid-gap-2": false
      })}
    >
      <Containers
        items={data}
        setSelected={id => setSelected(id)}
        getBgcolor={id => (selectedId === id ? "action.focus" : undefined)}
      />
    </eq-grid>
  );
}
