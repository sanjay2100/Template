import { Box } from '@mui/material'
import React from 'react'

function ImageBox() {
  return (
    <>
    <Box
    sx={{
        display:{
          xs:'none',
          sm:'none',
          md:'block'
        },
        backgroundColor:'#61cf1d',
        height:'18rem',
        width:{
            xs:'10rem',
            sm:'12rem',
            md:'15rem',
            lg:'25rem',
            xl:'30rem'
        },
        borderRadius:'20px',
        position:'absolute',
        left:'12rem',
        top:'8rem'
    }}
    ></Box>
    <Box
    sx={{
      display:{
        xs:'none',
        sm:'none',
        md:'block'
      },
        backgroundColor:'gray',
        height:'18rem',
        width:{
            xs:'10rem',
            sm:'12rem',
            md:'15rem',
            lg:'25rem',
            xl:'30rem'
        },
        borderRadius:'20px',
        position:'absolute',
        left:'14rem',
        top:'6.5rem',
        zIndex:1,
        
    }}
    ></Box>
    </>
  )
}

export default ImageBox