import React from 'react'
import { TextField } from '@material-ui/core'

const Text = ({ label, multiline }) => (
  <TextField
    id="filled-basic"
    label={label}
    variant="filled"
    multiline={multiline}
    rows={multiline ? 3 : undefined}
    fullWidth
  />
)

export default Text

export const render = Text

export const defaultOptions = { label: 'Text', multiline: false }
