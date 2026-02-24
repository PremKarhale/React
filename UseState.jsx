import { useState } from "react";

function State(){
    const[count , setcount]=useState(0)
    function increment(){
        setcount(count+1)

    }
    function decrement(){
        setcount(count-1)
    }

    return (
    <>
    <h1>count:{count}</h1>
    <button onClick={increment}>increment</button>
    <button style={{marginLeft:"20px"}} onClick={decrement}>decrement</button>
    </>
    )
}

export default State