import React, { useEffect, useState } from 'react'



function UseEffect() {

    const [count , setcont ] = useState(0)
    const [text , settext] = useState("")

 // triggers only at the time of a page load or when dependency is called 
 // put state values in the dependency array , get triggered when state val changes
    useEffect(()=>{
        // api logic
        console.log("i am calling")
        console.log({text})
    },[count ,text]) 

  return (
    <div className="min-h-screen flex items-center justify-center">
  <div className="p-8 rounded-xl bg-amber-200 text-center shadow-lg">
    
    <h1 className="px-6 py-3 bg-green-400 text-2xl font-semibold rounded mb-6">
      Count: {count}
    </h1>

    <div className="flex gap-4 justify-center">
      <button
        className="px-6 py-3 bg-green-400 text-xl rounded hover:bg-green-500 transition"
        onClick={() => setcont(count + 1)}
      >
        Increment
      </button>

      <button
        className="px-6 py-3 bg-green-400 text-xl rounded hover:bg-green-500 transition"
        onClick={() => setcont(count - 1)}
      >
        Decrement
      </button>
      
    </div>
    <input onChange={(e)=>{settext(e.target.value)}} className='m-3 bg-blend-darken p-2 text-center' type="text " placeholder='Enter Text' />


  </div>
</div>

  )
}

export default UseEffect
