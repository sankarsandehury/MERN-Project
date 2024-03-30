import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/Auths';
import {toast} from "react-toastify";

const AdminContacts = () => {
  const [contactData, setContactData] = useState([]);
  const { authorizationToken } = useAuth();

  const getContactsData = async () => {
    try {
      const response = await fetch("http://localhost:5000/admin/contacts", {
        method: 'GET',
        headers: {
          Authorization: authorizationToken
        },
      });

      const data = await response.json()
      // console.log("contact data", data);

      if (response.ok) {
        setContactData(data)
      }

    } catch (error) {
      console.log(error);
    }
  };

  const deleteContactById=async(id)=>{
    try {
      const response=await fetch(`http://localhost:5000/admin/contacts/delete/${id}`,{
        method:"DELETE",
        headers:{
          Authorization: authorizationToken,
        }
      });

      if(response.ok){
        getContactsData();
        toast.success("Delete Successfully")
      }else{
        toast.error('Not Delete')
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getContactsData()
  }, []);

  return (
    <>
      <section className='admin-contacts-section'>
      <h1>AdminContacts</h1>
        <div className="container admin-users">
          {contactData.map((curContactData, index) => {
            const {username,email,message,_id}=curContactData;
            return (
              <div key={index}>
                <p>{username}</p>
                <p>{email}</p>
                <p>{message}</p>
                <button className='btn' onClick={()=>{deleteContactById(_id)}}>Delete</button>
              </div>
            );
          })}
        </div>
      </section>
    </>
  )
}

export default AdminContacts
