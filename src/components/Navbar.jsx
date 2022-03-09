import { Link } from "react-router-dom"
import React from "react"

//MUI components
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';


const Navbar = () => {
  return (
    <AppBar elevation={0} position="sticky" style={{ background: 'white', color: 'black'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
{/* LOGO OF THE DESKTOP VERSION */}
          <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
            <Link to="/"><img alt="Home" src="/images/microphone.png" height={60} width={60}/></Link> 
          </Typography>
{/* MOBILE VERSION TAB */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Link style={{textDecoration: 'none'}} to="/about"><Button style={{color: 'gray'}} sx={{ my: 1, display: 'block', textTransform: 'uppercase' }}>sobre nós</Button></Link>
          </Box>
{/* LOGO OF THE MOBILE VERSION */}
          <Typography sx={{display: { xs: 'flex', md: 'none' }}}>
            <Link to="/"><img alt="Home" src="/images/microphone.png" height={60} width={60}/></Link> 
          </Typography>
{/* DESKTOP VERSION TAB */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link style={{textDecoration: 'none'}} to="/about"><Button style={{color: 'gray'}} sx={{ my: 1, display: 'block', textTransform: 'uppercase' }}>sobre nós</Button></Link>
          </Box>
{/* SOCIAL MEDIA BUTTONS ON THE RIGHT SIDE OF THE NAVBAR  */}          
          <a href="mailto:hello@maltadodesporto.com" target="_blank" rel="noreferrer"><img src="/images/mail.png" alt="Email" height={35} width={35}/></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><img src="/images/instagram.png" alt="Instagram" height={35} width={35}/></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer"><img src="/images/twitter.png" alt="Twitter" height={35} width={35}/></a>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
         