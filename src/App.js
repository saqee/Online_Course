import React, { useState } from 'react';
import logo from './images/4.jpg'
import './App.css';
import Header from './components/Header/Header';
import Course from './components/Course/Course';


function App() {
    
  return (
    <div className="course-container">
      
      <img src={logo} alt=""/>
      <Header></Header> 
      <Course> </Course>
    </div>
  );
}

export default App;
