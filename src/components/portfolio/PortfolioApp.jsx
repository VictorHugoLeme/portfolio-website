import React from 'react'
import Header from './header/Header'
import Nav from './nav/Nav'
import About from './about/About'
import Experience from './experience/Experience'
import Services from './services/Services'
import Portfolio from './portfolio/Portfolio'
import Contact from './contact/Contact'
import Footer from './footer/Footer'
import "./index.css"

const PortfolioApp = () => {

    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Services />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    )
}

export default PortfolioApp