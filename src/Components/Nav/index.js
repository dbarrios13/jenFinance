import * as React from 'react';
import { AppBar, Box, Toolbar, Button } from '@mui/material';
import { NavLink as RouterLink } from "react-router-dom";


export default function Nav() {
  let activeStyles = {
    textDecoration: "none",
    color: "#1e1e24"
  }

  let inactiveStyles = {
    textDecoration: 'none',
    color: '#fff'
  }         

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{bgcolor: '#477998'}}>
        <Toolbar>
          <Button>
            <RouterLink to="/" style={({isActive}) => isActive ? activeStyles : inactiveStyles}>
              Dashboard
            </RouterLink>
          </Button>
          <Button>
            <RouterLink to="/bills" style={({isActive}) => isActive ? activeStyles : inactiveStyles}>
              Bills
            </RouterLink>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}