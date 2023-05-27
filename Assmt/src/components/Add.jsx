import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div style={{textAlign:'center'}}>
       <h1>Blog Name: <TextField label="Enter Blogname"></TextField></h1>
       <h1>Description: <TextField label="Enter Description"></TextField></h1>
       <h1>Author Name: <TextField label="Enter Author name"></TextField></h1>
       <Button variant="contained" color="primary">Submit</Button>
    </div>
  )
}

export default Add