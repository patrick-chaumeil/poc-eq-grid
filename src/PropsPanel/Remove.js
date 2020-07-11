import React from 'react'
import Button from '@material-ui/core/Button'
import { useDispatch } from 'react-redux'
import { removeItem } from '../reducer'
import { Box } from '@material-ui/core'

const Remove = () => {
  const dispatch = useDispatch()
  return (
    <Button
      variant="outlined"
      onClick={() => dispatch(removeItem())}
      size="small"
    >
      Remove
    </Button>
  )
}

export default Remove
