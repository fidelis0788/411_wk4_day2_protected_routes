import React from 'react';
import Navigation from './components/Navigation'
import './App.css'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import Auth from './Auth'
function App() {
Auth.checkauth();
  return (
    
    <BrowserRouter>
      <Navigation />
      <Router />
    </BrowserRouter>
  );
}

export default App;
