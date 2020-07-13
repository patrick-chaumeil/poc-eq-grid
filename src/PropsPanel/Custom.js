import React from 'react'
import { TextField } from '@material-ui/core'
import { selectSelectedItem } from '../selectors'
import { useDispatch, useSelector } from 'react-redux'
import { setItemLayout } from '../reducer'

const Custom = () => {
  const dispatch = useDispatch()
  const { layout } = useSelector(selectSelectedItem)
  const custom = layout?.custom

  function handleChange(e) {
    dispatch(setItemLayout({ ...layout, custom: e.target.value }))
  }

  return (
    <TextField
      label="Custom"
      variant="outlined"
      size="small"
      value={custom || ''}
      onChange={handleChange}
    />
  )
}

export default Custom
