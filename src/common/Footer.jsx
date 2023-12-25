import React from 'react'
import {Box, Typography} from '@mui/material'

function Footer() {
    const sx = {
        backgroundColor:'#66bf06',
        paddingBlock:'10px',
        textAlign:'center',
        borderTop:'1px solid black'
      }
  return (
    <Box sx={sx} >
        <Typography color='#fff'>Fia technologies Pvt Ltd All rights Recieved| Call centre : +91-0123-4786530 & Email:cccare@fiaglobal.com|Terms& Conditions</Typography>
    </Box>
  )
}

export default Footer