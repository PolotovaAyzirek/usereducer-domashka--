import React, { useReducer, useState } from 'react'

const counterReducer = (state, action) =>{
    console.log(action);
    if(action==="PLUS"){
        return state+1
    }
    if(action==="MINUS"){
        return state - 1
    }
    return state
}


const Counter = () => {
    // const [counter, setCounter] = useState(0)
    const [num, dispatchNum] = useReducer(counterReducer, 0) // 2
    console.log(num);
    const plus=()=>{
        dispatchNum("PLUS")
    }
    const minus=()=>{
        dispatchNum("MINUS")
    }
  

  return (
    <div>
      <button onClick={plus}>+</button>
      <h1>{num}</h1>
      <button onClick={minus}>-</button>
    </div>
  )
}

export default Counter
