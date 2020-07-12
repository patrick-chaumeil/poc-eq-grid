import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { FilterRounded } from '@material-ui/icons'

const FormName = ({ label }) => (
  <Box display="flex" alignItems="center">
    <Box display="flex" mr={2}>
      <FilterRounded />
    </Box>
    <Typography variant="h4" title={label} noWrap>
      My form name
    </Typography>
  </Box>
)

export default FormName

export const render = FormName

export const defaultOptions = { label: 'My form name' }
