import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import FirstPage from './Components/FirstPage';
import Displayweather from './Components/Displayweather';


function App() {
  return (
    <div >
      <FirstPage/>
    </div>
  );
}

export default App;
