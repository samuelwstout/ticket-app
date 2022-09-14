import { Link, useNavigate } from 'react-router-dom'

const Navigation = ({setUser, user}) => {

const navigate = useNavigate();

const handleLogout = () => {
    fetch('/api/logout', {
      method: 'DELETE',
      credentials: 'include'
    })
    .then(res => {
      if (res.ok) {
        setUser(null)
        navigate('/')
      }
    })
  }

  return (
    <div>
        { user &&
            <h1>{user.username}</h1>
        }
        <li><Link to="/concerts">Concerts</Link></li>
        <li><Link to="/create_concert">Create Concert</Link></li>
        <li><Link to="/my_tickets">My Tickets</Link></li>
        <p><button onClick={handleLogout}>Logout</button></p>
    </div>
  )
}

export default Navigation