import React, { useEffect, useState } from 'react'

const Counter = () => {

    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)

    useEffect(() =>{
        console.log(`Primeiro useEffect`)
    }, [counter1, counter2])

    // useEffect(() =>{
    //     console.log(`Segundo useEffect`)
    // }, [counter2])

  return (
    <div>
        <button onClick={() => setCounter1(counter1+1)}>1. Counter {counter1}</button>
        <button onClick={() => setCounter2(counter2+1)}>2. Counter {counter2}</button>
    </div>
  )
}

export default Counter