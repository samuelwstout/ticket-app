import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0a1b2f'
    }
  }
});

const Navigation = ({setUser, user}) => {

const navigate = useNavigate();

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar 
      position="static"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.main}`}}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          {user &&
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Hey, {user.username}!
          </Typography>
          }
          <Box
            sx={{
              typography: 'body1',
              '& > :not(style) + :not(style)': {
                ml: 2,
              },
            }}
            onClick={e => e.preventDefault()}
          >
          <Link
          variant="button"
          color="inherit"
          onClick={() => navigate('/concerts')}
          sx={{ my: 1, mx: 1.5 }}
          >
          Concerts
          </Link>
          <Link
              variant="button"
              color="inherit"
              onClick={() => navigate('/create_concert')}
              sx={{ my: 1, mx: 1.5 }}
            >
              Create Concert
            </Link>
            <Link
              variant="button"
              color="inherit"
              onClick={() => navigate('/my_tickets')}
              sx={{ my: 1, mx: 1.5 }}
            >
              My Tickets
            </Link>
            <Link
              variant="button"
              color="inherit"
              onClick={handleLogout}
              sx={{ my: 1, mx: 1.5 }}
            >
              Log out
            </Link>
          </Box>
          
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}

export default Navigation