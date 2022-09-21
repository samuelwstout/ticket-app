import Navigation from "../Navigation"
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Concerts = ({setUser, user, setConcerts, concerts, setConcertId, concertId}) => {
  console.log(user)
  
  const navigate = useNavigate()

// Read all concerts
useEffect(() => {
    fetch('/api/concerts')
      .then(r => r.json())
      .then(data => setConcerts(data))
  }, [setConcerts])

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
          <p><button onClick={() => {
            setConcertId(concert.id)
            navigate('/create_ticket')
          }}>Buy ticket?</button></p>
        </div>
      )})}
    </div>
  )
}

export default Concerts