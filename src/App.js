import React from "react"
import Home from "./Pages/Home"
import {Route,Routes} from 'react-router-dom'
import Login from "./Pages/Login";
import SignupPage from "./Pages/SignupPage";






function App() {
  return (
  <div>
  
    
      <Routes>
      <Route  path="/" element={<Home />}/>
      <Route  path="/login" element={<Login />}/>
      <Route path="/signup" element={<SignupPage  />}/>
      </Routes>
    
  </div> 
     


  );
}

export default App;
