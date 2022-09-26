import {useState} from 'react'
import Navigation from '../Navigation'
import {useParams} from 'react-router-dom'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0a1b2f'
    }
  }
});

const TicketCreate = ({userId, concerts, user, setUser, setTickets, tickets }) => {

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
    // POST to /api/tickets
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
    <div>
        <Navigation setUser={setUser} user={user} />
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
    </div>
  )
}

export default TicketCreate