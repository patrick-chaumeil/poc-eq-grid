import React from 'react'
import { Box, Paper, Divider } from '@material-ui/core'
import Columns from './Columns'
import Rows from './Rows'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Add from './Add'
import Remove from './Remove'
import { useSelector } from 'react-redux'
import { selectSelectedItem } from '../selectors'
import Custom from './Custom'
import Actions from './Actions'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      margin: 8,
    },
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    '& > *': {
      marginRight: theme.spacing(1),
    },
  },
}))

const PropsPanel = () => {
  const classes = useStyles()
  const selectedItem = useSelector(selectSelectedItem)
  return (
    <Box component={Paper} elevation={4} className={classes.root}>
      <Actions />
      <Divider />
      <Box className={classes.buttons}>
        <Add />
        {selectedItem && <Remove />}
      </Box>
      {selectedItem && (
        <>
          <Divider />
          <Columns />
          <Custom />
          <Rows />
        </>
      )}
    </Box>
  )
}

export default PropsPanel
