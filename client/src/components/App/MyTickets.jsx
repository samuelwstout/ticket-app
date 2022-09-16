import {useState, useEffect} from 'react'
import Navigation from "../Navigation"

const MyTickets = ({setUser, user, userId, concerts}) => {
 
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    if (userId) {
    fetch('/api/tickets')
    .then(res => res.json())
    .then(res => setTickets(res.filter(ticket => ticket.user_id === userId)))
    }
  }, [setTickets, userId])

  

  return (
    <div>
      <Navigation setUser={setUser} user={user} />
      {tickets.map(ticket => {
        return (
          <div key={ticket.id}>
            <h3>Ticket: {ticket.title}</h3>
            <ul>
              <li>{ticket.date}</li>
              <li>{ticket.description}</li>
              <li>${ticket.price}</li>
              <li>{ticket.user_notes}</li>
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default MyTickets