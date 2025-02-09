import { useLoaderData } from "react-router-dom"
import Post from "../post/post"

 

function Posts() {
  const   posts = useLoaderData()

   
    return (
        <div  >
         <div className=" text-center  text-3xl font-bold my-10 ">
         <h3>posts data :{posts.length}</h3>
         <h2 className="my-2">all post are  here</h2>
         </div>
         <div className="  grid md:grid-cols-3 gap-4   ">
         {
            posts.map((post,ins) => <Post key={ins} post={post}></Post>)
         }
         </div>
        </div>
    )
}

export default Posts
