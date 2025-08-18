import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import User from './pages/home/User/User';
import Admin from './pages/home/admin/Admin';
import Welcome from './pages/welcome/welcome';
import { Toaster } from 'react-hot-toast';
import ProtectedRoute from './Components/ProtectedRoute';
import { useSelector } from 'react-redux';
import Loader from './Components/Loader';
import AdminProtectedRoute from './Components/AdminProtectedRoute';
import AddEditForm from './pages/home/admin/AddEditForm';
import Editform from './pages/home/admin/Editform';
import DisplayQr from './pages/home/admin/DisplayQr';
import RoadDetails from './pages/home/User/RoadDetails';

function App() {
   const { loading } = useSelector((state) => state.loadersReducer);

  return (
     <div>
      <Toaster position="top-center" reverseOrder={false} />
      {loading && <Loader />}
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Welcome />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Admin-dashboard" element={<AdminProtectedRoute><Admin /></AdminProtectedRoute>} />
          <Route path="/add-form" element={<AdminProtectedRoute><AddEditForm /></AdminProtectedRoute>} />
          <Route path="/edit-form/:id" element={<AdminProtectedRoute><AddEditForm/></AdminProtectedRoute>} />
          <Route path="/edit-form-admin/:id" element={<AdminProtectedRoute><Editform/></AdminProtectedRoute>} />
          <Route path='/qrCode/download' element={<AdminProtectedRoute><DisplayQr/></AdminProtectedRoute>} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/user" element={<ProtectedRoute><User /></ProtectedRoute>} />
          <Route path='/public/get-road/:id' element={<RoadDetails />} />
        </Routes>
      </BrowserRouter>
      
     
    </div>

  ) 
}

export default App
