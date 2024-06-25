import { useState } from 'react'
import './App.css'
import TabButton from './components/TabButton'

function App() {
  const [count, setCount] = useState(0)

  function handleFunction(){
    console.log("clicked");
  }

  return (
    <>
      <TabButton selectFunc={handleFunction} > Button Name </TabButton>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
