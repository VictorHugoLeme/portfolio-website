import React from 'react'
import './header.css'
import CTA from './CTA'
import avatar from '../../assets/avatar.png'
import HeaderSocials from './HeaderSocials'
import { I18n } from '../i18n/I18n'
import Translator from '../i18n/Translator'

const Header = () => {

    if (!localStorage.getItem('avatarImage')) {
        localStorage.setItem('avatarImage', avatar);
    }
    var avatarImg = localStorage.getItem('avatarImage');

    return (
        <header >
            <div className="container header__container">
                <I18n className='flags' />
                <h5><Translator path='header.greeting' /></h5>
                <h1>Victor Leme</h1>
                <h5 className="text-light"><Translator path='header.role' /></h5>
                <CTA />
                <HeaderSocials />
                <div className="me">
                    <img src={avatarImg} alt="me" />
                </div>

                <a href="#contact" className="scroll__down"><Translator path='header.scroll' /></a>

            </div>
        </header>
    )
}

export default Header