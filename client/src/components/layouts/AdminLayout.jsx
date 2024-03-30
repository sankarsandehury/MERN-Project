import React from 'react'
import { NavLink, Navigate, Outlet } from 'react-router-dom';
import { FaMessage } from "react-icons/fa6";
import { FaUser,FaRegListAlt,FaHome} from "react-icons/fa";
import { useAuth } from '../../store/Auths';

const AdminLayout = () => {
  const {user,isLoading}=useAuth();
  console.log('Admin layout', user);

  if(isLoading){
    return <h1>Loading...</h1>
  }

  if(!user.isAdmin){
    return <Navigate to='/'/>
  }

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li><NavLink to="/admin/users"><FaUser />Users</NavLink></li>
              <li><NavLink to="/admin/contacts"><FaMessage /> Contacts</NavLink></li>
              <li><NavLink to="/service"> <FaRegListAlt/> Service</NavLink></li>
              <li><NavLink to="/"><FaHome />Home</NavLink></li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet/>
    </>
  )
}

export default AdminLayout