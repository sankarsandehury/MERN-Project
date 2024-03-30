import React, { useEffect } from 'react'
import { Navigate } from "react-router-dom";
import { useAuth } from '../store/Auths';

const Logout = () => {
    const {LogoutUser}=useAuth();

    useEffect(()=>{
        LogoutUser();
    },[LogoutUser]);

    return (
        <>
           <Navigate to="/login"/>
           <h1>LOGOUT</h1>
        </>
    )
}

export default Logout