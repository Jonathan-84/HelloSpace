import React from 'react';
import { Link } from 'react-router-dom';
//import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';


function Navbar(){

    return (
      <>
                <div className='nav-container'>
                  <div className="header-image">
                    <div className='header-container'>
                  <h1 className="nav-text">Hello Space</h1>
                <div className='nav-links'>
                <ul >
                <Link to="/home" className="nav-text">Home</Link>
                        </ul>
                
                <ul>
                <Link to="/earth" className="nav-text">Earth</Link>
                </ul>
                </div>
                </div>
                </div>
                </div>
      </>
    );
  };
  
  export default Navbar;
  