import Navigation from "../Navigation"
import React, { useState, useEffect } from 'react'

const Concerts = ({setUser, user}) => {


  const [concerts, setConcerts] = useState([])

  useEffect(() => {
    fetch('/api/concerts')
      .then(r => r.json())
      .then(concerts => setConcerts(concerts))
  }, [])


  return (
    <div>
      <Navigation setUser={setUser} user={user} />
      {concerts.map(concert => {
      return (
        <div key={concert.id}>
          <h2>{concert.title}</h2>
          <h2>{concert.date}</h2>
          <h2>{concert.description}</h2>
          <h2>Insert ticket price</h2>
          <button>Buy ticket</button>
        </div>
      )})}
    </div>
  )
}

export default Concerts