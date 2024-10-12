import React, { useContext } from "react";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import SignupPage from "./Pages/SignupPage";
import { AuthContext } from "./context/userContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebase/config";
import { doc, getDoc } from "firebase/firestore";
import Adminlogin from "./Pages/Adminlogin";
import AdminSignUp from "./Pages/AdminSignup";

function App() {
  const {setUser}=useContext(AuthContext)
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const uid = user.uid;
      const userDocRef = doc(db, "UserDetails", uid);

      try {
        const userDocSnap = await getDoc(userDocRef);
        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          setUser(userData.name)
        } else {
          console.log("No such data found");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    } else {
      console.log("User is signed out.");
    }
  });

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/admin" element={<Adminlogin />} />
        <Route path="/adminsignup" element={<AdminSignUp />} />


      </Routes>
    </div>
  );
}

export default App;
