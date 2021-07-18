import React from 'react';
import { Link } from 'react-router-dom';



function Navbar(){

    return (
      <>
                <div className='nav-container'>
                  <div className="header-image">
                    <div className='header-container'>
                  <h2>
                      <Link to={"/"} className="nav-text"> Hello Space</Link>
                      </h2>
                <div className='nav-links'>
       {/*      <ul >
                <Link to="/" className="nav-text">Temp</Link>
                        </ul>*/}
                
       <ul>
                <Link to={"/earth"} className="nav-text">Earth</Link>
                </ul>
                <ul>
                <Link to={"/mars"} className="nav-text">Mars</Link>
                </ul>
                </div>
                </div>
                </div>
                </div>
      </>
    );
  };
  
  export default Navbar;
  