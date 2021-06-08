import React from 'react';
//import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';

// Will add in the future
function Footer() {
    return (
      <>

<div className='footer'>
    <div className="footer-container" >  

<ul>
    <Link href="https://github.com/Jonathan-84" target="_blank">GitHub</Link>
 </ul>
 <ul>
    <Link href="https://www.linkedin.com/company/exley-deadlines" target="_blank">LinkedIn</Link>
    </ul>
</div>
</div>
</>    
    )
    
}
export default Footer;