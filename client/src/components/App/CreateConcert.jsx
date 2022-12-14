import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Navigation from '../Navigation'
import { Box, Typography, TextField, Button } from '@mui/material'

const CreateConcert = ({ setUser, user, setConcerts, concerts }) => {

  const navigate = useNavigate()

  useEffect(() => {
    if (user === null) {
      navigate('/')
    }
  }, [])

  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/api/concerts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        date,
        description,
        price
      })
    })
      .then(res => {
        if (res.ok) {
          res.json().then(data => {
            setConcerts([...concerts, data])
            setTitle('')
            setDate(null)
            setDescription('')
            setPrice('')
          })
        } else {
          res.json().then(errors => {
            console.error(errors)
          })
        }
      })
  }

  return (
    <>
        <Navigation setUser={setUser} user={user} />
          <main>
          <Box
            sx={{
              bgcolor: 'background.paper',
              marginTop: 6,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Create Concert
              </Typography>

            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="title"
                  label="Title"
                  name="title"
                  autoComplete="title"
                  autoFocus
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                name="Date"
                label="Date"
                InputLabelProps={{ shrink: true, required: true }}
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="description"
                  label="Description"
                  name="description"
                  autoComplete="description"
                  autoFocus
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="price"
                  label="Price"
                  name="price"
                  autoComplete="price"
                  autoFocus
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                
            <Typography align="center">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
            </Typography>
            </Box>
          </Box>
          </main>
    </>
  )
}

export default CreateConcert