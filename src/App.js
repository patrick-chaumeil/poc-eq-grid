import React from 'react'
import Container from './Container'
import PropsPanel from './PropsPanel'
import { Box } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { selectForm } from './selectors'
import { selectItem } from './reducer'

export default function App() {
  const form = useSelector(selectForm)
  const dispatch = useDispatch()
  return (
    <Box
      bgcolor="background.default"
      display="flex"
      flexDirection="column"
      height="calc(100vh - 16px)"
    >
      <Box flex={1} onClick={() => dispatch(selectItem(undefined))}>
        <Container items={form} />
      </Box>
      <PropsPanel />
    </Box>
  )
}
