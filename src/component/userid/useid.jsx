import { useLoaderData, useNavigate } from "react-router-dom"

 

function Useid() {

    const navigete = useNavigate()
    const  userid = useLoaderData()
    const  {id,name,email}=userid

   const handclick =()=>{
    navigete(-1)
   }



    return (
        <div className=" border hover:bg-green-400 text-xl rounded-2xl text-center p-10 w-6/12 my-10">
<h2 > id: {id}</h2>
<h2 className="my-5">name  :   {name} </h2>
<h2>email:{email} </h2>
 <button onClick={handclick}className="border bg-green-500 hover:bg-green-900 text-white px-4 my-5 rounded-xl  py-2 "  >go back</button>
        </div>
    )
}

export default Useid
