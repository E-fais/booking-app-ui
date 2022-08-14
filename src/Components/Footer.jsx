import { Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <div className='footer'>
        <Typography 
        align='center'
        bgcolor={'lightGrey'}
        color='white'
        marginTop={2}
        padding={2}
        variant='body2'>
        Copy Rights @ Tez Hotels. {new Date().getFullYear()}
        </Typography>
        </div>
  )
}

export default Footer