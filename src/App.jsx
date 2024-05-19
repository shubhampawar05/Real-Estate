import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import MainPage from './pages/MainPage'
import LikedPage from './pages/LikedPage';

function App() {
  

  return (
    <>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainPage/>} />
      <Route path='/liked' element={<LikedPage/>} />

    
    </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
