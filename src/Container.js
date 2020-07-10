import React from "react";
import cx from "classnames";
import Item from "./Item";
import { initEqGrid } from "eq-grid";

initEqGrid(4, 1, "rem", 7);

const Container = ({ items, onSelect, selectedId }) => (
  <eq-grid
    className={cx({
      "eq-grid-dense": true,
      "eq-grid-2-collapse": false,
      "eq-grid-gap-2": false
    })}
  >
    {items?.map(o => (
      <Item
        key={o.id}
        {...o}
        onClick={e => {
          onSelect(o.id);
          e.stopPropagation();
        }}
        isSelected={selectedId === o.id}
      >
        {o.items && (
          <Container {...o} onSelect={onSelect} selectedId={selectedId} />
        )}
      </Item>
    ))}
  </eq-grid>
);

export default Container;
