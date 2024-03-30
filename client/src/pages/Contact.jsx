import React, { useState } from 'react';
import { useAuth } from '../store/Auths';

const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
}

const Contact = () => {
  const [contact, setContact] = useState(defaultContactFormData);

  const { user } = useAuth();
  const [userData, setUserData] = useState(true);

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });

    setUserData(false);
  }

  const handelInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handelSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/form/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact)
      });

      if (response.ok) {
        setContact(defaultContactFormData);
        const data= await response.json();
        console.log(data);
        alert("message send ")
      }
    } catch (error) {
      alert("msg not send")
      console.log(error);
    }
  }


  return (
    <>
      <section className='section-contact'>
        <div className="contact-content container">
          <h1 className='main-heading'>contact us</h1>
        </div>
        {/* contact page main */}
        <div className="container grid grid-two-cols ">
          <div className="contact-img">
            <img src="/images/support.png" alt="contact" />
          </div>

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
                  value={contact.username}
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
                  value={contact.email}
                  onChange={handelInput}
                />
              </div>

              <div>
                <label htmlFor="message">message</label>
                <textarea name='message'
                  id='message'
                  cols='30'
                  rows='6'
                  autoComplete='off'
                  value={contact.message}
                  onChange={handelInput}
                ></textarea>
              </div>

              <div>
                <button type='submit'>submit</button>
              </div>
            </form>
          </section>
        </div>

        <section className="mb-3">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59733.753095432316!2d85.55876615730304!3d20.654945426946668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a18dffbd38b1513%3A0x4fe423769b5f1ee7!2sDhenkanal%2C%20Odisha!5e0!3m2!1sen!2sin!4v1707123708405!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </section>
      </section>
    </>
  )
}

export default Contact
