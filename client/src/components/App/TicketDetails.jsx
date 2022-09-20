import {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const TicketDetails = ({user, concerts, userNotes, setUserNotes}) => {

const navigate = useNavigate()

const [editClicked, setEditClicked] = useState(false)
const [editText, setEditText] = useState('')

const params = useParams()
const ticketId = Number(params.id)

if (user && concerts) {
    var ticket = user.tickets.filter(item => item.id === ticketId)
    var concertId = ticket[0].concert_id
    var concertFilter = concerts.filter(item => item.id === concertId)
    var concert = concertFilter[0]
}

useEffect(() => {
    setUserNotes(ticket[0].user_notes)
}, [])

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
    .then(res => {
        if(res.ok) {
            console.log(res)
            alert(`Ticket #${params.id} Deleted!`)
            setTimeout(() => {
                navigate('/')
            }, 1000)
        } else {
            res.json().then(console.log)
        }
    })
}

  return (
    <div>
        <div>
            {concert && 
            <h1>Ticket #{ticketId} for {concert.title}</h1>
            }
            {userNotes && 
            <h2>{userNotes}</h2>
            }           
            {concert && 
            <div>
                <h2>{concert.date}</h2>
                <h2>{concert.description}</h2>
                <h2>${concert.price}</h2>
            </div>
            }
            <button onClick={() => setEditClicked(true)}>Edit User Notes</button>
            <button onClick={deleteRequest}>Delete ticket</button>
        </div>
        {editClicked && 
        <div>
            <h3>Edit note: '{userNotes}':</h3>
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