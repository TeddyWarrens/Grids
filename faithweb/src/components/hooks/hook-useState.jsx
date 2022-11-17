
import React,{useState} from 'react'

const Hooky = () => {
    const [count,setCount]= useState(0);

    const increment =()=>{
      
        if(count<=10){
          setCount(count+1)
        }
        else{
          setCount(0)
        }
        
    }
  return (
    <div>
        
        <h1>{count}</h1>
        <button onClick={increment}>increment</button>
       
        
    </div>
  )
}

export default Hooky