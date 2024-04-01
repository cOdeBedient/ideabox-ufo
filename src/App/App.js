import './App.css';
import Form from '../Form/Form'
import UFOs from '../UFOs/UFOs'
import { useState, useEffect } from 'react'

function App() {
const [sightings, setSightings] = useState([]);

useEffect(() => {
  fetch('http://localhost:3001/sightings')
  .then(response => response.json())
  .then(data => setSightings(data))
}, []) 

function addSighting(location, description) {
  setSightings((prev) => {
    const newSighting = {
      id: Date.now(),
      location,
      description
    }

    console.log({newSighting})

    return [...prev, newSighting]
  })
}

  return (
    <main>
      <Form addSighting={addSighting}/>
      <UFOs sightings={sightings} />
    </main>
  );
}

export default App;
