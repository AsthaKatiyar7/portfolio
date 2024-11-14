import React, { useState } from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import SendIcon from '@mui/icons-material/Send';
import './contact.scss';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
  };
  return (
    <div className="contact" id = "contact">
      <h2>Contact Me</h2>
      <p className="subtitle">Get in touch</p>
      <div className="contact-content">
        <div className="contact-info">
          <ContactItem icon={<PhoneIcon />} title="Phone No." content="+91 9956618961" />
          <ContactItem icon={<EmailIcon />} title="Email" content="asthakt7@gmail.com" />
          <ContactItem icon={<PlaceIcon />} title="Location" content="Lucknow, UP, India" />
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit">
            <SendIcon className="icon" />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

const ContactItem = ({ icon, title, content }) => {
  return (
    <div className="contact-item">
      <div className="icon">{icon}</div>
      <div className="info">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};



  
  