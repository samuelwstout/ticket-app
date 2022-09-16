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

// Result: Get the concert objects with ids that equal the ticket.concert_id's.
// First, find access to all the concerts in this file. (concerts)
// What do I need from concerts?
// A: the concerts with ids that coalign with the concert_ids from tickets
// I will try to find or filter concerts that align concert_id and id

concerts = concerts.filter((concert) => {
  const concertIds = (tickets.map(t => t.concert_id))
  for (let i = 0; i < concertIds.length; i++) {
    console.log(i)
  }
  return console.log('return here')
})






  return (
    <div>
      <Navigation setUser={setUser} user={user} />

    </div>
  )
}

export default MyTickets