import { useState } from 'react'
import './App.css'
import NavBar from './assets/components/NavBar'
import Data from './assets/components/Data'
import Button from './assets/components/Button'
import List from './assets/components/List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />

      <Data name={"Sohom" + " Deep" } address="Kolkata" />

      <Button>Submit</Button>

      <List>
        <li>List 1</li>
        <li>List 2</li>
        <li>List 3</li>
      </List>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
