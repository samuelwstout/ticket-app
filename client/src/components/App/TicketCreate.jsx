import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navigation from '../Navigation'
import { Box, Typography, Container, TextField, Button } from '@mui/material'

const TicketCreate = ({ userId, concerts, user, setUser, setTickets, tickets }) => {

  const navigate = useNavigate()

  useEffect(() => {
    if (user === null) {
      navigate('/')
    }
  }, [])

  const [userNotes, setUserNotes] = useState('')
  const [ticketId, setTicketId] = useState(null)

  const params = useParams()
  const concertId = Number(params.id)

  const filter = concerts.filter(item => {
      return item.id === concertId
  })  
  const concert = filter[0]

  const handleSubmit = (e) => {
      e.preventDefault()
      fetch('/api/tickets', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
            },
          body: JSON.stringify({
              user_id: userId,
              concert_id: concertId,
              user_notes: userNotes
            })
          })
          .then(res => {
              if (res.ok) {
                  res.json().then(data => {
                      setTicketId(data.id)
                      setTickets([...tickets, data])
                  })
              }
          })
      setUserNotes('')
  }

  return (
    <>
        <Navigation setUser={setUser} user={user} />
            <main>
            <Box
              sx={{
                bgcolor: 'background.paper',
                marginTop: 6,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}
            >
            {concert &&
            <Container maxWidth="m">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Buy a ticket to {concert.title}
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary">
              {concert.date}
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary">
              {concert.description}
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary">
              ${concert.price} per ticket
            </Typography>
          </Container>
            } 
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Typography variant="h5" align="center" color="text.secondary">
                Leave a note:
            </Typography>
            <TextField
              margin="normal"
              fullWidth
              id="note"
              label="Note"
              name="note"
              autoComplete="note"
              autoFocus
              value={userNotes}
              onChange={(e) => setUserNotes(e.target.value)}
            />
            <Typography align="center">
            <Button
              type="submit"
              color="primary"
              variant="contained"
              sx={{ mt: 3 }}
            >
              Submit
            </Button>
            </Typography>
            </Box> 
            </Box>
            {ticketId && 
                <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
                sx={{ mt: 3 }}
              >
                You bought ticket #{ticketId}
              </Typography>
            }
            </main>
    </>
  )
}

export default TicketCreate