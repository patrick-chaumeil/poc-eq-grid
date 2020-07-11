import React from "react";
import cx from "classnames";
import Item from "./Item";
import { initEqGrid } from "eq-grid";
import { useDispatch, useSelector } from "react-redux";
import { selectSelectedItem } from "./selectors";
import { selectItem } from "./reducer";

initEqGrid(4, 1, "rem", 7);

const Container = ({ items }) => {
  const dispatch = useDispatch();
  const { selectedId } = useSelector(selectSelectedItem);
  return (
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
            dispatch(selectItem(o.id));
            e.stopPropagation();
          }}
          isSelected={selectedId === o.id}
        >
          {o.items && <Container {...o} />}
        </Item>
      ))}
    </eq-grid>
  );
};

export default Container;
