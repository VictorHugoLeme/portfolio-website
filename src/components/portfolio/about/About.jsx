import React from 'react'
import './about.css'
import selfie from '../../../assets/selfie.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import Translator from '../i18n/Translator'

const About = () => {

    return (
        <section id="about">
            <h5><Translator path='about.title' /></h5>
            <h2><Translator path='about.subtitle' /></h2>

            <div className="container about__container">
                <div className="about__me">
                    <img src={selfie} alt="About me" />
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className='about__icon' />
                            <h5>
                                <Translator path='about.experience' />
                            </h5>
                            <small><Translator path='about.time' /></small>
                        </article>
                        <article className="about__card">
                            <FiUsers className='about__icon' />
                            <h5>
                                <Translator path='about.clients' />
                            </h5>
                            <small><Translator path='about.clientsNumber' /></small>
                        </article>
                        <article className="about__card">
                            <VscFolderLibrary className='about__icon' />
                            <h5>
                                <Translator path='about.projects' />
                            </h5>
                            <small><Translator path='about.number' /></small>
                        </article>
                    </div>
                    <p>
                        <Translator path='about.text' />
                    </p>
                    <a href="#contact" className="btn btn-primary"><Translator path='about.contact' /></a>
                </div>
            </div>
        </section>
    )
}

export default About