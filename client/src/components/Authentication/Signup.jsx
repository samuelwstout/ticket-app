import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = ({ setUser, setTickets, setUserId}) => {

  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  // Create user
  const handleSubmit = (e) => {
    e.preventDefault()
    
    fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation
      })
    })
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            setUser(user)
            setUserId(user.id)
            setTickets(user.tickets)
            navigate('/concerts')
          })
        } else {
          res.json().then(errors => {
            console.error(errors)
          })
        }
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
          <h1>Sign up</h1>
          <p>
            <label htmlFor='username'>Username </label>
            <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </p>
          <p>
            <label htmlFor='password'>Password </label>
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </p>
          <p>
          <label htmlFor='password_confirmation'>Password Confirmation </label>
          <input type="password" name="password_confirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
          </p>
            <input type='submit'></input>
        </form>
        <h4>Already have an account? <button><Link to="/login">Log in</Link></button></h4>
    </div>
  )
}

export default Signup