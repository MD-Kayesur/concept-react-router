import { useLoaderData, useNavigate } from "react-router-dom"

 

function Click() {

const navigete = useNavigate()

    const click = useLoaderData()
    console.log(click);
    const handleclick=()=>{
        navigete(-1)
    }
    const {id,title,body}=click
    return (
        <div className=" border text-center mt-10 w-6/12 p-10 hover:bg-green-400  rounded-2xl">
            <h2>post details</h2>
            <h2 className="my-2">posts id :{id} </h2>
            <h2>Post taitle : {title} </h2>
            <p className="my-2 ">{body}</p>
            <button className="border bg-green-500 hover:bg-green-900 text-white px-4 my-5 rounded-xl  py-2" onClick={handleclick} >go back</button>

        </div>
    )
}

export default Click
