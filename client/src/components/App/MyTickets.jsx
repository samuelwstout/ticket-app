import { useEffect } from 'react'
import Navigation from '../Navigation'
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardActions, CardContent, Grid, Box, Typography, Container } from '@mui/material'

const MyTickets = ({setUser, user, tickets}) => {

  const navigate = useNavigate()

  useEffect(() => {
    if (user === null) {
      navigate('/')
    }
  }, [])

  return (
    <>
      <Navigation setUser={setUser} user={user} />
      <main>
      <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
      >
      <Container maxWidth="sm">
      <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              My Tickets
      </Typography>
      </Container>
      </Box>
      <Container sx={{ py: 6 }} maxWidth="md">
        <Grid container spacing={4}>
          {tickets.map((item) => {
          return <Grid item key={item.id} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Ticket {item.id}
                  </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={() => navigate(`/ticket/${item.id}`)}>Ticket details</Button>
                  </CardActions>
              </Card>
            </Grid>
          })}
        </Grid>
      </Container>
      </main>
    </>
  )
}

export default MyTickets