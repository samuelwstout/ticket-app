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

    </div>
  )
}

export default MyTickets