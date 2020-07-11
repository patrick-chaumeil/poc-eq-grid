import React from 'react'
import Button from '@material-ui/core/Button'
import { useDispatch } from 'react-redux'
import { removeItem } from '../reducer'

const Remove = () => {
  const dispatch = useDispatch()
  return (
    <Button
      variant="text"
      color="secondary"
      onClick={() => dispatch(removeItem())}
      size="small"
    >
      Remove
    </Button>
  )
}

export default Remove
