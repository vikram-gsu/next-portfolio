import * as React from 'react';
import ContactStyles from './styles/ContactStyles';
import Instagram from './SVGs/Instagram';
import Twitter from './SVGs/Twitter';
import LinkedIn from './SVGs/LinkedIn';
import Mail from './SVGs/Mail';
import Link from 'next/link';

const Contact = () => (
  <ContactStyles>
    <div className="contentHeader">
      <h2>Contact</h2>
    </div>
    <div className="contact-options">
      <a href="mailto:vikram.pareddy@gmail.com" target="_blank"><Mail /></a>
      <a href="https://www.linkedin.com/in/vikrampareddy/" target="_blank"><LinkedIn /></a>
      <a href="https://www.instagram.com/vikram.reddy/" target="_blank"> <Instagram /> </a>
      <a href="https://twitter.com/vikrampareddy" target="_blank"> <Twitter /> </a>
      
    </div>
  </ContactStyles>
)

export default Contact;