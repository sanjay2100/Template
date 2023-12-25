import React from 'react'
import { Box, Stack, Typography, TextField, Button } from '@mui/material'
import { FaCheckCircle } from "react-icons/fa";
import InputAdornment from '@mui/material/InputAdornment';

function FormFields() {
    const heightField={
        '& input': {
          height: '10px', // Adjust the height for extra-small screens
          minHeight: '10px', // Ensure minHeight is set for responsiveness
          '@media (min-width:600px)': {
            height: '10px', // Adjust the height for small screens and above
            minHeight: '10px', // Ensure minHeight is set for responsiveness
          },
          '@media (min-width:960px)': {
            height: '10px', // Adjust the height for medium screens and above
            minHeight: '10px', // Ensure minHeight is set for responsiveness
          },
          '@media (min-width:1280px)': {
            height: '10px', // Adjust the height for large screens and above
            minHeight: '10px', // Ensure minHeight is set for responsiveness
          },
          '@media (min-width:1920px)': {
            height: '10px', // Adjust the height for extra-large screens
            minHeight: '10px', // Ensure minHeight is set for responsiveness
          },
          borderRadius: '20px', // Adjust the border radius for the input element
        },
        backgroundColor: 'white',
      }
    return (
        <>
            <Stack direction='column' spacing={1}>
                <Typography variant='h3' component='div' fontSize='16px' fontWeight='600'>Mobile number</Typography>
                <TextField 
                focused
                color="success" 
                fullWidth  
                size='small' 
                placeholder='Ten digit mobile number' 
                
                sx={heightField} />
                <Stack direction='row'>
                    <div style={{ width: '100%' }}>

                    </div>
                    <Button variant='contained'
                        sx={{
                            width: {
                                xs: '100%',
                                sm: '80%',
                                md: '60%',
                                lg: '40%',
                                xl: '50%'
                            },
                            borderRadius: '20px'
                        }}
                        size='small'
                        color='secondary'
                    >Send OTP</Button>
                </Stack>
            </Stack>
            <Stack direction='column' spacing={1}>
                <Typography variant='h3' component='div' fontSize='16px' fontWeight='600'>One time password</Typography>
                <TextField color="success"
                    fullWidth focused size='small'
                    placeholder='Six digit code'
                    sx={heightField}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                <FaCheckCircle style={{
                                    color: 'green',
                                    fontSize: '20px'
                                }} />
                            </InputAdornment>
                        ),
                    }}
                />
            </Stack>
            <div style={{height:'10px'}}>

            </div>
            <Stack direction='column' spacing={1}>
                <Typography variant='h3' component='div' fontSize='16px' fontWeight='600' mt={2}>Email ID</Typography>
                <TextField color="success"
                    fullWidth focused size='small'
                    placeholder='Ten digit mobile number'
                    sx={heightField}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                <FaCheckCircle style={{
                                    color: 'green',
                                    fontSize: '20px'
                                }} />
                            </InputAdornment>
                        ),
                    }} />
                <Stack direction='row'>
                    <div style={{ width: '100%' }}>

                    </div>
                    <Button variant='contained'
                        sx={{
                            width: {
                                xs: '100%',
                                sm: '80%',
                                md: '60%',
                                lg: '40%',
                                xl: '50%'
                            },
                            borderRadius: '20px'
                        }}
                        size='small'
                        color='secondary'
                    >Send Code</Button>
                </Stack>
            </Stack>
            <Stack direction='column' spacing={1}>
                <Typography variant='h3' component='div' fontSize='16px' fontWeight='600'>Code</Typography>
                <TextField color="success"
                    fullWidth focused size='small'
                    placeholder='Ten digit mobile number'
                    sx={heightField}
                />
                <Stack direction='row'>
                    <div style={{ width: '100%' }}>

                    </div>
                    <Button variant='contained'
                        sx={{
                            width: {
                                xs: '100%',
                                sm: '80%',
                                md: '60%',
                                lg: '40%',
                                xl: '50%'
                            },
                            borderRadius: '20px'
                        }}
                        size='small'
                        color='secondary'
                    >Next</Button>
                </Stack>
            </Stack>
        </>
    )
}

export default FormFields