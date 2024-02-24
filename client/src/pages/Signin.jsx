import { useState } from "react"
import {Link,useNavigate} from "react-router-dom"

export default function Signin() {
  const [data,setData] = useState({})
  const [error,setError] = useState(null)
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e)=>{
    setData({
     ...data,
     [e.target.id] : e.target.value
    })
  }
  const handleSubmit = async (e)=>{
    e.preventDefault()
    try{
      setLoading(true)
       const res = await fetch("/api/auth/signin",{
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json',
        },
        body : JSON.stringify(data)
      })
      const dataRes = await res.json()
       if(dataRes.success === false){
         setLoading(false)
         setError(dataRes.message)
         return;
       }
       setLoading(false)
       setError(null)
       navigate("/")
    }catch(error){
       setLoading(false)
       setError(error.message)
    }
  }
  return (
    <div className = "max-w-lg p-3 mx-auto">
       <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input type="email" placeholder="email" id="email"
          className="border p-3 rounded-lg" onChange={handleChange}/>
          <input type="password" placeholder="password" id="password"
           className="border p-3 rounded-lg" onChange={handleChange}/>
           <button disabled = {loading} className ="bg-slate-700 p-3 w-100 text-white 
           rounded-lg hover:opacity-95 disabled:opacity-80 uppercase">{loading ? 'loading' : 'Sign in'}</button>
        </form>
         <div className="flex gap-2 mt-5">
           <p>Don't Have an account?</p>
           <Link to="/signup"><span className="text-blue-700">Sign up</span></Link>
         </div>
         {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  )
  }