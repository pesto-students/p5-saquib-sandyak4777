import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ToDo from './ToDo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hello world</h1>
      <ToDo />
    </div>
  )
}

export default App
