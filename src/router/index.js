import React from 'react'
import { BrowserRouter, Routes,Route, } from "react-router-dom";
import Erroe from './Erroer';
import Signup from '../components/registration/Signup';
import Login from '../components/registration/Login.jsx';
import RegistrationPage from '../pages/registrationPage/RegistrationPage.jsx';
import Welcome from './../pages/home/Welcome';



const index = () => {
  return (
    <>
    <BrowserRouter>
       <Routes> 
            <Route path='/' element={<RegistrationPage/>}>
              <Route path='' element={<Login/>}/>
              <Route path='Signup' element={<Signup/>}/>
              <Route path='/welcome' element={<Welcome/>}/>   
              <Route path='*' element={<Erroe/>}/>
            </Route>
        </Routes>
  </BrowserRouter>
    </>
  )
}

export default index