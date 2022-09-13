import {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LandingPage = ({user}) => {

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/concerts')
    }
  }, [user])

  return (
    <div>
        <h1>Phase 4 Project</h1>
        <h3>a concert ticket app</h3>
        <button><Link to="/login">Login</Link></button>
        <button><Link to="/signup">Sign up</Link></button>
    </div>
  )
}

export default LandingPage