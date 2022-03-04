import React from 'react';

//material ui
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import Paper from '@mui/material/Paper';


function Footer() {
  return <div>
        <Box sx={{ pb: 7 }}>
          <CssBaseline />
          <Paper sx={{ position: '', bottom: 0, left: 0, right: 0 }} elevation={0}>
            <BottomNavigation className='footer'>
                <h5>2022 © MdD</h5>
            </BottomNavigation>
          </Paper>
        </Box>
  </div>
}

export default Footer;