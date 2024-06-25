import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

 

  return (
    <>
      <button 
      style={{background : 'blue', color: 'yellow'}}
      onClick={() =>  setCount( (count) => count + 1)}
      >
        Count : {count}
      </button>
    </>
  )
}

export default App

// function App() {
//   const [count, setCount] = useState(0)

//   function handleClick(){
//      setCount(count + 1);
//   }

//   return (
//     <>
//       <button 
//       style={{background : 'blue', color: 'yellow'}}
//       onClick={handleClick}
//       >
//         Count : {count}
//       </button>
//     </>
//   )
// }

// export default App
