import React, { Component } from "react";
import { Row } from "react";
import Routing from '../../route';
import HomeHeroSection from './home.jsx';
import HomeReadAdviceAndIdeas from './homereadadviceandideas.jsx';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import TopNavigation from '../layout/header.jsx';
import Footer from '../layout/footer.jsx';

// import './index.css';

// import HomeHeroSection from './components/Home/home.jsx';
// import HomeReadAdviceAndIdeas from './components/Home/homereadadviceandideas.jsx';

// ReactDOM.render(<TopNavigation />, document.getElementById('header'));
// ReactDOM.render(<HomeHeroSection />, document.getElementById('herosection'));
// ReactDOM.render(<HomeReadAdviceAndIdeas />, document.getElementById('homeReadAdviceAndIdeas'));
// ReactDOM.render(<Footer />, document.getElementById('footer'));
function Home() {
    return (
        <React.Fragment>
            <div className="wrap">
                <section id="herosection">
                    <HomeHeroSection/>
                </section>
            </div>
            <div class="container-fluid" id="homeReadAdviceAndIdeas">
                <HomeReadAdviceAndIdeas/>
            </div>     
        </React.Fragment>
    ); 
}
export default Home;