import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Authentication/Login';
import Signup from './components/Authentication/Signup';
import LandingPage from './components/LandingPage';
import Concerts from './components/App/Concerts';
import CreateConcert from './components/App/CreateConcert';
import MyTickets from './components/App/MyTickets';


const App = () => {

const [user, setUser] = useState(null)
const [userId, setUserId] = useState()
const [concerts, setConcerts] = useState([])
const [tickets, setTickets] = useState([])

// Read current user
useEffect(() => {
    fetch('/api/me').then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          console.log(data.tickets)
          setUser(data)
          setUserId(data.id)
        })
      }
    })
  }, [setUser, setUserId])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage user={user} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/concerts" element={<Concerts setUser={setUser} user={user} setConcerts={setConcerts} concerts={concerts} userId={userId} />} />
        <Route path="/create_concert" element={<CreateConcert setUser={setUser} user={user} setConcerts={setConcerts} concerts={concerts} />} />
        <Route path="/my_tickets" element={<MyTickets setUser={setUser} user={user} userId={userId} concerts={concerts} />} />
      </Routes>
    </Router>
  )

}

export default App;