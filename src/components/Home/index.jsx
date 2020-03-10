import React from "react";
import HomeHeroSection from './home.jsx';
import HomeReadAdviceAndIdeas from './homereadadviceandideas.jsx';

function Home() {
    return (
        <React.Fragment>
            <div className="wrap paB-80">
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