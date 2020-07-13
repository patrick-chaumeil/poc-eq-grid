import React from 'react'
import { Button, ButtonGroup, Typography } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { selectSelectedItem } from '../selectors'
import { setItemLayout } from '../reducer'

export default () => {
  const dispatch = useDispatch()
  const { layout } = useSelector(selectSelectedItem)
  const eqRow = layout?.eqRow

  function handleClick(e) {
    const value = parseInt(e.target.innerText, 10) || undefined
    dispatch(setItemLayout({ ...layout, eqRow: value }))
  }

  return (
    <>
      <Typography>Rows</Typography>
      <ButtonGroup color="primary" onClick={handleClick} size="small">
        <Button variant={!eqRow && 'contained'}>none</Button>
        <Button variant={eqRow === 2 && 'contained'}>2</Button>
        <Button variant={eqRow === 3 && 'contained'}>3</Button>
      </ButtonGroup>
    </>
  )
}
