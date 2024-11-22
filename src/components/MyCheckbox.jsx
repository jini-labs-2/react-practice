import { Checkbox } from '@mui/material'
import React from 'react'

const label = {
  inputProps: {'aria-label': 'Checkbox demo'}
}

const MyCheckbox = () => {
  return (
    <div>
      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} />
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled check />
    </div>
  )
}

export default MyCheckbox