import React from 'react'
import {BrowserRouter, Route , Routes} from "react-router-dom"
import Header from './components/Header'
import Course from "./pages/Course"
import Login from './components/Login'
import Tools from "./pages/Tools"
import Forum from './pages/Forum'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' exact element={<Course />} />
        <Route path = '/login' element={<Login />} />
        <Route path = '/tools' element={<Tools />} />
        <Route path = "/forum" element={<Forum />} />
      </Routes>  
    </BrowserRouter>
    
  )
}

export default App