import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import App from './App';
import Pricing from './components/Pricing'
import About from './components/About'


ReactDOM.render(
  
  <Router>
    <Routes>
      <Route   path='/'  element={<App />} />
      <Route   path='/pricing'  element={<Pricing />} />
      <Route   path='/about'  element={<About/>} />
    </Routes>
  </Router>
    
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

