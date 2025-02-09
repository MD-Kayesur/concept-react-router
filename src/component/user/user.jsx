import { Link, useNavigate } from "react-router-dom";
import "./use.css";
function Users({ user }) {
  const navugate = useNavigate();

  const handler = () => {
      navugate(`/user/${id}`);
    };
    console.log(user);
  const { name, id, email, phone } = user;
  return (
    <div className=" border p-10 hover:bg-green-400  rounded-2xl">
      <h2>name: {name} </h2>
      <h2 className="my-2">enail : {email} </h2>
      <h2 className="mb-2">phone : {phone} </h2>
      <h2>id:{id} </h2>
      <div className='flex justify-center gap-3'>
        <Link
          to={`/user/${id}`}
          className="border bg-green-500 hover:bg-green-900 text-white px-4 my-5 rounded-xl  py-2">
          {" "}
          details
        </Link>
        <button
          onClick={handler}
          className="border bg-green-500 hover:bg-green-900 text-white px-4 my-5 rounded-xl  py-2">
          click here
        </button>
      </div>
    </div>
  );
}

export default Users;
