import React from 'react'
import { Button, Box } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { loadForm, saveForm } from '../reducer'
import DisplayOptions from './DisplayOptions'

const Actions = () => {
  const dispatch = useDispatch()
  return (
    <Box display="flex" justifyContent="space-between">
      <Button onClick={() => dispatch(loadForm())}>Load</Button>
      <Button onClick={() => dispatch(saveForm())}>Save</Button>
      <DisplayOptions />
    </Box>
  )
}

export default Actions
