import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import {Router, Route} from 'react-router';
import Routes from './route';
import NotFound from './not-found';
import VenuBookingService from './components/venuebookingservice';
import TopNavigation from './components/layout/header.jsx';
import Home from './components/Home/index.jsx';
import Footer from './components/layout/footer.jsx';
// import VenuBookingService from './components/venuebookingservice.jsx';

import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'; 
import './components/css/main.css';
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// function App() {
//   return (

        /* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */
//       <React.Fragment>
//         <div id="header" className="App">
//           <Router>
//             <TopNavigation/>
//             <Routes/>
//           </Router>
//         </div>
//         <Home/>
//         <div id="footer" class="container-fluid bg-dark-purple">
//           <Footer/>
//         </div>          
//        </React.Fragment>
//   );
// }

function App () {
  
    return(
      <Router>
        <div id="header" className="App">
          <TopNavigation/>
       </div>
      <Switch>
          <Route exact path="/home" component={Home} />
          <Route  path="/venue-booking-service" component={VenuBookingService} />
          <Route exact path="/home" component={Home} />
          <Route component={NotFound} />
          <redirected to="/not-found"/>
      </Switch>
        <div id="footer" class="container-fluid bg-dark-purple">
          <Footer/>
        </div>      
      </Router>
    );
  
}

// render(
//     <Router>
//       <Route path="/home" component = {Home} />
//       <Route path="/venu-booking-service" component = {VenuBookingService} />
//     </Router>
// )
export default App;
