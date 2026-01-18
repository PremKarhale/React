// Define Props always in the parent 
function UserCard({image , name , email}){
    return <>
    <div className="card">
        <img src={image} alt="UserPlaceholder" />
        <h3>{name}</h3>
        {
        email ? (
            <p>{email}</p>
        ):(
            <p style={{color: "red"}}>Email is not Available </p>
        )
        }
    </div>
    </>
}
export default UserCard