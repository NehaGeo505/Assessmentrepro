import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{background:"yellow"}}>
        <Toolbar>
            <Typography  variant="h6" color="black" component="div" sx={{ flexGrow: 1 }}>
                BLOG DASHBOARD
            </Typography>

            <Button color="success"><Link to={'/'}>Home</Link></Button>
            <Button color="success"><Link to={'/add'}>Add Blog</Link></Button>
        </Toolbar>
        </AppBar>
    </Box>
  )
}

export default NavBar