import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineBook } from 'react-icons/ai'
import { RiServiceLine } from 'react-icons/ri'
import { AiOutlineMessage } from 'react-icons/ai'
import { BsBook } from 'react-icons/bs'
import { useState } from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState("header")
    return (
        <nav>
            <a onClick={() => setActiveNav('header')} className={activeNav === 'header' ? 'active' : ''} href='#header'><AiOutlineHome /></a>
            <a onClick={() => setActiveNav('about')} className={activeNav === 'about' ? 'active' : ''} href='#about'><AiOutlineUser /></a>
            <a onClick={() => setActiveNav('experience')} className={activeNav === 'experience' ? 'active' : ''} href='#experience'><AiOutlineBook /></a>
            <a onClick={() => setActiveNav('services')} className={activeNav === 'services' ? 'active' : ''} href='#services'><RiServiceLine /></a>
            <a onClick={() => setActiveNav('portfolio')} className={activeNav === 'portfolio' ? 'active' : ''} href='#portfolio'><BsBook /></a>
            <a onClick={() => setActiveNav('contact')} className={activeNav === 'contact' ? 'active' : ''} href='#contact'><AiOutlineMessage /></a>
        </nav>
    )
}

export default Nav