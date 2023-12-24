import React, { useState, useEffect } from 'react';
import { Button } from './Button.js';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              {/* <img src='/Share hive.ico' alt='Share Hive Logo' className='logo' /> */}
              <span className="navbar-text">
            <span className="share">SHARE</span> HIVE
            </span>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'> 
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Study Hive
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
          
            <li className='nav-item'>
              <Link
                to='/chat'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                ChatRoom
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/contactus'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>

            <li>
              <Link
                to='/selfstudy'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Self Study
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Self Study</Button>}
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
