import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from "react-router-dom";
import Home from './pages/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import Features from './Components/Main/Features';
import App from './App';



ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>,
)
