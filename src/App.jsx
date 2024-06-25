import { useState } from 'react'
import './App.css'
import NavBar from './assets/components/NavBar'
import Data from './assets/components/Data'
import Button from './assets/components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />

      <Data name={"Sohom" + " Deep" } address="Kolkata" />

      <Button>Submit</Button>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
