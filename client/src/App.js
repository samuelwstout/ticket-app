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
const [concerts, setConcerts] = useState([])

useEffect(() => {
    fetch('/api/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage user={user} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/concerts" element={<Concerts setUser={setUser} user={user} setConcerts={setConcerts} concerts={concerts} />} />
        <Route path="/create_concert" element={<CreateConcert setUser={setUser} user={user} setConcerts={setConcerts} concerts={concerts} />} />
        <Route path="/my_tickets" element={<MyTickets setUser={setUser} user={user} />} />
      </Routes>
    </Router>
  )

}

export default App;