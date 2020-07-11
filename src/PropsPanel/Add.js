import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import * as Comps from "../comps";
export default function SimpleMenu() {
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = value => {
    dispatch({ type: "coucou", value });
    setAnchorEl(null);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Add
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {Object.entries(Comps).map(([key, value]) => (
          <MenuItem key={key} onClick={() => handleSelect(key)}>
            {key}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
