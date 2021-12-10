import Card from '@mui/material/Card'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import * as React from 'react'

export const Surface = ({ min, max, dispatch }) => {
  const updateSurface = (value) => {
    const action = { type: 'updateSurface', surface: parseInt(value, 10) }
    dispatch(action)
  }
  return (
    <Card sx={{ mb: 1, width: '80%' }}>
      <Typography variant="h4">Surface Area</Typography>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <TextField
          id="outlined-number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{ min: min, max: max }}
          onChange={(event) => {
            updateSurface(event.target.value)
          }}
        />
        <Typography variant="h5">m2</Typography>
      </Stack>
    </Card>
  )
}
