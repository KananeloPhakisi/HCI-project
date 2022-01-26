import React, { useState } from 'react';
import "./mpages.css";
import { MdRoom } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";

const Contact = () => {
  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[msg, setMsg] = useState('');
  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='left'>
          <div className='icon'><MdRoom/><p>Kingsway Road<br></br>Moposo House<br></br>Maseru</p></div>
          <div className='icon'><MdEmail/><p>contact@communication.gov.ls<br></br>info@communication.gov.ls</p></div>
          <div className='icon'><MdCall/><p>(00266) 2231 0264</p></div>
        </div>
        <div className='right'>
          <form className='formSytle'>
            <div className='formgroup'>
              <label htmlFor='name'>Your Name
              <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)}></input>
              </label>
            </div>
            <div className='formgroup'>
              <label htmlFor='name'>Your Email
              <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
              </label>
            </div>
            <div className='formgroup'>
              <label htmlFor='name'>Your Message
              <input type='text' id='message' value={msg} onChange={(e) => setMsg(e.target.value)}></input>
              </label>
            </div>
          </form>
          <button className='formButton' type='submit'>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;