import { useState } from "react";
function Todo(){
    const [text , settext] = useState("")
    // function handlechange(e){
    //     settext(e.target.value)
    // }
    const [todo,settodo] = useState([])
    function handleAdd(){
         if (text.trim()==="") return ;
        settodo([...todo,text])
        settext("")
    }
    return (
    <>
    <h1>Todo list</h1>
    <input onChange={(e)=>(settext(e.target.value))}
    style={{padding:"20px" ,borderRadius:"20px"}}
    value={text}
    type="text" 
    placeholder="Enter your todo" />

    <button onClick={handleAdd} style={{marginLeft:"20px",background:"teal"}}>Add todo</button>
    <ul>
        {todo.map((el,index)=>(
            <li key={index}>{el}</li>
        ))}
    </ul>
    </>
    )
}
export default Todo
