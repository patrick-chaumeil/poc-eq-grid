import React from 'react'
import { Button, ButtonGroup, Typography } from '@material-ui/core'
import { selectSelectedItem } from '../selectors'
import { useDispatch, useSelector } from 'react-redux'
import { setItemLayout } from '../reducer'

export default () => {
  const dispatch = useDispatch()
  const { layout } = useSelector(selectSelectedItem)
  const eqCol = layout?.eqCol

  function handleClick(e) {
    const value =
      e.target.innerText === 'MAX'
        ? 'max'
        : parseInt(e.target.innerText, 10) || undefined
    dispatch(setItemLayout({ ...layout, eqCol: value }))
  }

  return (
    <>
      <Typography>Columns</Typography>
      <ButtonGroup color="primary" onClick={handleClick} size="small">
        <Button variant={!eqCol && 'contained'}>none</Button>
        <Button variant={eqCol === 1 && 'contained'}>1</Button>
        <Button variant={eqCol === 2 && 'contained'}>2</Button>
        <Button variant={eqCol === 3 && 'contained'}>3</Button>
        <Button variant={eqCol === 4 && 'contained'}>4</Button>
        <Button variant={eqCol === 5 && 'contained'}>5</Button>
        <Button variant={eqCol === 6 && 'contained'}>6</Button>
        <Button variant={eqCol === 'max' && 'contained'}>max</Button>
      </ButtonGroup>
    </>
  )
}
