import React from 'react'
import { Box, Paper } from '@material-ui/core'
import Columns from './Columns'
import Rows from './Rows'
import makeStyles from '@material-ui/styles/makeStyles'
import Add from './Add'
import Remove from './Remove'
import { useSelector } from 'react-redux'
import { selectSelectedItem } from '../selectors'
import Custom from './Custom'

const useStyles = makeStyles({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      margin: 8,
    },
  },
})

const PropsPanel = () => {
  const classes = useStyles()
  const selectedItem = useSelector(selectSelectedItem)
  return (
    <Box component={Paper} elevation={4} className={classes.root}>
      <Add />
      {selectedItem && (
        <>
          <Remove />
          <Columns />
          <Custom />
          <Rows />
        </>
      )}
    </Box>
  )
}

export default PropsPanel
