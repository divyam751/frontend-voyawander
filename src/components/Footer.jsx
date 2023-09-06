import { Heading } from "@chakra-ui/react";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div id='footer'>
      <div className='footerContainer'>
        <div className='textPart'>
          <Heading>Voyagers</Heading>
          <span>
            Voyawander is the gateway to new horizons, where each step leads to
            a world of wonder waiting to be explored.
          </span>
        </div>
        <div className='socialMedia'>
          <BsInstagram />
          <BiLogoLinkedin />
          <BsFacebook />
        </div>
      </div>
    </div>
  );
};
export default Footer;
