import React from 'react';
import { Box, Stack, Typography, TextField, Button } from '@mui/material'
import FormFields from './FormFields';

function SignupForm() {
    return (
        <Box  sx={{
            width: {
                xs:'20rem',
                sm:'20rem',
                md:'20rem',
                lg:'23rem',
                xl:'25rem'
            },
            height:'fit-content',
            background: 'rgb(230,163,226)',
            background: 'linear-gradient(0deg, rgba(230,163,226,1) 0%,rgba(242,248,249,1) 110%, rgba(242,248,249,1) 100%)',
            borderRadius: '10px',
            paddingInline:'30px',
            paddingBlock:'20px'
        }}
        
        >
            <form>
                <Stack direction='column' spacing={1}>
                <div style={{marginBottom:'20px'}}>
                <Typography variant='h3' component='div' fontSize='16px' fontWeight='600'>Signup!</Typography>
                <Typography variant='subtitle1' component='div' fontSize='14px' color='#9e9b9b'>&nbsp;Signup using your mobile number</Typography>
                </div>
                <FormFields/>
                </Stack>
            </form>

        </Box>
    )
}

export default SignupForm