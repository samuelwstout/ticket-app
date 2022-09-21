import {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Navigation from '../Navigation'

const TicketDetails = ({concerts, userNotes, setUserNotes, tickets, setTickets, user, setUser}) => {
console.log(user)

const navigate = useNavigate()

const [editClicked, setEditClicked] = useState(false)
const [editText, setEditText] = useState('')
const [concert, setConcert] = useState([])

const params = useParams()
const ticketId = Number(params.id)

// useEffect(() => {
//     const filterTickets = tickets.filter(item => item.id === ticketId)
//     const ticket = filterTickets[0]
//     const filterConcert = concerts.filter(item => item.id === ticket.concert_id)
//     const concert = filterConcert[0]
//     setConcert(concert)
//     setUserNotes(ticket)
//     }, [])



const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`/api/tickets/${params.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_notes: editText
        })
        })
        .then(r => r.json())
        .then(data => {
            setUserNotes(data.user_notes)
        })
    setEditText('')
}

const deleteRequest = () => {
    fetch(`/api/tickets/${params.id}`, {
        method: 'DELETE',
    })
    .then(r => r.json())
    .then(data => {
        console.log(data)
        alert(`Ticket #${params.id} Deleted!`)
        setTimeout(() => {
            navigate('/')
        }, 1000)
    })
}

  return (
    <div>
        <Navigation user={user} setUser={setUser} />
        <div>
            {/* <h1>Ticket #{ticketId} for {concert.title}</h1>
            <h2>Notes: {userNotes}</h2>
            <div>
                <h2>{concert.date}</h2>
                <h2>{concert.description}</h2>
                <h2>${concert.price}</h2>
            </div> */}
            <button onClick={() => setEditClicked(true)}>Edit User Notes</button>
            <button onClick={deleteRequest}>Delete ticket</button>
        </div>
        {editClicked && 
        <div>
            {/* <h3>Edit note: '{userNotes}':</h3> */}
            <form onSubmit={handleSubmit}>
                <input type='text' value={editText} onChange={(e) => setEditText(e.target.value)} />
                <input type='submit' />
            </form>
        </div>
        }
    
    </div>
  )
}

export default TicketDetails