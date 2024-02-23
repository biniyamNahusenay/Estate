import {Link} from "react-router-dom"

export default function Signup() {
  return (
    <div className = "max-w-lg p-3 mx-auto">
       <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="username" 
          className="border p-3 rounded-lg"  id="username"/>
          <input type="email" placeholder="email" id="email"
          className="border p-3 rounded-lg"/>
          <input type="password" placeholder="password" id="password"
           className="border p-3 rounded-lg"/>
           <button className ="bg-slate-700 p-3 w-100 text-white 
           rounded-lg hover:opacity-95 disabled:opacity-80 uppercase">Sign Up</button>
        </form>
         <div className="flex gap-2 mt-5">
           <p>Have an account?</p>
           <Link to="/signin"><span className="text-blue-700">Sign in</span></Link>
         </div>
    </div>
  )
}