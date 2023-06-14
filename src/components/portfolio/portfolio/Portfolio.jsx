import React from 'react'
import './portfolio.css'
import metalclean from '../../../assets/metalclean.png'
import myportfoliosite from '../../../assets/myportfoliosite.png'
import github_portfolio from '../../../assets/github_portfolio.png'
import Translator from '../i18n/Translator'

class Portfolio extends React.Component {

    render() {
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
                            <a href="https://metalcleanindustrial.com.br/" className='btn btn-primary' target='_blank' rel="noreferrer"><Translator path='portfolio.demo' /></a>
                        </div>
                    </article>
                    <article className="portfolio__item">
                        <div className="portfolio__item-image">
                            <img src={myportfoliosite} alt="My own portfolio website mockup" />
                        </div>
                        <h3><Translator path='portfolio.item2.title' /></h3>
                        <div className="portfolio__item-links">
                            <a href="https://github.com/VictorHugoLeme/portfolio-website" className='btn btn-primary' target='_blank' rel="noreferrer">Github</a>
                        </div>
                    </article>
                    <article className="portfolio__item">
                        <div className="portfolio__item-image">
                            <img src={github_portfolio} alt="My own portfolio website mockup" />
                        </div>
                        <h3><Translator path='portfolio.item3.title' /></h3>
                        <div className="portfolio__item-links">
                            <a href="https://victorhugoleme.github.io/bc-dio-js/" className='btn btn-primary' target='_blank' rel="noreferrer">
                                <Translator path='portfolio.item3.button' />
                            </a>
                        </div>
                    </article>
                </div >
            </section >
        )
    }
}

export default Portfolio