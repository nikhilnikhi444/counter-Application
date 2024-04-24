import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment,reset } from '../redux/counterSlice'

function Counter() {
    const [range,setRange] = useState("")
    console.log(range);
    // innorder to access the function/action - call - useDispatch()
    const dispatch= useDispatch()
    // innordesr to access the state - useSelector()
   const count= useSelector((state)=>state.counterReducer.value)
  return (
    <div className='mt-5 d-flex justify-content-center align-items-center flex-column w-100'>
         <h1 style={{fontSize:'70px'}}>{count}</h1>


         <div className='d-flex mt-5 justify-content-evenly w-75'>
            <button className='btn btn-success p-3' onClick={()=>dispatch(increment(Number(range))) }>Increament</button>
            <button className='btn btn-danger p-3' onClick={()=>dispatch(reset()) } >Reset</button>
            <button className='btn btn-warning p-3' onClick={()=>dispatch(decrement(Number(range))) } >decrement</button>
         </div>
         <div className='mt-5 w-100'>
           <input type="text" placeholder='Enter the range' className='form-control' onChange={(e)=>setRange(e.target.value)} />
         </div>
    </div>
  )
}

export default Counter