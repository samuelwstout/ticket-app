import Navigation from "../Navigation"
import React, { useState, useEffect } from 'react'

const Concerts = ({setUser, user, setConcerts, concerts, userId}) => {
  
  const [concertId, setConcertId] = useState(null)

useEffect(() => {
    fetch('/api/concerts')
      .then(r => r.json())
      .then(data => setConcerts(data))
  }, [setConcerts])

useEffect(() => {
  // Before this conditional, this was running a post request with null values on EVERY rerender because there's always a userId. 
  if (concertId) {
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
      console.log(data)
  })}
}, [concertId, userId])

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
          <p><button onClick={() => setConcertId(concert.id)}>Buy ticket</button></p>
        </div>
      )})}
    </div>
  )
}

export default Concerts