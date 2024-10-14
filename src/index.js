import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom'
import UserContext from './context/userContext';
import AdminContext from './context/adminContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<UserContext>
  <AdminContext>
  <Router>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Router>
  </AdminContext>
  </UserContext>
);


