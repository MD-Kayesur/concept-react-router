import { Link, Links, useNavigate } from "react-router-dom"

 

 

function  Post({post}) {

    
const navigate = useNavigate()

    const {id,title}= post
    
const handclock = ()=>{
    navigate(`/post/${id}`)
}
     
    return (
        <div  className=" border p-10 hover:bg-green-400  text-center rounded-2xl" >
            <h2>username :{id} </h2>
            <h2>website :{title}</h2>
            {/* <Link to={`/post/${id}`}>click</Link> */}
             <div className="flex gap-4 justify-center">
             <Link  to={`/post/${id}`}   className="border bg-green-500 hover:bg-green-900 text-white px-4 my-5 rounded-xl  py-2"> click</Link>
             <button  className="border bg-green-500 hover:bg-green-900 text-white px-4 my-5 rounded-xl  py-2" onClick={handclock} > post details</button>
            
             </div>
        </div>
    )
}

export default Post
