import './App.css'
import Card from "./components/ArticleCard"
import UserCard from './components/userCard'

function App() {
  const name = "Prem"
  const Email = "PremKarhale383@gmail.com"
  const hobbies = "footboll"

  const users = [
    { id: 1, image: "https://via.placeholder.com/100", name: "John Doe", email: "john.doe@example.com", },
    { id: 2, image: "https://via.placeholder.com/100", name: "Jane Smith", email: null, },
    { id: 3, image: "https://via.placeholder.com/100", name: "Alice Johnson", email: "alice.johnson@example.com", },
    { id: 4, image: "https://via.placeholder.com/100", name: "Prem karhlale", email: "prem.karhale@example.com", },
    { id: 4, image: "https://via.placeholder.com/100", name: "Prem karhlale", email: "prem.karhale@example.com", },
    { id: 4, image: "https://via.placeholder.com/100", name: "Prem karhlale", email: "prem.karhale@example.com", },
  ];

  return (
    <>
      {/* <Card/> */}
      <div className='app'>
        {users.map((usr) => (
        <UserCard key={usr.id} image="/public/user_placeholder.jpg" name={usr.name} email={usr.email} />

      ))}

      </div>
      

    </>
  )
}

export default App
