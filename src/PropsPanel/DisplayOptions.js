import React from 'react'
import { IconButton, Box, Menu, MenuItem } from '@material-ui/core'
import TuneIcon from '@material-ui/icons/Tune'
import DoneIcon from '@material-ui/icons/Done'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { useDispatch, useSelector } from 'react-redux'
import { selectDisplayOptions } from '../selectors'
import { toggleDisplayOption } from '../reducer'

const useStyles = makeStyles({
  menu: {
    '& .MuiSvgIcon-root': {
      visibility: 'hidden',
      marginRight: 8,
      marginLeft: -8,
    },
    '& .Mui-selected': {
      '& .MuiSvgIcon-root': {
        visibility: 'visible',
      },
    },
  },
})

const DisplayMode = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const dispatch = useDispatch()
  const displayOptions = useSelector(selectDisplayOptions)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleSelect = optionName => {
    dispatch(toggleDisplayOption({ optionName }))
  }
  return (
    <Box display="flex" justifyContent="flex-end" alignItems="center">
      <IconButton size="small" onClick={handleClick}>
        <TuneIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        className={classes.menu}
        onClose={handleClose}
      >
        {[
          { optionName: 'showContent', optionLabel: 'Content' },
          { optionName: 'showName', optionLabel: 'Name' },
        ].map(({ optionName, optionLabel }) => (
          <MenuItem
            selected={displayOptions[optionName]}
            onClick={() => handleSelect(optionName)}
          >
            <DoneIcon />
            {optionLabel}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}

export default DisplayMode
