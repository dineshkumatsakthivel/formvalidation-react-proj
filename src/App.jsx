import React from 'react'
import Login from './components/Login'
import {BrowserRouter ,Routes, Route } from 'react-router-dom'
import Homepag from './Homepag'
import Studetninfo from './components/Studetninfo'
import Students from './components/Students'
import Employeeinfo from './components/Employeeinfo'
import Employee from './components/Employee'



const App = () => {
 

  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path='/login' Component={<Login/>}/> */}
      <Route exact path='/login' Component={Login}></Route>
      <Route exact path='/' Component={Homepag}></Route>
      <Route exact path='/studentinfo' Component={Studetninfo}></Route>
      <Route exact path='/employeeinfo' Component={Employeeinfo}></Route>
      <Route exact path ='/students' Component={Students}></Route>
      <Route exact path ='/employee' Component={Employee}></Route>

      


      
      
      </Routes></BrowserRouter>
   
    
  )
}

export default App
