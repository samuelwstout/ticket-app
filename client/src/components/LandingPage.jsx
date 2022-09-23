import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const LandingPage = ({user}) => {

const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/concerts')
    }
  }, [user, navigate])

  return (
    <div>
      <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
          sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2
          }}
        >
       <Typography component="h1" variant="h4">
            Phase 4 Project
        </Typography>
        <Typography component="h1" variant="h5">
            a ticket app
        </Typography>
        <ButtonGroup>
          <Button onClick={() => navigate('/login')}>Sign in</Button>
          <Button onClick={() => navigate('/signup')}>Sign up</Button>
        </ButtonGroup>
        </Box>
        </Container>
        </ThemeProvider>
    </div>
  )
}

export default LandingPage