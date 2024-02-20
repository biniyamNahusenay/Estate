import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import About from './pages/About'
import Header from './components/Header'

export default function App() {
  return (  
    <Router>
       <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Router>
  )
}