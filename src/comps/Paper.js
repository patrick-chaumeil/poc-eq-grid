import React from 'react'
import { Paper, Typography } from '@material-ui/core'

const PaperComp = ({ label, children }) => (
  <Paper>
    <Typography variant="h6">{label}</Typography>
    {children}
  </Paper>
)

export default PaperComp

export const render = PaperComp

export const isContainer = true

export const defaultOptions = { label: 'Paper' }
