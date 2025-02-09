import { useLoaderData } from "react-router-dom"
import Users from "../user/user"
 
 
 function User() {


    const user = useLoaderData()
    return (
  
        <div className="text-center  " >
            <div className="text-3xl font-bold my-10">
            <h3>user : {user.length}</h3>
            <h2>every user are here</h2>
            </div>
            <div className="  grid md:grid-cols-3 gap-4   ">

            {
                user.map((user,inx) =>  <Users key={inx} user={user}></Users>)
            }
            </div>
        </div>
    )
 }
 
 export default User
 
