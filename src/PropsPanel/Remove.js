import React from 'react'
import Button from '@material-ui/core/Button'
import { useDispatch } from 'react-redux'
import { removeItem } from '../reducer'

const Remove = () => {
  const dispatch = useDispatch()
  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={() => dispatch(removeItem())}
    >
      Remove
    </Button>
  )
}

export default Remove
