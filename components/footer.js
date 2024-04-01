import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagram, faInstagramSquare, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='upper-footer row'>
        <div className='col-3 footer-col'>
          <img src='logo.svg' className='brand-logo'/>
          <div className='footer-text'>
          These guys have been absolutely outstanding. When I needed them they came through in a big way! I know that if you buy this theme.
          </div>
          <div className='contact-info'>
          CONTACT INFO
          </div>
          <div className='contacts'>
              <div className='contact-data'>
                <FontAwesomeIcon icon={faPhone} />
                +91 1234567891
              </div>
              <div className='contact-data'>
                <FontAwesomeIcon icon={faEnvelope} />
                munasbas007@gmail.com
              </div>
          </div>
        </div>
        <div className='col-2 footer-col'>
            <h5 className='head-footer'>
            Account
            </h5>
            <div className='footer-links'>
                  <a className='footer-link'>Home</a>
                  <a className='footer-link'>About Us</a>
                  <a className='footer-link'>Contact Us</a>
            </div>
        </div>
        <div className='col-2 footer-col'>
        <h5 className='head-footer'>
        Legals
            </h5>
            <div className='footer-links'>
                  <a className='footer-link'>Privacy Policy</a>
                  <a className='footer-link'>Terms & Condition</a>
            </div>
        </div>
        <div className='col-3 footer-col'>
        <h5 className='head-footer'>
        Subscribe
            </h5>
            <div className='footer-mail-input'>
            <FontAwesomeIcon icon={faEnvelope} />
              <input className='footer-input' type='email' placeholder='Enter Your Email'/>
            </div>
            <button className='footer-btn'>
            Subscribe
            </button>
        </div>
        <hr/>
        <div className='lower-footer'>
            <div className='social-icons'>
              <a className='social-icon'>
              <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a className='social-icon'>
              <FontAwesomeIcon icon={faFacebookSquare} />
              </a>
              <a className='social-icon'>
              <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a className='social-icon'>
              <FontAwesomeIcon icon={faInstagramSquare} />
              </a>
              <a className='social-icon'>
              <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            <div className='copyRights'>
            @2023 For Salone All Rights Reserved.
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer