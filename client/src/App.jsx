import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import User from './pages/home/User/User';
import Admin from './pages/home/admin/Admin';
import Welcome from './pages/welcome/welcome';
import { Toaster } from 'react-hot-toast';
function App() {
  

  return (
     <div>
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Admin-dashboard" element={<Admin />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
      
     
    </div>

  ) 
}

export default App
