import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Welcome = () => {
    var[data,setData]=useState()
        const btnGallery=()=>{
            setData("Gallery")
        }
        const btnHome=()=>{
            setData("Home")
        }
        const btnContactUs=()=>{
            setData("Contact Us")
        }

  return (
    <div>
      <Typography variant='h3' color={'primary'}>Welcome to {data}</Typography>
      <br /><br />
      <Button variant='contained' onClick={btnGallery} color='secondary'>GALLERY</Button>&nbsp;
      <Button variant='contained' onClick={btnHome} color='success'>HOME</Button>&nbsp;
      <Button variant='contained' onClick={btnContactUs} color='error'>CONTACT US</Button>&nbsp;
    </div>
  )
}

export default Welcome
