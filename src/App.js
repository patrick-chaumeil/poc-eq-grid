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
      flexDirection="row"
      height="100vh"
    >
      <Box flex={1} m={1} onClick={() => dispatch(selectItem(undefined))}>
        <Container items={form} />
      </Box>
      <Box width={360}>
        <PropsPanel />
      </Box>
    </Box>
  )
}
