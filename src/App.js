import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import {Router, Route} from 'react-router';
import Routes from './route';
import NotFound from './not-found';
import VenuBookingService from './components/venuebookingservice';
import RealWedding from './components/realWedding';
import Vendors from './components/allVendors';
import SingleVendor from './components/vendor-single';
import TopNavigation from './components/layout/header.jsx';
import Home from './components/Home/index.jsx'; 
import Footer from './components/layout/footer.jsx';
import BottomFooter from './components/layout/bottom-footer.jsx';
import Review from './components/review';
import SingleRealWedding from './components/singleRealWedding.jsx';
import Blog from './components/blog.jsx';
// import BlogSingle from './components/blog-single.jsx';
// import VenuBookingService from './components/venuebookingservice.jsx';

import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'; 
import './components/css/main.css';
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App () {
    return(
      <Router>
        <div id="header" className="App">
          <TopNavigation/>
       </div>
      <Switch>
          <Route  exact path="/" component={Home} />
          <Route  path="/venue-booking-service" component={VenuBookingService} />
          <Route  path="/real-wedding" component={RealWedding} />
          <Route  path="/vendors" component={Vendors} />
          <Route  path="/single-vendor" component={SingleVendor} />
          <Route  path="/blog" component={Blog} />
          {/* <Route  path="/blog-single" component={BlogSingle} /> */}
          <Route  path="/review" component={Review} />
          <Route  path="/single-real-wedding" component={SingleRealWedding} />
          <Route exact path="/home" component={Home} />
          <Route component={NotFound} />
          <redirected to="/not-found"/>
      </Switch>
        <div id="footer" class="container-fluid bg-dark-purple">
          <Footer/>
        </div>   
        <div id="bottom-footer" class="container-fluid">
          <BottomFooter/>
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
