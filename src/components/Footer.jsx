import React from 'react';

//material ui
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import Paper from '@mui/material/Paper';


function Footer() {
  return <div>
        <Box sx={{ pt: 7, pd: 0 }}>
          <CssBaseline />
          <Paper>
            <BottomNavigation sx={{ pt: 2 }} className='footer'>
                <p>2022 © MdD</p>
            </BottomNavigation>
          </Paper>
        </Box>
  </div>
}

export default Footer;