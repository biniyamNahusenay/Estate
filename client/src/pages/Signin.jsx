import { useState } from "react"
import {Link,useNavigate} from "react-router-dom"

export default function Signin() {
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
     const res = await fetch("/api/auth/signin",{
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
    navigate("/")
  } catch (error) {
    setLoading(false)
      setError(data.message)
  }
  }
  return (
    <div className='mx-auto p-3 max-w-lg'>
      <h2 className='font-bold text-center text-3xl my-4'>Sign In</h2>
      <form className='flex flex-col gap-3 text-center' onSubmit={handleSubmit}>

        <input type="email" placeholder='email' 
        className='p-3 border rounded-lg' id='email' onChange={handleChange}/>

        <input type="password" placeholder='password' 
        className='p-3 border rounded' id='password' onChange={handleChange}/>
        <button disabled = {loading} className='max-w-lg bg-slate-700 text-white p-3 
        rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loading ? 'Loading': "sign in"}</button>
      </form>
      <div className="flex gap-2 items-center mt-3">
        <p>Don't Have an account?</p>
        <Link to="/signup">
          <span className="text-blue-700">Sign up</span>
        </Link>
      </div>
      {error && <p className="text-rose-600 mt-5">{error}</p>}
    </div>
  )
}
