import Navigation from "../Navigation"
import React, { useState, useEffect } from 'react'

const Concerts = ({setUser, user, setConcerts, concerts, userId}) => {
  
  const [concertId, setConcertId] = useState(null)
  const [res, setRes] = useState(false)

  useEffect(() => {
    fetch('/api/concerts')
      .then(r => r.json())
      .then(data => setConcerts(data))
  }, [setConcerts])

  
useEffect(() => {
  fetch('/api/tickets', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user_id: userId,
      concert_id: concertId
    })
  })
  .then(r => r.json())
  .then((data) => {
   setRes(true)
   console.log(data)
  })
}, [concertId, userId])

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
          <p onClick={handleClick}><button onClick={() => setConcertId(concert.id)}>Buy ticket</button></p>
        </div>
      )})}
    </div>
  )
}

export default Concerts