import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const TicketCreate = ({concertId, userId, concerts}) => {

const [userNotes, setUserNotes] = useState('')
const [ticketId, setTicketId] = useState(null)

const navigate = useNavigate()

// I grab concert info from concertId

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
                })
            }
        })
    setUserNotes('')
}


  return (
    <div>
        <button onClick={() => navigate('/')}>Back</button>
        <h1>Buy a ticket to {concert.title}</h1>
        <h2>Date: {concert.date}</h2>
        <h2>Description: {concert.description}</h2>
        <h2>${concert.price}</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor='user_notes'>You can leave a note if you'd like: </label>
            <input type='text' name='user_notes' value={userNotes} onChange={(e) => setUserNotes(e.target.value)} />
            <input type='submit' />
        </form>
        {ticketId !== null &&
        <div>
            <h1>You bought ticket #{ticketId} to {concert.title}!</h1>
        </div>
        }
    </div>
  )
}

export default TicketCreate