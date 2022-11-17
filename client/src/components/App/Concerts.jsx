import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navigation from '../Navigation'
import { Button, Card, CardActions, CardContent, Grid, Box, Typography, Container } from '@mui/material'

const Concerts = ({ setUser, user, concerts }) => {

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
          <Container maxWidth='sm'>
            <Typography
              component='h1'
              variant='h2'
              align='center'
              color='text.primary'
              gutterBottom
            >
              All Concerts
            </Typography>

            <Typography variant='h5' align='center' color='text.secondary' paragraph>
              A list of all concert submissions plus a link to buy a ticket to a concert.
            </Typography>
          </Container>
        </Box>

        {concerts !== [] &&
        <Container sx={{ py: 6 }} maxWidth='md'>
          <Grid container spacing={4}>
            {concerts.map((item) => (
              <Grid item key={item} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant='h5' component='h2'>
                      {item.title}
                    </Typography>
                    <Typography>
                      {item.date}
                    </Typography>
                    <Typography>
                      {item.description}
                    </Typography>
                    <Typography>
                      ${item.price}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' onClick={() => navigate(`/concert/${item.id}/create_ticket`)}>Buy ticket</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        }
      </main>
    </>
  )
}

export default Concerts