import React, { useState } from 'react'

function Register({login = false}) {
    const [islogedIn , setislogedIN]=useState(login)

    const handleEvent =()=>{
        if (islogedIn){
            alert("Logout Sucessfully")
        }else{
            alert("Longin Sucessfully")
        }

        setislogedIN(!islogedIn)
    }
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center", height:"50vh"}}>
        {
         islogedIn ? (
            <div>
                <button onClick={handleEvent} style={{fontSize:"45px", backgroundColor:"red" , color:"white",padding:"5px",borderRadius:"6px"}  }>Logout</button>
            </div>
         ):(
            <div>
                <button onClick={handleEvent} style={{fontSize:"45px", backgroundColor:"green" , color:"white",padding:"5px",borderRadius:"6px"}  } >Login</button>
            </div>
         )
        }
    </div>
  )
}

export default Register
