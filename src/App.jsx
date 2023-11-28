import React from 'react'
import {BrowserRouter, Route , Routes} from "react-router-dom"
import Header from './components/Header'
import Course from "./pages/Course"
import Login from './components/Login'
import Tools from "./pages/Tools"
import Forum from './pages/Forum'
import Home from "./pages/Home"
import "./App.css"

function App() {
  return (
    <div className="w-full h-full bg-[#090f20] ">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' exact element={<Course />} />
        <Route path = '/login' element={<Login />} />
        <Route path = '/tools' element={<Tools />} />
        <Route path = "/forum" element={<Forum />} />
        <Route path = "/course" element={<Course />} />
        <Route path = "/home" element={<Home />} />
      </Routes>  
    </BrowserRouter>
      </div>
    
  )
}

export default App