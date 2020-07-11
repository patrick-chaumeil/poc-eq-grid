import React from "react";
import cx from "classnames";
import Item from "./Item";
import { initEqGrid } from "eq-grid";

initEqGrid(4, 1, "rem", 6);

const Container = ({ items }) => {
  return (
    <eq-grid
      className={cx({
        "eq-grid-dense": true,
        "eq-grid-2-collapse": false,
        "eq-grid-gap-2": false
      })}
    >
      {items?.map(o => (
        <Item key={o.id} {...o}>
          {o.items && <Container {...o} />}
        </Item>
      ))}
    </eq-grid>
  );
};

export default Container;
