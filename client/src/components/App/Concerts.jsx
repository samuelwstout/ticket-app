import Navigation from "../Navigation"
import React, { useState, useEffect } from 'react'

const Concerts = ({setUser, user, setConcerts, concerts, userId}) => {
  
  const [createTicket, setCreateTicket] = useState(null)
  const [open, setOpen] = useState(false)
  const [notes, setNotes] = useState('')

// Read all concerts
useEffect(() => {
    fetch('/api/concerts')
      .then(r => r.json())
      .then(data => setConcerts(data))
  }, [setConcerts])

// Create ticket
useEffect(() => {
  if (createTicket !== null) {
  fetch('/api/tickets', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user_id: userId,
      concert_id: createTicket.id,
      title: createTicket.title,
      date: createTicket.date,
      description: createTicket.description,
      price: createTicket.price,
      user_notes: notes
    })
  })
  .then(r => r.json())
  .then((data) => {
      console.log(data)
  })}
}, [createTicket, userId, notes])


  return (
    <div>
      <Navigation setUser={setUser} user={user} />
      {concerts.map(concert => {
      return (
        <div key={concert.id}>
          <h2>{concert.title}</h2>
          <h2>{concert.date}</h2>
          <h2>{concert.description}</h2>
          <h2>Ticket price: ${concert.price}</h2>
          <p><button onClick={() => setOpen(true)}>Buy ticket?</button></p>
          {open &&
            <form onSubmit={(e) => {
              e.preventDefault();
              setCreateTicket(concert)
            }}>
              <label htmlFor='notes'>Notes: </label>
              <input type='text' value={notes} onChange={(e) => setNotes(e.target.value)} name='notes' />
              <input type='submit' value='Buy ticket' />
            </form>
          }
        </div>
      )})}
    </div>
  )
}

export default Concerts