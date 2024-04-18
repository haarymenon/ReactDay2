import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Yoyo = () => {
    var[input,setInput] = useState()
    var[b,setB]=useState()
    const inputHandler =(e)=>{
        //console.log(e.target.value)
        setInput(e.target.value)

    }
    const btnClicked=()=>{
      setB(input)
    }
  return (
    <div style={{margin:'10%'}}>
        <Typography varient='h3'>{b}</Typography>
      <TextField variant='outlined' label='Enter your name' onChange={inputHandler}/><br />
      <Button varient='contained' onClick={btnClicked}>Click</Button>
    </div>
  )
}

export default Yoyo
