import { Button, Heading } from "@chakra-ui/react";
import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div id='contact'>
      <div className='contactContainer'>
        <img
          id='contactImg'
          src='https://www.whitespidermedia.com/_nuxt/img/196e79f.jpg'
          alt=''
        />

        <div id='contactText'>
          <Heading>Get in touch</Heading>
          <div className='textText'>
            <div>
              <text>
                Don't wait, reach out to us now and let us help you plan your
                next vacation. Our dedicated team is always here to answer your
                questions and make your travel dreams a reality.
              </text>
            </div>
          </div>
          <div className='contactInfo'>
            <input type='text' placeholder='Email' />
            <input type='number' placeholder='Mobile' />
          </div>
          <input type='text' placeholder='Message' />
        </div>
        <Button id='btn'>Send</Button>
      </div>
    </div>
  );
};

export default Contact;
