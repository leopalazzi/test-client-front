import Card from '@mui/material/Card'
import Slide from '@mui/material/Slide'
import Slider from '@mui/material/Slider'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import * as React from 'react'

export const Budget = ({ min, max, dispatch }) => {
  const updateBudget = (value) => {
    const action = { type: 'updateBudget', budget: parseInt(value, 10) }
    dispatch(action)
  }
  return (
    <Card sx={{ width: '80%' }}>
      <Typography variant="h4">Budget</Typography>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <Typography variant="h5">{min}</Typography>
        <Slide in={true}>
          <Slider
            key={`slider`} /* fixed issue */
            aria-label="Price Range"
            min={min}
            max={max}
            onChange={(event, value) => {
              updateBudget(value)
            }}
          />
        </Slide>
        <Typography variant="h5">{max}</Typography>
      </Stack>
    </Card>
  )
}
