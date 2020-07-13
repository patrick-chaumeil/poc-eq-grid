import React from 'react'
import DateFnsUtils from '@date-io/date-fns' // choose your lib
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'

const DateComp = () => {
  const [selectedDate, handleDateChange] = React.useState(new Date())

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DateTimePicker
        value={selectedDate}
        onChange={handleDateChange}
        inputVariant="filled"
        fullWidth
      />
    </MuiPickersUtilsProvider>
  )
}

export default DateComp

export const render = DateComp

export const defaultOptions = { label: 'Date' }

export const color = 'error.light'
