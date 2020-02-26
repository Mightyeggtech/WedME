import React from 'react';
import ReactDOM from 'react-dom';
import './components/css/main.css';
import App from './App';
// import TopNavigation from './components/layout/header.jsx';
// import HomeHeroSection from './components/Home/home.jsx';
// import HomeSecondSection from './components/Home/homesecondsection.jsx';
// import HomeReadAdviceAndIdeas from './components/Home/homereadadviceandideas.jsx';
// import Footer from './components/layout/footer.jsx';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<TopNavigation />, document.getElementById('header'));
// ReactDOM.render(<HomeHeroSection />, document.getElementById('herosection'));
// ReactDOM.render(<HomeReadAdviceAndIdeas />, document.getElementById('homeReadAdviceAndIdeas'));
// ReactDOM.render(<Footer />, document.getElementById('footer'));

ReactDOM.render(<App />, document.getElementById('root'));


// ReactDOM.render(<HomeSecondSection />, document.getElementById('homesecondsection'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA;
serviceWorker.unregister();
