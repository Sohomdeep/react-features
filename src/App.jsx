import { useState } from 'react'
import './App.css'
import NavBar from './assets/components/NavBar'
import Data from './assets/components/Data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Data name={"Sohom" + " Deep" } address="Kolkata" />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
