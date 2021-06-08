import React from 'react';
import { Link } from 'react-router-dom';
//import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';


function Navbar(){

    return (
      <>
                <div className='nav-container'>
                <div className='nav-links'>
                <ul className='nav-item active'>
                <Link to="/" className="link-text m-3  text-dark font-weight-bold fw-bold main-link">Home</Link>
                        </ul>
                
                <ul className='nav-item active'>
                <Link to="/Earth" className="link-text text-dark font-weight-bold m-3 add-padding main-link">Earth</Link>
                </ul>
                </div>
                </div>
      </>
    );
  };
  
  export default Navbar;
  