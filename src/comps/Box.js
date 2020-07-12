import React from 'react'
import { Box, Typography } from '@material-ui/core'

const BoxComp = ({ children, items }) => (
  <Box>
    {children}
    {!items && (
      <Box textAlign="center">
        <Typography color="textSecondary">
          <b>Insert</b> components here
        </Typography>
      </Box>
    )}
  </Box>
)

export default BoxComp

export const render = BoxComp

export const isContainer = true

export const defaultOptions = {}

export const color = 'warning.light'
