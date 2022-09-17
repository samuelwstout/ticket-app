import {useState, useEffect} from 'react'
import Navigation from "../Navigation"

const MyTickets = ({setUser, user, userId}) => {
 
  const [tickets, setTickets] = useState([])
  const [deleteId, setDeleteId] = useState()
  const [editText, setEditText] = useState('')
  const [editId, setEditId] = useState()

  useEffect(() => {
    if (userId) {
    fetch('/api/tickets')
    .then(res => res.json())
    .then(res => setTickets(res.filter(ticket => ticket.user_id === userId)))
    }
  }, [setTickets, userId])

  useEffect(() => {
    if (deleteId !== undefined) {
      fetch(`/api/tickets/${deleteId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(r => r.json())
      .then(data => console.log(data))
    }
  }, [deleteId])

  useEffect(() => {
  if (editId !== undefined) {
    fetch(`/api/tickets/${editId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_notes: editText
      })
    })
    .then(r => r.json())
    .then(data => console.log(data))
  }
  }, [editId, editText])

  return (
    <div>
      <Navigation setUser={setUser} user={user} />
      {tickets.map(ticket => {
        return (
          <div key={ticket.id}>
            <h3>Ticket: {ticket.title}</h3>
            <ul>
              <li>Ticket number: {ticket.id}</li>
              <li>{ticket.date}</li>
              <li>{ticket.description}</li>
              <li>${ticket.price}</li>
              <li>{ticket.user_notes}</li> 
              <li><form onSubmit={(e) => {
                e.preventDefault()
                setEditId(ticket.id)
              }}><label>To edit user notes: </label><input type='text' onChange={(e) => setEditText(e.target.value)} /> <input type='submit' /></form></li>
              <li><button onClick={() => setDeleteId(ticket.id)}>Delete</button></li>
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default MyTickets