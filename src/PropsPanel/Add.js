import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { useDispatch, useSelector } from 'react-redux'
import * as Comps from '../comps'
import { addItem } from '../reducer'
import { selectSelectedItem } from '../selectors'
import { Switch, Divider, FormControlLabel, Box } from '@material-ui/core'

const Add = () => {
  const insertRef = React.useRef()
  const dispatch = useDispatch()
  const selectedItem = useSelector(selectSelectedItem)
  const { isContainer } = Comps[(selectedItem?.component)] || {}

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = e => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleSelect = value => {
    const shouldInsert = insertRef?.current?.checked
    console.log(insertRef?.current)
    dispatch(addItem({ ...value, shouldInsert }))
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
        {isContainer && (
          <>
            <Divider />
            <Box ml={2} mt={1}>
              <FormControlLabel
                control={<Switch inputRef={insertRef} />}
                label="Insert"
              />
            </Box>
          </>
        )}
      </Menu>
    </>
  )
}

export default Add
