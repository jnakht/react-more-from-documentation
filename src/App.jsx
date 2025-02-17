import { useState } from 'react'
import './App.css'

function App() {
  const [names, setName] = useState([]);

  const [singleName, setSingleName] = useState('');
  const handleSubmit = (name) => {
    const newNames = [...names, name];
    setName(newNames);
  }
  return (
    <>
      
      <h1>React More From Documentation</h1>
      <h3>Inspiring Sculptors: </h3>
      <input 
        type="text"
        value={singleName}
        onChange={e => setSingleName(e.target.value)}
        />
        <button onClick={() => handleSubmit(singleName)}>Submit</button>
      <ul>
          {
            names.map(name => <li>{name}</li>)
          }
      </ul>
    </>
  )
}

export default App
