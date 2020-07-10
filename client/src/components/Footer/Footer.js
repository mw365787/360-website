import React from 'react';
import SkypePng from '../Images/Logos/skype-icon.svg';
import WhatsappPng from '../Images/Logos/whatsapp-icon.svg';
import LinkedinPng from '../Images/Logos/linkedin-icon.svg';
import FooterLogo from '../Images/Logos/logo white.svg';
import './Footer.css';

import { Link } from 'react-router-dom';

const Footer = props => {


  return(
        <div className="footer">
            <nav className="Firstrow">
            <ul className="Navigation">
            <ul>
              <Link to="/"><li>HOME</li></Link>
              <Link to="/about"><li>ABOUT</li></Link>            
              <Link to="/experience"><li>EXPERIENCE</li></Link>
              <Link to="/services"><li>SERVICES</li></Link>
              <Link to="/contact"><li>CONTACT</li></Link>
            </ul>
            </ul>
            <div className="spacer"/>
              <ul className="SocialMedia">
                <a href="https://www.skype.com/en/"><img src={SkypePng} alt=""/></a>
                <a href="https://www.whatsapp.com/"><img src={WhatsappPng} alt=""/></a>
                <a href="https://www.linkedin.com/"><img src={LinkedinPng} alt=""/></a>
              </ul>
            </nav>
            <div className="footer-logo">
              <div className="pusher"/>
              <img src={FooterLogo} alt=""/>
            </div>
        </div>
        )
  }
export default Footer;
   