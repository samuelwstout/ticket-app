import Navigation from "../Navigation"
import { useNavigate } from 'react-router-dom'

const Concerts = ({setUser, user, concerts}) => {

const navigate = useNavigate()

if (concerts !== []) {
var concertList = concerts.map(item => {
  return (
    <div key={item.id}>
      <h2>{item.title}</h2>
      <h2>{item.date}</h2>
      <h2>{item.description}</h2>
      <h2>Ticket price: ${item.price}</h2>
      <p><button onClick={() => navigate(`/concert/${item.id}/create_ticket`)}>Buy ticket</button></p>
    </div>
  )
})
}

  return (
    <div>
      <Navigation setUser={setUser} user={user} />
      {concerts !== [] &&
      concertList
      }
    </div>
  )
}

export default Concerts