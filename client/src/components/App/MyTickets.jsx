import Navigation from "../Navigation"
import { useNavigate } from "react-router-dom"

const MyTickets = ({setUser, user}) => {

const navigate = useNavigate()

if (user) {
var tickets = user.tickets.map(item => {
  return (
    <div key={item.id}>
      <h2>Ticket #{item.id}</h2>
      <h2>Notes: {item.user_notes}</h2>
      <button onClick={() => {
        return navigate(`/ticket/${item.id}`)
      }}>Ticket details</button>
      <h2>----------</h2>
    </div>
  )
})
}

  return (
    <div>
      <Navigation setUser={setUser} user={user} />
      <h1>Tickets here</h1>
      {tickets}
    </div>
  )
}

export default MyTickets