import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

export const Contact = () => {
    const [berhasil,setBerhasil] = useState(false)
    const [gagal,setGagal] = useState(false)
    const [loading,setLoading] = useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true)
    emailjs.sendForm('service_fztb6me', 'template_uvwyjdv', form.current, '4WDhJz1YTyJDi843e')
      .then((result) => {
          console.log(result.text);
            setBerhasil(true)
      }, (error) => {
          console.log(error.text);
            setGagal(true)
      });
      setLoading(false)
      form.current.reset()
  };

  return (
      <>    
      <div className="container-contact">
          <div className='Hello'>
              <h1>Contact Me</h1>
          </div>
          <div className='contact-hi'>
              <h1>Don't be a stranger,Just say<span style={{color: 'red'}}> Hello!</span></h1>
              {loading && <span className='loading'>Loading</span>}
            {berhasil && <div className='berhasil' style={{color:"red", fontSize:"20px",paddingTop:'20px',fontWeight:"bold" }}>Thank you for your feedback!!</div>}
            {gagal && <div className='gagal'>Gagal</div>}
          </div>
      <div className='contact-form'>
      
    <form ref={form} onSubmit={sendEmail} className='form-horizontal'>
          <label>Subject</label>
      <input type="text" name="from_name" placeholder="Subject" />
      <label>Name</label>
      <input type="text" name="user_name" placeholder="Name" />
      <label>Email</label>
      <input type="email" name="user_email" placeholder="Email" />
      <label>Message</label>
      <textarea name="message" placeholder="Message"/>
      <button type="submit" value="Send" >SEND</button>
    </form>
   
    </div>
    
       </div>
     
    </>

  );
};
export default Contact;