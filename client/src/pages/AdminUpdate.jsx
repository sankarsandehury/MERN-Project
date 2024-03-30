import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useAuth } from '../store/Auths';
import {toast} from 'react-toastify';

const AdminUpdate = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        phone: "",
    });

    const params = useParams();
    const { authorizationToken } = useAuth();


    const getSingleUserData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/admin/users/${params.id}`, {
                method: 'GET',
                headers: {
                    Authorization: authorizationToken
                },
            });

            const data = await response.json();
            console.log(`user single data${data}`);
            setData(data);
        } catch (error) {
            console.log(error);
        }

    };

    useEffect(() => {
        getSingleUserData();
    }, [])

    const handelInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setData({
            ...data,
            [name]: value,
        })
    };

    const handelSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/admin/users/update/${params.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': "application/json",
                    Authorization: authorizationToken
                },
                body:JSON.stringify(data),
            });
            if(response.ok){
                toast.success('updated successful');
            }else{
                toast.error('Not updated ');
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (

        <section className='section-contact'>
            <div className="contact-content container">
                <h1 className='main-heading'> Update user Data</h1>
            </div>
            {/* contact page main */}
            <div className="container grid grid-two-cols ">


                {/* contact content */}
                <section className='section-form'>
                    <form onSubmit={handelSubmit}>
                        <div>
                            <label htmlFor="username">username</label>
                            <input type="text"
                                name='username'
                                id='username'
                                autoComplete='off'
                                required
                                value={data.username}
                                onChange={handelInput}
                            />
                        </div>

                        <div>
                            <label htmlFor="email">email</label>
                            <input type="email"
                                name='email'
                                id='email'
                                autoComplete='off'
                                required
                                value={data.email}
                                onChange={handelInput}
                            />
                        </div>

                        <div>
                            <label htmlFor="phone">Phone</label>
                            <input type="phone"
                                name='phone'
                                id='phone'
                                autoComplete='off'
                                required
                                value={data.phone}
                                onChange={handelInput}
                            />
                        </div>

                        <div>
                            <button type='submit'>Update</button>
                        </div>
                    </form>
                </section>
            </div>

        </section>

    )
}

export default AdminUpdate
