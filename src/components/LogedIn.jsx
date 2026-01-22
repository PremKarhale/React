import { useState } from "react";

function loggedIn(){
    const [islogedin , setislogedin]=useState(false)

    const toggle =()=>{
        setislogedin(!islogedin)
    }
    return (
    <>
    <div>
    <h3>islogedin:log out to dashboard : login to dashboard</h3>
    <button onClick={toggle}>{islogedin ? Logout : Login}</button>
    </div>
    </>
    )
}
export default loggedIn