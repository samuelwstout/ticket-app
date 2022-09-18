import Navigation from "../Navigation"

const MyTickets = ({setUser, user}) => {
 


  return (
    <div>
      <Navigation setUser={setUser} user={user} />
      <h1>Tickets here</h1>
    </div>
  )
}

export default MyTickets