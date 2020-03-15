import React from 'react';
import NotFound from './not-found';
import VenuBookingService from './components/venuebookingservice';
import RealWedding from './components/realWedding';
import Vendors from './components/allVendors';
import Privacy from './components/Privacy';
import SingleVendor from './components/vendor-single';
import TopNavigation from './components/layout/Header.jsx';
import Home from './components/Home/Index.jsx'; 
import Footer from './components/layout/footer.jsx';
import BottomFooter from './components/layout/bottom-footer.jsx';
import Review from './components/review';
import SingleRealWedding from './components/singleRealWedding.jsx';
import Term from './components/Term.jsx';
import Blog from './components/blog.jsx';
import BlogMain from './components/Blog-main.jsx';
import BlogSingle from './components/Blog-single.jsx';
import About from './components/About.jsx';
import FAQ from './components/FAQ.jsx';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'; 
import './components/css/main.css';
import { BrowserRouter , Switch, Route } from 'react-router-dom';
function App () {
    return(
      <BrowserRouter basename='/wedme/'>
        <div id="header" className="App">
          <TopNavigation/>
       </div>
      <Switch>
          <Route  exact path="/" component={Home} />
          <Route  path="/venue-booking-service" component={VenuBookingService} />
          <Route  path="/real-wedding" component={RealWedding} exact />
          <Route  path="/vendors" component={Vendors} />
          <Route  path="/single-vendor" component={SingleVendor} />
          <Route  path="/blog" component={Blog} />
          <Route  path="/blog-main" component={BlogMain} />
          <Route  path="/blog-single" component={BlogSingle} />
          <Route  path="/review" component={Review} />
          <Route  path="/terms-and-conditions" component={Term} />
          <Route  path="/privacy" component={Privacy} />
          <Route  path="/about" component={About} />
          <Route  path="/faq" component={FAQ} />
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
      </BrowserRouter>
    );
  
}

// render(
//     <Router>
//       <Route path="/home" component = {Home} />
//       <Route path="/venu-booking-service" component = {VenuBookingService} />
//     </Router>
// )
export default App;
