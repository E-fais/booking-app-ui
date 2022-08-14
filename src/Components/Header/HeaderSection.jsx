import React from 'react'
import './Header.css'
import {Typography} from '@mui/material'


function HeaderSection() {
  return (
    <div className='header'>
        <Typography
        sx={{color:'#3A488A '}}
         variant='h4'>
          Tez Hotels
        </Typography>
    </div>
  )
}

export default HeaderSection