import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar.js'
import Footer from './Components/Footer'
import Home from './Pages/home'
import Music from './Components/MusicPanel'
import Earth from './Pages/Earth';

require('dotenv').config()

function App() {
  return (
      <Router>
        <>
          <Navbar />
          <div className='page-container'>
          <div className='LeftPanel'>
          <Music/>
          </div>
          <div className='main'>
          <Switch>
         <Route exact path='/' component={Home}/>
         <Route exact path='/earth' component={Earth}/>
          {/*  <Route exact path='/' component={SearchBooks} />
            <Route exact path='/saved' component={SavedBooks} />
  <Route component={SearchBooks} />*/}
          </Switch>
          </div>
          </div>
          <div className='footer-size'>
          <Footer/>
          </div>
  
        </>
      </Router>

    );
}

export default App;
