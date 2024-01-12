import {Link} from "react-router-dom"

export default function Signup() {
  return (
    <div className='mx-auto p-3 max-w-lg'>
      <h2 className='font-bold text-center text-3xl my-4'>Sign Up</h2>
      <form className='flex flex-col gap-3 text-center'>
        <input type="text" placeholder='username' 
        className='p-3 border rounded' id='name'/>

        <input type="email" placeholder='email' 
        className='p-3 border rounded-lg' id='email'/>

        <input type="password" placeholder='password' 
        className='p-3 border rounded' id='password'/>
        <button className='max-w-lg bg-slate-700 text-white p-3 
        rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>sign up</button>
      </form>
      <div className="flex gap-2 items-center mt-3">
        <p>Have an account?</p>
        <Link to="/signin">
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
    </div>
  )
}
