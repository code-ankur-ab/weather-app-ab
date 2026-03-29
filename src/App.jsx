
import './App.css'
import Home from './Pages/Home';
import Landing from './Pages/Landing';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

 
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/home' element={<Home />}/>
        </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
