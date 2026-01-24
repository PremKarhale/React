import './App.css'
import Card from "./components/ArticleCard"
import UserCard from './components/userCard'
import Colorpalate from './components/Colorpalate'
import Todo from './Todo.jsx'
import { Link, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Product from './Pages/Product.jsx'
import Profile from './Pages/Profile.jsx'
import Contact from './Pages/Contact.jsx'
import NotFound from './Pages/NotFound.jsx'
import Register from './Pages/Register.jsx'
import UseEffect from './components/UseEffect.jsx'
import Fetching from './components/Fetching.jsx'
import RandomPerson_UI from './components/RandomPerson_UI.jsx'
import ProductDetail from './Pages/ProductDetail.jsx'
import SignUp from './components/SignUp.jsx'
import Login from './Pages/Login.jsx'

function App() {
  const name = "Prem"
  const Email = "PremKarhale383@gmail.com"
  const hobbies = "footboll"


  const users = [
    { id: 1, image: "https://via.placeholder.com/100", name: "John Doe", email: "john.doe@example.com", },
    { id: 2, image: "https://via.placeholder.com/100", name: "Jane Smith", email: null, },
    { id: 3, image: "https://via.placeholder.com/100", name: "Alice Johnson", email: "alice.johnson@example.com", },
  ];   
     const colors = {
        "gray": [
            "#f8f9fa",
            "#f1f3f5",
            "#e9ecef",
            "#dee2e6",
            "#ced4da",
            "#adb5bd",
            "#868e96",
            "#495057",
            "#343a40",
            "#212529"
        ],
        "red": [
            "#fff5f5",
            "#ffe3e3",
            "#ffc9c9",
            "#ffa8a8",
            "#ff8787",
            "#ff6b6b",
            "#fa5252",
            "#f03e3e",
            "#e03131",
            "#c92a2a"
        ],
        "pink": [
            "#fff0f6",
            "#ffdeeb",
            "#fcc2d7",
            "#faa2c1",
            "#f783ac",
            "#f06595",
            "#e64980",
            "#d6336c",
            "#c2255c",
            "#a61e4d"
        ],
        "grape": [
            "#f8f0fc",
            "#f3d9fa",
            "#eebefa",
            "#e599f7",
            "#da77f2",
            "#cc5de8",
            "#be4bdb",
            "#ae3ec9",
            "#9c36b5",
            "#862e9c"
        ],
        "violet": [
            "#f3f0ff",
            "#e5dbff",
            "#d0bfff",
            "#b197fc",
            "#9775fa",
            "#845ef7",
            "#7950f2",
            "#7048e8",
            "#6741d9",
            "#5f3dc4"
        ],
        "indigo": [
            "#edf2ff",
            "#dbe4ff",
            "#bac8ff",
            "#91a7ff",
            "#748ffc",
            "#5c7cfa",
            "#4c6ef5",
            "#4263eb",
            "#3b5bdb",
            "#364fc7"
        ],
        "blue": [
            "#e7f5ff",
            "#d0ebff",
            "#a5d8ff",
            "#74c0fc",
            "#4dabf7",
            "#339af0",
            "#228be6",
            "#1c7ed6",
            "#1971c2",
            "#1864ab"
        ],
        "cyan": [
            "#e3fafc",
            "#c5f6fa",
            "#99e9f2",
            "#66d9e8",
            "#3bc9db",
            "#22b8cf",
            "#15aabf",
            "#1098ad",
            "#0c8599",
            "#0b7285"
        ],
        "teal": [
            "#e6fcf5",
            "#c3fae8",
            "#96f2d7",
            "#63e6be",
            "#38d9a9",
            "#20c997",
            "#12b886",
            "#0ca678",
            "#099268",
            "#087f5b"
        ],
        "green": [
            "#ebfbee",
            "#d3f9d8",
            "#b2f2bb",
            "#8ce99a",
            "#69db7c",
            "#51cf66",
            "#40c057",
            "#37b24d",
            "#2f9e44",
            "#2b8a3e"
        ],
        "lime": [
            "#f4fce3",
            "#e9fac8",
            "#d8f5a2",
            "#c0eb75",
            "#a9e34b",
            "#94d82d",
            "#82c91e",
            "#74b816",
            "#66a80f",
            "#5c940d"
        ],
        "yellow": [
            "#fff9db",
            "#fff3bf",
            "#ffec99",
            "#ffe066",
            "#ffd43b",
            "#fcc419",
            "#fab005",
            "#f59f00",
            "#f08c00",
            "#e67700"
        ],
        "orange": [
            "#fff4e6",
            "#ffe8cc",
            "#ffd8a8",
            "#ffc078",
            "#ffa94d",
            "#ff922b",
            "#fd7e14",
            "#f76707",
            "#e8590c",
            "#d9480f"
        ]
    }

  return (
    <>
      {/* <Card/>  */}

      {/* {
        users.map((usr)=>(
          <UserCard key={usr.id} user = {usr}/>
        ))
      } */}

     {/* {
  Object.entries(colors).map(([colorName, shades]) => (
    <Colorpalate
      key={colorName}
      name={colorName}
      shades={shades}
    />
  ))
}  */}
    {/* <UseState/> */}
    
    {/* <Todo/> */}
    {/* <UseEffect/> */}

    <Navbar/>
    
    <Routes>
    
    <Route path='/'  element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/products' element={<Product/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='*' element={<NotFound/>}/>
    <Route path="/register" element={<Register login = {true}/>} />
    <Route path='/product/:id' element={<ProductDetail/>} />
    <Route path='/signup' element={<SignUp/>} />
    <Route path='/login' element={<Login/>} />
    </Routes>
    

    {/* <Fetching/> */}

    {/* <RandomPerson_UI/> */}
 

    </>
  )
}

export default App
