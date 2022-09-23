import {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

const LandingPage = ({user}) => {

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/concerts')
    }
  }, [user, navigate])

  return (
    <div>
        <h1>Phase 4 Project</h1>
        <h3>a concert ticket app</h3>
        <ButtonGroup
          disableElevation
          variant="contained"
          aria-label="Disabled elevation buttons"
        >
          <Button><Link to="/login">Login</Link></Button>
          <Button><Link to="/signup">Sign up</Link></Button>
        </ButtonGroup>
    </div>
  )
}

export default LandingPage