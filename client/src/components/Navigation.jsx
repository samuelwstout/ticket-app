import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

const theme = createTheme();

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
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}`}}
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
          color="text.primary"
          onClick={() => navigate('/concerts')}
          sx={{ my: 1, mx: 1.5 }}
          >
          Concerts
          </Link>
          <Link
              variant="button"
              color="text.primary"
              onClick={() => navigate('/create_concert')}
              sx={{ my: 1, mx: 1.5 }}
            >
              Create Concert
            </Link>
            <Link
              variant="button"
              color="text.primary"
              onClick={() => navigate('/my_tickets')}
              sx={{ my: 1, mx: 1.5 }}
            >
              My Tickets
            </Link>
            <Link
              variant="button"
              color="text.primary"
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

{/* <div>
      { user &&
            <h1>{user.username}</h1>
        }
        <li><Link to="/concerts">Concerts</Link></li>
        <li><Link to="/create_concert">Create Concert</Link></li>
        <li><Link to="/my_tickets">My Tickets</Link></li>
        <p><button onClick={handleLogout}>Logout</button></p>
    </div> */}