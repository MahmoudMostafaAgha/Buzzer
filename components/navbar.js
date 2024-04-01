import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBell, faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  // Dummy notification count for demonstration
  const notificationCount = 5;

  return (
    <nav>
      <div className="navbar-content">
        <img src="logo.svg" alt="Logo" className='brand-logo'/>
        <div className="nav-links">
          <a href="#" className='active-tap'>Home</a>
          <a href="#">Products</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="nav-icons">
          <FontAwesomeIcon icon={faUser} className="nav-icon" />
          <div className="notification-wrapper">
            {notificationCount > 0 && (
              <div className="notification-badge">{notificationCount}</div>
            )}
            <FontAwesomeIcon icon={faBell} className="nav-icon" />
          </div>
          <FontAwesomeIcon icon={faBars} className="nav-icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
