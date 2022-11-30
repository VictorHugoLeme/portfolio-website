import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import Translator from '../i18n/Translator'

const Footer = () => {
    return (
        <footer>
            <a href="#header" className='footer__logo'>Victor Leme</a>

            <ul className='permalinks'>
                <li><a href="#header"><Translator path='footer.home' /></a></li>
                <li><a href="about"><Translator path='footer.about' /></a></li>
                <li><a href="experience"><Translator path='footer.experience' /></a></li>
                <li><a href="services"><Translator path='footer.services' /></a></li>
                <li><a href="portfolio"><Translator path='footer.portfolio' /></a></li>
                <li><a href="contact"><Translator path='footer.contact' /></a></li>
            </ul>

            <div className="footer__socials">
                <a href='https://www.linkedin.com/in/victor-hugoleme/' target="_blank" rel="noreferrer"><BsLinkedin /></a>
                <a href='https://github.com/VictorHugoLeme' target="_blank" rel="noreferrer"><BsGithub /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Victor Hugo Leme. <Translator path='footer.rights' /></small>
            </div>
        </footer >
    )
}

export default Footer