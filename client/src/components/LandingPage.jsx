import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonGroup, Button, Container, CssBaseline, Box, Typography } from '@mui/material'

const LandingPage = ({ user }) => {

  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/concerts')
    }
  }, [user, navigate])

  return (
    <Container component="main" maxWidth="xs" >
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
            Ticket App
          </Typography>
          
          <ButtonGroup>
            <Button onClick={() => navigate('/login')}>Sign in</Button>
            <Button onClick={() => navigate('/signup')}>Sign up</Button>
          </ButtonGroup>
        </Box>
    </Container>
  )
}

export default LandingPage