import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

function AdminProtected() {
    const token = localStorage.getItem('token')
    if (token ){
        const decoded = jwtDecode(token);
        if (decoded.is_admin){
            return <Outlet/>
        } else {
           return <Navigate to={'/userhome/'}/>
        }
    } else {
        return <Navigate to={'/'}/>
    }
}

export default AdminProtected;