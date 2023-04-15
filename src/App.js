import React from 'react';
import './style.css';
import { Routes, Route } from 'react-router-dom';
import {About,Contact,Home} from './Pages/Main';

export default function App() {
  return(
  
    <Routes>  
       <Route path="/" element={<Home/>}/> 
      <Route path="/About" element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
    </Routes>
   
  ) 
}
