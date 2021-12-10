import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import * as React from 'react'

export const Typology = (props) => {
  const { typologies, dispatch } = props
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [currentTypology, setCurrentTypology] = React.useState(
    typologies && typologies[0]
  )

  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleChange = (event) => {
    setAnchorEl(null)
    const { myValue } = event.currentTarget.dataset
    const action = { type: 'updateTypology', typology: parseInt(myValue, 10) }
    dispatch(action)
    setCurrentTypology(myValue)
  }

  return (
    <Card sx={{ width: '80%' }}>
      <Stack spacing={2} direction="row" alignItems="center">
        <Typography variant="h4">Typologie</Typography>
        <Button
          id="demo-positioned-button"
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          {currentTypology}
        </Button>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleChange}
        >
          {typologies &&
            typologies.map((typology, index) => {
              return (
                <MenuItem
                  key={index}
                  data-my-value={typology}
                  onClick={handleChange}
                >
                  {typology}
                </MenuItem>
              )
            })}
        </Menu>
      </Stack>
    </Card>
  )
}
