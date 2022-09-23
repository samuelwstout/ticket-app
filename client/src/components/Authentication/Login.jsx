import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = ({setUser, setTickets, setUserId}) => {

  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

    // Login user
    const handleLogin = (event) => {
      event.preventDefault()
      fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
      })
        .then(res => {
          if (res.ok) {
            res.json().then(user => {
              setUser(user)
              setUserId(user.id)
              navigate('/concerts')
              setTickets(user.tickets)
            })
          } else {
            res.json().then(errors => {
              setError(errors.error)
            })
          }
        })
    }
  
  console.log('we are on the develop branch')

  return (
    <div>
      <form onSubmit={handleLogin}>
          <h1>Log In</h1>
          {error !== '' && 
          <h4>{error}</h4>
        }
        <p>
          <label htmlFor="username">Username </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="password">Password </label>
          <input
            type="password"
            name=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
          <input type='submit' value='Login' />
        </form>

        <h4>Don't have an account? <button><Link to="/signup">Sign up</Link></button></h4>
    </div>
  )
}

export default Login