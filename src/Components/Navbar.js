import React from 'react';
import { Link } from 'react-router-dom';
//import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';


function Navbar(){

    return (
      <>
                <div className='nav-container'>
                  <div className="header-image">
                    <div className='header-container'>
                  <h2>
                      <Link to={process.env.PUBLIC_URL + "/"} className="nav-text"> Hello Space</Link>
                      </h2>
                <div className='nav-links'>
       {/*      <ul >
                <Link to="/" className="nav-text">Temp</Link>
                        </ul>*/}
                
       <ul>
                <Link to={process.env.PUBLIC_URL + "/earth"} className="nav-text">Earth</Link>
                </ul>
                <ul>
                <Link to={process.env.PUBLIC_URL + "/mars"} className="nav-text">Mars</Link>
                </ul>
                </div>
                </div>
                </div>
                </div>
      </>
    );
  };
  
  export default Navbar;
  