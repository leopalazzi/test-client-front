import Card from '@mui/material/Card'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import OutlinedInput from '@mui/material/OutlinedInput'
import Select from '@mui/material/Select'
import * as React from 'react'

export const Exposure = ({ exposures, dispatch }) => {
  const [exposure, setExposure] = React.useState([])

  const handleChange = (event) => {
    const {
      target: { value },
    } = event
    const exposureValue = typeof value === 'string' ? value.split(',') : value
    setExposure(exposureValue)
    const action = { type: 'updateExposures', exposures: exposureValue }
    dispatch(action)
  }

  return (
    <Card sx={{ width: '80%', marginTop: '1vh', paddingTop: '1vh' }}>
      <FormControl sx={{ width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Exposure</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={exposure}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
        >
          {exposures &&
            exposures.map((exposureValue, index) => (
              <MenuItem key={index} value={exposureValue}>
                {exposureValue}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Card>
  )
}
