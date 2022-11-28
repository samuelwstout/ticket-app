import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppBar, CssBaseline, Toolbar, Typography, Link, Box, IconButton, Menu, Container, Avatar, Button, Tooltip, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

const Navigation = ({ setUser, user }) => {

  const navigate = useNavigate()

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const concertsClick = () => {
    setAnchorElNav(null);
    navigate('/concerts')
  }

  const createConcertClick = () => {
    setAnchorElNav(null);
    navigate('/create_concert')
  }

  const myTicketsClick = () => {
    setAnchorElNav(null);
    navigate('/my_tickets')
  }

  const handleLogout = () => {
      fetch('/api/logout', {
        method: 'DELETE',
        credentials: 'include'
      })
      .then(res => {
        if (res.ok) {
          setUser(null)
          navigate('/')
        }
      })
    }

  return (
    <AppBar position="static">
    <CssBaseline />
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            mb: .3,
            display: { xs: 'none', md: 'flex' },
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Ticket App
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
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
              <MenuItem onClick={concertsClick}>
                <Typography textAlign="center">Concerts</Typography>
              </MenuItem>
              <MenuItem onClick={createConcertClick}>
                <Typography textAlign="center">Create Concert</Typography>
              </MenuItem>
              <MenuItem onClick={myTicketsClick}>
                <Typography textAlign="center">My Tickets</Typography>
              </MenuItem>
          </Menu>
        </Box>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href=""
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Freenote
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              onClick={concertsClick}
              sx={{ my: 2, color: 'white', display: 'block', textTransform: 'none' }}
            >
              Concerts
            </Button>
            <Button
              onClick={createConcertClick}
              sx={{ my: 2, color: 'white', display: 'block', textTransform: 'none' }}
            >
              Create Concert
            </Button>
            <Button
              onClick={myTicketsClick}
              sx={{ my: 2, color: 'white', display: 'block', textTransform: 'none' }}
            >
              My Tickets
            </Button>
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar src="/broken-image.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography onClick={handleLogout} textAlign="center">Logout</Typography>
              </MenuItem>
          </Menu>
        </Box>  
      </Toolbar>
    </Container>
  </AppBar>
  )
}

export default Navigation