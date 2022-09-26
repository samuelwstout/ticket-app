import {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Navigation from '../Navigation'
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

const TicketDetails = ({concerts, userNotes, setUserNotes, tickets, setTickets, user, setUser}) => {

const navigate = useNavigate()

const [editClicked, setEditClicked] = useState(false)
const [editText, setEditText] = useState('')
const [deleteMessage, setDeleteMessage] = useState('')

const params = useParams()
const ticketId = Number(params.id)

const filterTickets = tickets.filter(item => item.id === ticketId)
const ticket = filterTickets[0]

if (ticket) {
   const concertarray = concerts.filter(item => item.id === ticket.concert_id)
   const solution = (concertarray[0])
   var concert = solution
}

useEffect(() => {
    if (ticket) {
    setUserNotes(ticket.user_notes)
    }
}, [ticket])

const handleUpdate = (e) => {
    e.preventDefault()
    fetch(`/api/tickets/${params.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_notes: editText
        })
        })
        .then(r => r.json())
        .then(data => {
            setUserNotes(data.user_notes)
            const old = tickets.find(x => x.id === data.id)
            const array = tickets.map(t => t)
            array.splice(array.findIndex(s => s === old), 1)
            array.push(data)
            const updateTickets = array.map(t => t)
            setTickets(updateTickets)
        })
    setEditText('')
}

const handleDelete = () => {
    fetch(`/api/tickets/${params.id}`, {
        method: 'DELETE',
    })
    .then(r => r.json())
    .then(data => {
        const ticketArray = tickets.map(t => t.id)
        const index = ticketArray.indexOf(data.id)
        ticketArray.splice(index, 1)
        const finalArray = tickets.filter(s => s.id !== data.id)
        const newTickets = finalArray.map(t => t)
        setTickets(newTickets)
        setDeleteMessage(`Ticket #${params.id} Deleted!`)
        setTimeout(() => {
            navigate('/my_tickets')
        }, 2000)
    })
}

  return (
    <div>
        <Navigation user={user} setUser={setUser} />
        <ThemeProvider theme={theme}>
            <main>
                <Box
                sx ={{
                    bgcolor: 'background.paper',
                    marginTop: 6,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                >
                {deleteMessage &&
                <Container maxWidth="m">
                    <Typography variant="h5" align="center">
                    {deleteMessage}
                    </Typography>
                </Container>
                }
                {concert && 
                <Container maxWidth="m">
                <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
                >
              Ticket #{ticketId} for {concert.title}
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary">
                {concert.date}
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary">
                {concert.description}
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary">
                 ${concert.price}
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary">
                Notes: {userNotes}
                </Typography>
                <Typography sx={{ mt: 2 }} display="flex" justifyContent="center" gap={.25}>
                    <Button variant="contained" onClick={() => setEditClicked(true)}>Edit User Notes</Button>
                    <Button variant="contained" onClick={handleDelete}>Delete Ticket</Button>
                </Typography>
                </Container>
                }
                 {editClicked && 
                <Container maxWidth="m">
                    <Typography variant="h5" align="center" color="text.secondary" sx={{ mt: 3 }}>
                    Edit note: '{userNotes}':
                    </Typography>
                    <Box component="form" onSubmit={handleUpdate}>
                    <Typography align="center">
                    <TextField
                    margin="normal"
                    id="note"
                    label="Note"
                    name="note"
                    autoComplete="note"
                    autoFocus
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    />
                    </Typography>
                    <Typography align="center">
                    <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3 }}
                    >
                    Submit
                    </Button>
                    </Typography>
                    </Box>
                </Container>
                }
                </Box>
            </main>
        </ThemeProvider>
    </div>
  )
}

export default TicketDetails