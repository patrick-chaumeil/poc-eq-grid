import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { useDispatch } from 'react-redux'
import * as Comps from '../comps'
import { addItem } from '../reducer'

const Add = () => {
  const dispatch = useDispatch()

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = e => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleSelect = value => {
    dispatch(addItem(value))
    setAnchorEl(null)
  }

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
        size="small"
      >
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
          <MenuItem
            key={key}
            onClick={() =>
              handleSelect({ component: key, options: value.defaultOptions })
            }
          >
            {key}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default Add
