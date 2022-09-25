import {useState} from 'react'
import Navigation from "../Navigation"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const theme = createTheme();

const CreateConcert = ({setUser, user, setConcerts, concerts}) => {

const [title, setTitle] = useState('')
const [date, setDate] = useState<Dayjs | null>(null);
const [description, setDescription] = useState('')
const [price, setPrice] = useState('')

// Create concert
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
          setDate('')
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
    <div>
      <Navigation setUser={setUser} user={user} />
      <ThemeProvider theme={theme}>
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
             <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
               label="Date"
               value={date}
               onChange={(e) => setDate(e.target.value)}
               renderInput={(params) => <TextField {...params} />}
              />
             </LocalizationProvider>
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
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              fullWidth
            >
              Submit
            </Button>
          </Box>
      </Box>
      </main>
      </ThemeProvider>
    </div>
  )
}

export default CreateConcert

{/* <form onSubmit={handleSubmit}>
<p>
  <label htmlFor='title'>Title </label>
  <input type='text' name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
</p>
<p>
  <label htmlFor='date'>Date </label>
  <input type='date' name='date' value={date} onChange={(e) => setDate(e.target.value)} />
</p>
<p>
  <label htmlFor='description'>Description </label>
  <input type='text' name='description' value={description} onChange={(e) => setDescription(e.target.value)} />
</p>
<p>
  <label htmlFor='price'>Price </label>
  <input type='number' name='price' value={price} onChange={(e) => setPrice(e.target.value)} />
</p>
<input type='submit'></input>
</form> */}