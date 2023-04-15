import React from 'react';
import {Link }  from 'react-router-dom';


export default function About(){
  return(
    <div  style={{backgroundColor:"skyblue", height:"550px",padding:"72px", }}>
    <h1>Thank You</h1>
    <Link to={'/'}>Now redirect to Home</Link>
    </div>
  )
  }