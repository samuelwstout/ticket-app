import Navigation from "../Navigation"
import { useNavigate } from "react-router-dom"

const MyTickets = ({setUser, user, tickets}) => {

console.log(user)

const navigate = useNavigate()

  return (
    <div>
      <Navigation setUser={setUser} user={user} />
      <h1>Tickets here</h1>
      {tickets.map(item => {
        return (
          <div key={item.id}>
            <h2>Ticket #{item.id}</h2>
            <button onClick={() => {
              return navigate(`/ticket/${item.id}`)
            }}>Ticket details</button>
          </div>
        )
      })}
    </div>
  )
}

export default MyTickets