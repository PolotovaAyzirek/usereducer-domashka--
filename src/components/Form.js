import React, { useReducer, useState } from 'react'

const validateReducer=(state,action)=>{
    console.log(action);
    if(action.key==="NAME"){
        return {
            ...state,
            isName: action.value.includes("@")
        }
    }
    return state
}

const Form = () => {
    // const [name, setName] = useState("")
    // const [isName, setIsName] = useState(null)
    // console.log(isName);
    // const nameHandler=(e)=>{
    //     setIsName(e.target.value.includes("@"))
    // }

    const [name, dispatchName] = useReducer(validateReducer,{
        name: "",
        isName: null
    })
    console.log(name);
    const nameHandler =(e)=>{
        dispatchName({key:"NAME", value: e.target.value})
    }
   

    const style = {
        outline: "none",
        border: name.isName===false ? "1px solid red" : ""
    }
  return (
    <div>
      <input style={style}  onChange={nameHandler} type="text" />
      <button>ADD</button>
    </div>
  )
}

export default Form
