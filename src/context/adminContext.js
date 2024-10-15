import React from 'react'
import { createContext ,useState} from "react";




export const AdminAuth=createContext(null)

function AdminContext({children}) {

    const [adminUser,setAdminUser]=useState('')
  return (
    <AdminAuth.Provider value={{adminUser,setAdminUser}}>
        {children}
    </AdminAuth.Provider>
  )
}

export default AdminContext
