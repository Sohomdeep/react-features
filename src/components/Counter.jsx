import { useState } from 'react'

const Counter = () => {

    const [counter, setCounter] = useState(0)

    return (
        <>
            <button onClick={ () => setCounter( (counter) => counter - 1) }>-</button>
             New Counter : {counter} 
            <button onClick={ () => setCounter( (counter) => counter + 1) }>+</button>
        </>
    )
}

export default Counter