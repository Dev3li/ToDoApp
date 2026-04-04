import { Routes, Route } from 'react-router-dom'
import './styles/App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import { Toaster } from 'react-hot-toast';
//  For Handel Pages (Login..inc)
// this page for handel page , by roouter = it's move you to the page what you need , or 
// page you must view to you , if you login by you account ,dashboard page will view , if not have accout or you signOut 
// the Login page view to you.
function App() {
 return(
  <>
  <div>
    <Toaster />
   <Routes>
    <Route path='/' element={<Login />}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/signup' element={<Register />}/>
   </Routes>
  </div>

  </>
 )
}

export default App
