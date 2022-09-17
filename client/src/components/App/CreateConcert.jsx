import {useState} from 'react'
import Navigation from "../Navigation"


const CreateConcert = ({setUser, user, setConcerts, concerts}) => {

const [title, setTitle] = useState('')
const [date, setDate] = useState('')
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
      <form onSubmit={handleSubmit}>
        <h2>Create Concert</h2>
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
      </form>
    </div>
  )
}

export default CreateConcert