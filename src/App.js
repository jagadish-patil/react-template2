import React from "react";

import NavBar from "./Navbar";
import HeroSection from "./HeroSection";
import PortfolioSection from "./PortfolioSection";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Copyright from "./Copyright";
import PortfolioModals from "./PortfolioModals";

const App = () => {
    return(
        <div>
            <NavBar />
            <HeroSection />
            <PortfolioSection />
            <About />
            <Contact />
            <Footer />
            <Copyright />
            <PortfolioModals />
        </div>
    )
}

export default App;
