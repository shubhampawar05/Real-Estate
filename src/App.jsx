import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import MainPage from './pages/MainPage'
import LikedPage from './pages/LikedPage';
import { LikedProvider } from './context/LikedContext';
function App() {
  

  return (
    <>
    <LikedProvider>
      
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainPage/>} />
      <Route path='/liked' element={<LikedPage/>} />

    
    </Routes>
   </BrowserRouter>
    </LikedProvider>
    </>
  )
}

export default App
