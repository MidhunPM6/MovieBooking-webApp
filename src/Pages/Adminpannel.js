import React, { useContext } from 'react'
import Adminpannel from '../Componets/Adminpage/Adminpannel'
import NavBar from '../Componets/Header/NavBar'
import Footer from '../Componets/Footer/Footer'
import { auth, db } from "../firebase/config";
import { AdminAuth } from "../context/adminContext";
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';




function AdminPannel() {
  const {setAdminUser}=useContext(AdminAuth)

  onAuthStateChanged (auth,async(user)=>{
    if(user){

   
    const uid=user.uid
    const adminref= doc(db,"Admin",uid)
    try {
      const adminDocSnap= await getDoc(adminref)
      if(adminDocSnap.exists()){
        const userData= adminDocSnap.data()
        setAdminUser(userData)
      }else{
        console.log("No data Found")
      }
      
    } catch (error) {
      console.log(error);
      
      
    }
  }else{
    console.log("No data found");
    
  }

  })
  return (
    <div>
        <NavBar />
        <Adminpannel  />
        <Footer />
    </div>
  )
}

export default AdminPannel
