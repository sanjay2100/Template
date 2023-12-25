import { Grid, Stack, Typography,Box } from '@mui/material'
import React from 'react'
import SignupForm from '../components/signup/Form/SignupForm'
import ImageBox from '../components/signup/ImageBox/ImageBox'
import Footer from '../common/footer'
import Partners from '../components/signup/Partners/Partners'

function Signup() {
  const sx = {
    // background: 'rgb(172, 230, 163)',
    background: 'linear-gradient(0deg, rgba(172, 230, 163, 1) 0%, rgba(242, 248, 249, 1) 100%)',
    paddingBlock:'2rem',
    border:'1px solid black',
    borderRadius:'8px',
    height:'fit-content'    
  }
  return (
    <Stack direction='column' justifyContent='space-between' height='99vh'>
      <Box sx={sx}>
      <Grid container  justifyContent='space-between' paddingInline='1.5rem'>
        <Grid style={{
          display: {
            md: 'flex',
            sm: 'none',
            xs: 'none'
          },
          
          direction: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          overflow:'hidden'
        }} md={6} sm={0} xs={0} >
          <ImageBox />
        </Grid>
        <Grid container md={6} sm={12} xs={0} justifyContent='end'>
          <SignupForm />
        </Grid>
      
      </Grid>
      </Box>
      <Typography fontWeight={600}>Our partners</Typography>
      <Partners/>
      <Footer/>
    </Stack>
  )
}

export default Signup