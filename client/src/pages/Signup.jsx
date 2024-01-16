import { useState } from "react"
import {Link,useNavigate} from "react-router-dom"
import Oauth from "../components/Oauth"

export default function Signup() {
  const [formData,setFormData] = useState({})
  const [error,setError] = useState(null)
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()
    try {  
      setLoading(true)
     const res = await fetch("/api/auth/signup",{
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    const data = await res.json()
    if(data.success === false){
      setLoading(false)
      setError(data.message)
      return
    }
    setLoading(false)
    setError(null)
    navigate("/signin")
  } catch (error) {
    setLoading(false)
      setError(data.message)
  }
  }
  return (
    <div className='mx-auto p-3 max-w-lg'>
      <h2 className='font-bold text-center text-3xl my-4'>Sign Up</h2>
      <form className='flex flex-col gap-3 text-center' onSubmit={handleSubmit}>
        <input type="text" placeholder='username' 
        className='p-3 border rounded' id='username' onChange={handleChange}/>

        <input type="email" placeholder='email' 
        className='p-3 border rounded-lg' id='email' onChange={handleChange}/>

        <input type="password" placeholder='password' 
        className='p-3 border rounded' id='password' onChange={handleChange}/>
        <button disabled = {loading} className='max-w-lg bg-slate-700 text-white p-3 
        rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loading ? 'Loading': "sign up"}</button>
       <Oauth/>
      </form>
      <div className="flex gap-2 items-center mt-3">
        <p>Have an account?</p>
        <Link to="/signin">
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
      {error && <p className="text-rose-600 mt-5">{error}</p>}
    </div>
  )
}
