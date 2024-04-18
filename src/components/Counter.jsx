import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Counter = () => {
    var [count,setCount]=useState(0)
    const addCount=()=>{
        setCount(count+1)
    }
    const subCount=()=>{
        setCount(count-1)
    }
  return (
    <div>
      <Typography varient='h3'>{count}</Typography>
      <br />
      <Button onClick={addCount}><ArrowUpwardIcon></ArrowUpwardIcon></Button>
      <Button onClick={subCount}><ArrowDownwardIcon></ArrowDownwardIcon></Button>
    </div>
  )
}

export default Counter
