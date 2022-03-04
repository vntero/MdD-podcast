import { Link } from "react-router-dom"
import React from "react"

//MUI components
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@material-ui/icons/Menu'
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

const pages = [
<Link style={{textDecoration: 'none'}} to="/about"><Button style={{color: 'gray'}} sx={{ my: 1, display: 'block', textTransform: 'uppercase' }}>sobre nós</Button></Link>, 
<Link style={{textDecoration: 'none'}} to="/eps"><Button style={{color: 'gray'}} sx={{ my: 1, display: 'block', textTransform: 'uppercase' }}>episódios</Button></Link>,
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar elevation={0} position="sticky" style={{ background: 'white', color: 'black'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
{/* LOGO OF THE DESKTOP VERSION */}
            <Link to="/"><img alt="Home" src="/images/microphone.png" height={60} width={60}/></Link> 
            </Typography>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
 
             </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
{/* THIS IS REGARDING THE DROPDOWN MENU OF THE MOBILE VIEW */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem 
                  sx={{"&.MuiButtonBase-root:hover": {bgcolor: "transparent"}}} 
                  key={page} onClick={handleCloseNavMenu}>
                    {page}
                </MenuItem>

              ))}
            </Menu>
          </Box>

{/* MOBILE VIEW BURGER MENU STARTS BELOW */}
          <Typography sx={{display: { xs: 'flex', md: 'none' }}}>
            <Link to="/"><img alt="Home" src="/images/microphone.png" height={60} width={60}/></Link> 
          </Typography>
{/* BELOW IS THE DESKTOP VERSION OPTIONS */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Typography 
                key={page}
                onClick={handleCloseNavMenu}
              >
                {page}
              </Typography>
            ))}
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


            // 
            // 
            // 
         