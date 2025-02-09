import { useState } from "react"
import { Link, NavLink, Outlet } from "react-router-dom"
import './home.css'
 




function Home() {

 


 
    return (
        <div   className="m-10  ">
             
            <div >
            <nav >
            <NavLink   to='/contack'> contavct</NavLink>
            <NavLink NavLink className="m-5" to='/Service'>Service</NavLink>
            <NavLink className="home" to='/header'> header</NavLink>
            <NavLink className="m-5"  to="/user"> userd</NavLink>
             <NavLink to="/posts"> posts</NavLink>
            </nav>
            </div>
             <Outlet></Outlet>
        </div>
    )
}

export default Home
