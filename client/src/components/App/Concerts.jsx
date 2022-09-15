import Navigation from "../Navigation"
import React, { useState, useEffect } from 'react'

const Concerts = ({setUser, user, setConcerts, concerts}) => {

  const [concertId, setConcertId] = useState(null)
  const [res, setRes] = useState(false)

  useEffect(() => {
    fetch('/api/concerts')
      .then(r => r.json())
      .then(concerts => setConcerts(concerts))
  }, [])

if (concertId) {
  fetch('/api/tickets', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user_id: user.id,
      concert_id: concertId
    })
  })
  .then(r => r.json())
  .then((data) => {
   setRes(true)
   console.log(data)
  })
}

  return (
    <div>
      {res && <h1>Hey you bought a ticket</h1>}
      <Navigation setUser={setUser} user={user} />
      {concerts.map(concert => {
      return (
        <div key={concert.id}>
          <h2>{concert.title}</h2>
          <h2>{concert.date}</h2>
          <h2>{concert.description}</h2>
          <h2>Ticket price: ${concert.price}</h2>
          <button onClick={() => setConcertId(concert.id)}>Buy ticket</button>
        </div>
      )})}
    </div>
  )
}

export default Concerts