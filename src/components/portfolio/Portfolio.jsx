import React from 'react'
import './portfolio.css'
import metalclean from '../../assets/metalclean.png'
import myportfoliosite from '../../assets/myportfoliosite.png'
import Translator from '../i18n/Translator'

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5><Translator path='portfolio.title' /></h5>
            <h2><Translator path='portfolio.subtitle' /></h2>
            <div className="div container portfolio__container">
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={metalclean} alt="Metal Clean Industrial website" />
                    </div>
                    <h3><Translator path='portfolio.item1.title' /></h3>
                    <div className="portfolio__item-links">
                        {/* <a href="https://github.com/VictorHugoLeme/portfolio-website" className='btn'>Github</a> */}
                        <a href="https://metalcleanindustrial.com.br/" className='btn btn-primary' target='_blank' rel="noreferrer"><Translator path='portfolio.demo' /></a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={myportfoliosite} alt="My own portfolio website mockup" />
                    </div>
                    <h3><Translator path='portfolio.item2.title' /></h3>
                    <div className="portfolio__item-links">
                        <a href="https://github.com/VictorHugoLeme/portfolio-website" className='btn' target='_blank' rel="noreferrer">Github</a>
                        {/* <a href="#" className='btn btn-primary' target='_blank'><Translator path='portfolio.demo' /></a> */}
                    </div>
                </article>
            </div >
        </section >
    )
}

export default Portfolio