import Navigation from "../Navigation"
import React, { useState, useEffect } from 'react'

const Concerts = ({setUser, user, setConcerts, concerts, userId}) => {
  
  const [concertFetch, setConcertFetch] = useState(null)
  const [open, setOpen] = useState(false)
  const [notes, setNotes] = useState('')

useEffect(() => {
    fetch('/api/concerts')
      .then(r => r.json())
      .then(data => setConcerts(data))
  }, [setConcerts])

useEffect(() => {
  if (concertFetch !== null) {
  fetch('/api/tickets', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user_id: userId,
      concert_id: concertFetch.id,
      title: concertFetch.title,
      date: concertFetch.date,
      description: concertFetch.description,
      price: concertFetch.price,
      user_notes: notes
    })
  })
  .then(r => r.json())
  .then((data) => {
      console.log(data)
  })}
}, [concertFetch, userId, notes])


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
              setConcertFetch(concert)
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