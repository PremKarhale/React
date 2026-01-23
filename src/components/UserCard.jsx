// Define Props always in the parent 
function UserCard({user}){
    return <>
    <div className="card">
        <img src={user.image} alt="UserPlaceholder" />
        <h3>{user.name}</h3>
        {
        user.email ? (
            <p>{user.email}</p>
        ):(
            <p style={{color: "red"}}>Email is not Available </p>
        )
        }
    </div>
    </>
}
export default UserCard