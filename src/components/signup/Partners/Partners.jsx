import { Typography,Grid } from '@mui/material'
import React from 'react'
import Image from '../../../assets/react.svg'

function Partners() {
  return (
    <Grid container direction='row' justifyContent='space-evenly'>
        {[...Array(5)].map((item, index) => (
          <Grid>
            <img src={Image} alt='img' key={index} />
          </Grid>
        ))}

      </Grid>
  )
}

export default Partners